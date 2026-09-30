import Link from "next/link";
import { confirmReturn } from "@/lib/billing/actions";
import { formatUsd } from "@/lib/billing/money";

export const dynamic = "force-dynamic";

export default async function CheckoutReturnPage({
  searchParams,
}: {
  searchParams: Promise<{ reference?: string; trxref?: string; invoice?: string }>;
}) {
  const query = await searchParams;
  const reference = query.reference || query.trxref;
  const invoice = await confirmReturn(reference, query.invoice);

  return (
    <div className="px-6 pt-36 pb-24 md:px-10">
      <div className="mx-auto max-w-xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone">Gratebridge Labs</p>
        <h1 className="mt-4 font-serif text-5xl tracking-[-0.04em]">
          {invoice?.status === "paid" ? "Payment received." : "Payment not completed."}
        </h1>
        {invoice ? (
          <p className="mt-6 text-sm leading-6 text-stone">
            {invoice.number} · {invoice.title} · {formatUsd(invoice.amountUsd)}
          </p>
        ) : (
          <p className="mt-6 text-sm leading-6 text-stone">We could not match this return to an invoice.</p>
        )}
        {invoice ? (
          <Link href={`/invoice/${invoice.id}`} className="mt-8 inline-flex rounded-full bg-ink px-5 py-3 text-sm text-cream">
            Open invoice
          </Link>
        ) : null}
      </div>
    </div>
  );
}
