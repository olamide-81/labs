import { MongoClient, type Collection } from "mongodb";
import type { Invoice } from "@/lib/billing/types";

const globalStore = globalThis as unknown as { labsMongo?: Promise<MongoClient> };

function clientPromise() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI is not set");
  if (!globalStore.labsMongo) {
    globalStore.labsMongo = new MongoClient(uri).connect();
  }
  return globalStore.labsMongo;
}

async function collection() {
  const client = await clientPromise();
  const col = client.db("labs-billing").collection<Invoice>("invoices");
  await col.createIndex({ id: 1 }, { unique: true });
  await col.createIndex({ email: 1 });
  await col.createIndex({ paystackReference: 1 });
  return col;
}

async function nextNumber(client: MongoClient) {
  const counters = client.db("labs-billing").collection<{ _id: string; n: number }>("counters");
  const row = await counters.findOneAndUpdate(
    { _id: "invoice" },
    { $inc: { n: 1 } },
    { upsert: true, returnDocument: "after" },
  );
  const n = row?.n ?? 1;
  return `LAB-${new Date().getFullYear()}-${String(n).padStart(4, "0")}`;
}

export async function insertInvoice(invoice: Omit<Invoice, "number">) {
  const client = await clientPromise();
  const number = await nextNumber(client);
  const doc = { ...invoice, number };
  await (await collection()).insertOne(doc);
  return doc;
}

export async function getInvoice(id: string) {
  return (await collection()).findOne({ id }, { projection: { _id: 0 } });
}

export async function invoicesForEmail(email: string) {
  return (await collection())
    .find({ email: email.toLowerCase() }, { projection: { _id: 0 } })
    .sort({ createdAt: -1 })
    .toArray();
}

export async function invoiceByReference(reference: string) {
  return (await collection()).findOne({ paystackReference: reference }, { projection: { _id: 0 } });
}

export async function listInvoices() {
  return (await collection()).find({}, { projection: { _id: 0 } }).sort({ createdAt: -1 }).limit(80).toArray();
}

export async function saveInvoice(id: string, patch: Partial<Invoice>, event?: Invoice["events"][number]) {
  const col: Collection<Invoice> = await collection();
  const $set: Partial<Invoice> = { ...patch, updatedAt: new Date().toISOString() };
  await col.updateOne(
    { id },
    event ? { $set, $push: { events: event } } : { $set },
  );
  return getInvoice(id);
}

export async function markPaid(id: string, reference: string) {
  const existing = await getInvoice(id);
  if (!existing || existing.status === "void") return { invoice: existing, fresh: false };
  if (existing.status === "paid") return { invoice: existing, fresh: false };
  const paidAt = new Date().toISOString();
  const nextBill = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();
  const invoice = await saveInvoice(
    id,
    {
      status: "paid",
      paidAt,
      receiptNumber: `RCT-${existing.number}`,
      paystackReference: reference,
      ...(existing.cadence === "month" ? { dueAt: nextBill } : {}),
    },
    { at: paidAt, type: "paid", note: `Paid. Reference ${reference}.` },
  );
  return { invoice, fresh: true };
}

export async function dueForReminder(now = Date.now()) {
  const soon = new Date(now + 3 * 24 * 60 * 60 * 1000).toISOString();
  const stale = new Date(now - 3 * 24 * 60 * 60 * 1000).toISOString();
  return (await collection())
    .find(
      {
        status: "awaiting_payment",
        dueAt: { $lte: soon },
        $or: [{ lastReminderAt: { $exists: false } }, { lastReminderAt: { $lte: stale } }],
      },
      { projection: { _id: 0 } },
    )
    .toArray();
}

export type ProjectNote = {
  id: string;
  name: string;
  email: string;
  company: string;
  engagement: string;
  message: string;
  createdAt: string;
};

async function notes() {
  const client = await clientPromise();
  const col = client.db("labs-billing").collection<ProjectNote>("notes");
  await col.createIndex({ createdAt: -1 });
  return col;
}

export async function insertNote(note: ProjectNote) {
  await (await notes()).insertOne(note);
  return note;
}

export async function listNotes() {
  return (await notes()).find({}, { projection: { _id: 0 } }).sort({ createdAt: -1 }).limit(80).toArray();
}

export async function retainersToRenew(now = new Date().toISOString()) {
  return (await collection())
    .find(
      { status: "paid", cadence: "month", renewed: false, dueAt: { $lte: now } },
      { projection: { _id: 0 } },
    )
    .toArray();
}
