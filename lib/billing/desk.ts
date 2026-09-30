import { emailInvoiceOpened } from "@/lib/billing/mail";
import { parseUsd, usdToNgn } from "@/lib/billing/money";
import { getInvoice, saveInvoice } from "@/lib/billing/store";

function dueInDays(days: number) {
  return new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString();
}

export async function decideInvoice(id: string, decision: string, amountRaw: string | null) {
  const invoice = await getInvoice(id);
  if (!invoice || invoice.status === "paid" || invoice.status === "void") {
    return { error: "That invoice cannot be changed." };
  }
  const now = new Date().toISOString();
  if (decision === "void") {
    await saveInvoice(invoice.id, { status: "void" }, { at: now, type: "void", note: "Voided by the studio." });
    return { ok: true as const };
  }
  const amount = decision === "accept" ? invoice.proposedUsd : parseUsd(amountRaw);
  if (!amount) return { error: "Set the agreed fee." };
  const next = await saveInvoice(
    invoice.id,
    {
      status: "awaiting_payment",
      amountUsd: amount,
      chargeNgn: usdToNgn(amount),
      dueAt: dueInDays(7),
    },
    {
      at: now,
      type: decision === "accept" ? "accepted" : "countered",
      note: decision === "accept" ? "Proposal accepted." : "Studio set the fee.",
    },
  );
  if (next) await emailInvoiceOpened(next);
  return { ok: true as const };
}
