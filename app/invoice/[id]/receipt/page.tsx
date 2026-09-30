import { notFound } from "next/navigation";
import { Mark } from "@/components/mark";
import { formatNgn, formatUsd } from "@/lib/billing/money";
import { getInvoice } from "@/lib/billing/store";

export const dynamic = "force-dynamic";

export default async function ReceiptPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const invoice = await getInvoice(id);
  if (!invoice || invoice.status !== "paid") notFound();

  return (
    <div className="px-6 pt-32 pb-24 md:px-10 md:pt-40">
      <article className="mx-auto max-w-xl border border-line bg-paper p-8 md:p-12">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm">
            <Mark className="h-3.5 w-3.5" />
            <span>
              Gratebridge <span className="font-mono text-[10px] tracking-[0.18em] text-stone">LABS</span>
            </span>
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-stone">Receipt</p>
        </div>
        <h1 className="mt-10 font-serif text-5xl tracking-[-0.04em]">{invoice.receiptNumber}</h1>
        <dl className="mt-10 space-y-4 text-sm">
          <div className="flex justify-between gap-6 border-b border-line pb-3">
            <dt className="text-stone">Invoice</dt>
            <dd>{invoice.number}</dd>
          </div>
          <div className="flex justify-between gap-6 border-b border-line pb-3">
            <dt className="text-stone">Engagement</dt>
            <dd>{invoice.title}</dd>
          </div>
          <div className="flex justify-between gap-6 border-b border-line pb-3">
            <dt className="text-stone">Billed to</dt>
            <dd className="text-right">
              {invoice.name}
              <br />
              {invoice.email}
            </dd>
          </div>
          <div className="flex justify-between gap-6 border-b border-line pb-3">
            <dt className="text-stone">Paid</dt>
            <dd>{invoice.paidAt ? new Date(invoice.paidAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) : ""}</dd>
          </div>
          <div className="flex justify-between gap-6 border-b border-line pb-3">
            <dt className="text-stone">Amount</dt>
            <dd>{formatUsd(invoice.amountUsd)}</dd>
          </div>
          {invoice.chargeNgn ? (
            <div className="flex justify-between gap-6 border-b border-line pb-3">
              <dt className="text-stone">Charged</dt>
              <dd>{formatNgn(invoice.chargeNgn)}</dd>
            </div>
          ) : null}
          {invoice.paystackReference ? (
            <div className="flex justify-between gap-6">
              <dt className="text-stone">Reference</dt>
              <dd className="text-right font-mono text-xs">{invoice.paystackReference}</dd>
            </div>
          ) : null}
        </dl>
      </article>
    </div>
  );
}
