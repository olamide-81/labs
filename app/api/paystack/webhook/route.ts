import { emailReceipt } from "@/lib/billing/mail";
import { verifyPaystackSignature } from "@/lib/billing/paystack";
import { invoiceByReference, markPaid } from "@/lib/billing/store";

export async function POST(request: Request) {
  const raw = await request.text();
  const signature = request.headers.get("x-paystack-signature");
  if (!verifyPaystackSignature(raw, signature)) {
    return Response.json({ ok: false }, { status: 401 });
  }

  const body = JSON.parse(raw) as {
    event?: string;
    data?: { reference?: string; status?: string };
  };
  const reference = body.data?.reference;
  if (body.event === "charge.success" && reference && body.data?.status === "success") {
    const invoice = await invoiceByReference(reference);
    if (invoice) {
      const paid = await markPaid(invoice.id, reference);
      if (paid.fresh && paid.invoice) await emailReceipt(paid.invoice).catch(() => undefined);
    }
  }

  return Response.json({ ok: true });
}
