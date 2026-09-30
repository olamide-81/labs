import { timingSafeEqual } from "crypto";
import { decideInvoice } from "@/lib/billing/desk";
import { listInvoices, listNotes } from "@/lib/billing/store";

function authorized(request: Request) {
  const header = request.headers.get("authorization") ?? "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";
  const key = process.env.BILLING_DESK_KEY ?? "";
  if (!key || token.length !== key.length) return false;
  return timingSafeEqual(Buffer.from(token), Buffer.from(key));
}

export async function GET(request: Request) {
  if (!authorized(request)) return Response.json({ error: "Unauthorized" }, { status: 401 });
  const [invoices, notes] = await Promise.all([listInvoices(), listNotes()]);
  return Response.json({ invoices, notes });
}

export async function POST(request: Request) {
  if (!authorized(request)) return Response.json({ error: "Unauthorized" }, { status: 401 });
  const body = (await request.json().catch(() => null)) as {
    invoice?: string;
    decision?: string;
    amount?: string;
  } | null;
  if (!body?.invoice || !body.decision) {
    return Response.json({ error: "Invoice and decision are required." }, { status: 400 });
  }
  const result = await decideInvoice(body.invoice, body.decision, body.amount ?? null);
  if (result.error) return Response.json(result, { status: 400 });
  return Response.json(result);
}
