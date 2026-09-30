import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckoutForm } from "@/components/billing/checkout-form";
import { Mark } from "@/components/mark";
import { formatNgn, formatUsd, usdToNgn, usdToNgnRate } from "@/lib/billing/money";
import { offerById } from "@/lib/offers";
import { studio } from "@/lib/site";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Pay Gratebridge Labs, or propose a fee. Software, websites, and retainers.",
};

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{ offer?: string }>;
}) {
  const { offer: offerId } = await searchParams;
  const offer = offerById(offerId);
  if (!offer) notFound();
  const rate = usdToNgnRate();

  return (
    <div className="px-6 pt-28 pb-20 md:px-10 md:pt-36">
      <div className="mx-auto grid max-w-[1100px] overflow-hidden rounded-[1.6rem] border border-line lg:grid-cols-2">
        <section className="bg-night px-7 py-10 text-cream md:px-10 md:py-12">
          <Link href="/" className="inline-flex items-center gap-3 text-sm">
            <Mark className="h-3.5 w-3.5" />
            <span>
              Gratebridge <span className="font-mono text-[10px] tracking-[0.18em] text-cream/60">LABS</span>
            </span>
          </Link>
          <p className="mt-12 font-mono text-[11px] uppercase tracking-[0.18em] text-cream/50">{offer.kicker}</p>
          <h1 className="mt-3 font-serif text-5xl tracking-[-0.04em]">{offer.title}</h1>
          <p className="mt-8 font-serif text-6xl tracking-[-0.04em]">{formatUsd(offer.priceUsd)}</p>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-cream/50">
            {offer.cadence === "month" ? "Per month · from" : "From"} · negotiable
          </p>
          <p className="mt-3 text-sm text-cream/70">Charged as {formatNgn(usdToNgn(offer.priceUsd, rate))} on Paystack.</p>
          <ul className="mt-10 space-y-3 border-t border-cream/15 pt-6 text-sm text-cream/80">
            {offer.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section className="bg-paper px-7 py-10 md:px-10 md:py-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone">Checkout</p>
          <h2 className="mt-3 font-serif text-4xl tracking-[-0.04em]">Pay or propose.</h2>
          <div className="mt-8">
            <CheckoutForm offer={offer} rate={rate} />
          </div>
          <a href={studio.calendly} target="_blank" rel="noreferrer" className="mt-8 inline-block text-sm text-stone hover:text-ink">
            Book a discovery session →
          </a>
        </section>
      </div>
    </div>
  );
}
