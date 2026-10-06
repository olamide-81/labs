import type { Invoice } from "./types";
export type PaymentCharge = { status?: string; reference?: string; amount?: number; currency?: string };
/** A successful charge belongs to exactly the invoice and quoted NGN amount. */
export function chargeMatchesInvoice(invoice: Invoice, charge: PaymentCharge | undefined) {
  return invoice.status === "awaiting_payment" && Boolean(invoice.paystackReference) &&
    charge?.status === "success" && charge.reference === invoice.paystackReference &&
    charge.currency === "NGN" && Number.isSafeInteger(charge.amount) &&
    typeof invoice.chargeNgn === "number" && invoice.chargeNgn > 0 &&
    charge.amount === Math.round(invoice.chargeNgn * 100);
}
