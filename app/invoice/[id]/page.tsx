import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PayButton, ProposalForm } from "@/components/billing/invoice-actions";
import { Mark } from "@/components/mark";
import { formatNgn, formatUsd } from "@/lib/billing/money";
import { getInvoice } from "@/lib/billing/store";

export const dynamic = "force-dynamic";

const statusLabel = {
  negotiating: "With the studio",
  awaiting_payment: "Ready to pay",
  paid: "Paid",
  void: "Void",
} as const;

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const invoice = await getInvoice(id);
  return { title: invoice ? invoice.number : "Invoice" };
}

export default async function InvoicePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const invoice = await getInvoice(id);
  if (!invoice) notFound();

  return (
    <div className="px-6 pt-32 pb-24 md:px-10 md:pt-40">
      <article className="mx-auto max-w-3xl">
        <div className="flex items-center gap-3 text-sm">
          <Mark className="h-3.5 w-3.5" />
          <span>
            Gratebridge <span className="font-mono text-[10px] tracking-[0.18em] text-stone">LABS</span>
          </span>
        </div>
        <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-stone">{statusLabel[invoice.status]}</p>
        <h1 className="mt-3 font-serif text-6xl tracking-[-0.04em]">{invoice.number}</h1>
        <p className="mt-4 text-sm text-stone">
          {invoice.title}
          {invoice.cadence === "month" ? ` · month ${invoice.cycle}` : ""} · {invoice.name}
          {invoice.company ? ` · ${invoice.company}` : ""}
        </p>
        <p className="mt-10 font-serif text-5xl tracking-[-0.04em]">
          {formatUsd(invoice.status === "negotiating" && invoice.proposedUsd ? invoice.proposedUsd : invoice.amountUsd)}
        </p>
        <p className="mt-2 text-sm text-stone">
          {invoice.cadence === "month" ? "Per month. " : ""}
          {invoice.chargeNgn ? `Paystack charges ${formatNgn(invoice.chargeNgn)}. ` : ""}
          Starting fee {formatUsd(invoice.listPriceUsd)}.
          {invoice.proposedUsd && invoice.status === "negotiating" ? ` Proposed ${formatUsd(invoice.proposedUsd)}.` : ""}
        </p>
        {invoice.proposalNote ? <p className="mt-4 max-w-lg text-sm leading-6">{invoice.proposalNote}</p> : null}
        <div className="mt-8 flex flex-wrap gap-3">
          {invoice.status === "awaiting_payment" ? <PayButton invoiceId={invoice.id} /> : null}
          {invoice.status === "paid" ? (
            <Link href={`/invoice/${invoice.id}/receipt`} className="inline-flex rounded-full bg-ink px-5 py-3 text-sm text-cream">
              Receipt
            </Link>
          ) : null}
        </div>
        {invoice.status !== "paid" && invoice.status !== "void" ? <ProposalForm invoiceId={invoice.id} /> : null}
        <ol className="mt-12 space-y-4 border-t border-line pt-8">
          {invoice.events.map((event) => (
            <li key={`${event.at}-${event.type}`} className="grid gap-1 text-sm md:grid-cols-[9rem_1fr]">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-stone">
                {new Date(event.at).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
              </span>
              <span>{event.note}</span>
            </li>
          ))}
        </ol>
      </article>
    </div>
  );
}
