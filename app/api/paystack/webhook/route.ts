import { chargeMatchesInvoice, type PaymentCharge } from "@/lib/billing/validation";
import { emailReceipt } from "@/lib/billing/mail";
import { verifyPaystackSignature } from "@/lib/billing/paystack";
import { invoiceByReference, markPaid } from "@/lib/billing/store";

export async function POST(request: Request) {
  const raw = await request.text();
  const signature = request.headers.get("x-paystack-signature");
  if (!verifyPaystackSignature(raw, signature)) {
    return Response.json({ ok: false }, { status: 401 });
  }

  let body: { event?: string; data?: PaymentCharge };
  try { body = JSON.parse(raw); } catch { return Response.json({ ok: false }, { status: 400 }); }
  if (!body || typeof body !== "object") return Response.json({ ok: false }, { status: 400 });
  const reference = body.data?.reference;
  if (body.event === "charge.success" && reference && body.data?.status === "success") {
    const invoice = await invoiceByReference(reference);
    if (invoice && chargeMatchesInvoice(invoice, body.data)) {
      const paid = await markPaid(invoice.id, reference, body.data!.amount!);
      if (paid.fresh && paid.invoice) await emailReceipt(paid.invoice).catch(() => undefined);
    }
  }

  return Response.json({ ok: true });
}
