"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { offerById } from "@/lib/offers";
import { openInvoice } from "@/lib/billing/issue";
import { emailInvoiceOpened, emailReceipt, emailResume } from "@/lib/billing/mail";
import { decideInvoice } from "@/lib/billing/desk";
import { siteUrl, parseUsd } from "@/lib/billing/money";
import { startPaystackCharge, verifyPaystackCharge } from "@/lib/billing/paystack";
import {
  getInvoice,
  invoiceByReference,
  invoicesForEmail,
  markPaid,
  saveInvoice,
} from "@/lib/billing/store";

export type ActionState = { error?: string; notice?: string } | null;

function clean(value: FormDataEntryValue | null) {
  return String(value ?? "").trim();
}

export async function checkoutAction(_prev: ActionState, formData: FormData): Promise<ActionState> {
  const offer = offerById(clean(formData.get("offer")));
  const name = clean(formData.get("name"));
  const email = clean(formData.get("email")).toLowerCase();
  const company = clean(formData.get("company"));
  const intent = clean(formData.get("intent"));
  if (!offer) return { error: "Choose an engagement." };
  if (!name || !email.includes("@")) return { error: "Name and email are required." };

  try {
    if (intent === "negotiate") {
      const proposed = parseUsd(formData.get("proposed"));
      const note = clean(formData.get("note")).slice(0, 500);
      if (!proposed) return { error: "Enter the fee you want to propose." };
      const invoice = await openInvoice({
        offerId: offer.id,
        name,
        email,
        company,
        amountUsd: offer.priceUsd,
        proposedUsd: proposed,
        proposalNote: note,
        status: "negotiating",
      });
      await emailInvoiceOpened(invoice);
      redirect(`/invoice/${invoice.id}`);
    }

    const invoice = await openInvoice({
      offerId: offer.id,
      name,
      email,
      company,
      amountUsd: offer.priceUsd,
      status: "awaiting_payment",
    });
    await emailInvoiceOpened(invoice);
    const reference = `labs_${invoice.id}_${Date.now()}`;
    const charge = await startPaystackCharge({
      email,
      amountUsd: invoice.amountUsd,
      reference,
      callbackUrl: `${siteUrl()}/checkout/return?invoice=${invoice.id}`,
      metadata: { invoiceId: invoice.id, offer: offer.id },
    });
    await saveInvoice(
      invoice.id,
      { paystackReference: charge.reference, chargeNgn: charge.ngn, fxRate: charge.rate },
      { at: new Date().toISOString(), type: "payment_started", note: "Sent to Paystack." },
    );
    redirect(charge.url);
  } catch (error) {
    if (typeof error === "object" && error && "digest" in error) throw error;
    return { error: error instanceof Error ? error.message : "Checkout failed." };
  }
}

export async function payInvoiceAction(invoiceId: string): Promise<ActionState> {
  const invoice = await getInvoice(invoiceId);
  if (!invoice || invoice.status !== "awaiting_payment") return { error: "This invoice is not ready to pay." };
  try {
    const reference = `labs_${invoice.id}_${Date.now()}`;
    const charge = await startPaystackCharge({
      email: invoice.email,
      amountUsd: invoice.amountUsd,
      reference,
      callbackUrl: `${siteUrl()}/checkout/return?invoice=${invoice.id}`,
      metadata: { invoiceId: invoice.id, offer: invoice.offerId },
    });
    await saveInvoice(
      invoice.id,
      { paystackReference: charge.reference, chargeNgn: charge.ngn, fxRate: charge.rate },
      { at: new Date().toISOString(), type: "payment_started", note: "Sent to Paystack." },
    );
    redirect(charge.url);
  } catch (error) {
    if (typeof error === "object" && error && "digest" in error) throw error;
    return { error: error instanceof Error ? error.message : "Payment could not start." };
  }
}

export async function proposeAgainAction(_prev: ActionState, formData: FormData): Promise<ActionState> {
  const invoice = await getInvoice(clean(formData.get("invoice")));
  if (!invoice || invoice.status === "paid" || invoice.status === "void") return { error: "This invoice is closed." };
  const proposed = parseUsd(formData.get("proposed"));
  const note = clean(formData.get("note")).slice(0, 500);
  if (!proposed) return { error: "Enter a fee." };
  const now = new Date().toISOString();
  await saveInvoice(
    invoice.id,
    { status: "negotiating", proposedUsd: proposed, proposalNote: note, amountUsd: invoice.listPriceUsd },
    { at: now, type: "proposed", note: note || `Proposed ${proposed}.` },
  );
  const next = await getInvoice(invoice.id);
  if (next) await emailInvoiceOpened(next);
  redirect(`/invoice/${invoice.id}`);
}

export async function resumeAction(_prev: ActionState, formData: FormData): Promise<ActionState> {
  const email = clean(formData.get("email")).toLowerCase();
  if (!email.includes("@")) return { error: "Enter the email on the invoice." };
  const rows = await invoicesForEmail(email);
  if (rows.length === 0) return { error: "No invoices for that email." };
  try {
    await emailResume(email, rows);
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Could not send the email." };
  }
  return { notice: "Sent. Check your email for the invoice links." };
}

export async function confirmReturn(reference: string | undefined, invoiceId: string | undefined) {
  if (!reference) return null;
  const invoice = invoiceId ? await getInvoice(invoiceId) : await invoiceByReference(reference);
  if (!invoice) return null;
  const charge = await verifyPaystackCharge(reference);
  if (charge?.status !== "success") return getInvoice(invoice.id);
  const paid = await markPaid(invoice.id, reference);
  if (paid.fresh && paid.invoice) await emailReceipt(paid.invoice).catch(() => undefined);
  return paid.invoice;
}

async function deskOk() {
  const jar = await cookies();
  const key = process.env.BILLING_DESK_KEY;
  return Boolean(key) && jar.get("labs_desk")?.value === key;
}

export async function deskLoginAction(_prev: ActionState, formData: FormData): Promise<ActionState> {
  const key = clean(formData.get("key"));
  if (!process.env.BILLING_DESK_KEY || key !== process.env.BILLING_DESK_KEY) return { error: "That key does not match." };
  const jar = await cookies();
  jar.set("labs_desk", key, { httpOnly: true, sameSite: "lax", path: "/", maxAge: 60 * 60 * 24 * 14 });
  redirect("/billing/desk");
}

export async function deskDecideAction(_prev: ActionState, formData: FormData): Promise<ActionState> {
  if (!(await deskOk())) return { error: "Sign in to the desk first." };
  const result = await decideInvoice(
    clean(formData.get("invoice")),
    clean(formData.get("decision")),
    clean(formData.get("amount")),
  );
  if (result.error) return { error: result.error };
  redirect("/billing/desk");
}

export async function isDeskAuthed() {
  return deskOk();
}
