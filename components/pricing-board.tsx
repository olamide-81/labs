import Link from "next/link";
import { engagementHref, offers, pricingNote } from "@/lib/offers";

export function PricingCards() {
  return (
    <div>
      <div className="grid gap-4 lg:grid-cols-3">
        {offers.map((offer) => (
          <article
            key={offer.id}
            id={offer.id}
            className="flex scroll-mt-28 flex-col rounded-[1.4rem] p-7 md:p-8"
            style={{ background: offer.tone.bg, color: offer.tone.fg }}
          >
            <h2 className="font-serif text-4xl leading-none tracking-[-0.04em]">{offer.title}</h2>
            <p className="mt-5 text-sm leading-6" style={{ color: offer.tone.muted }}>
              {offer.means}
            </p>
            <p className="mt-8 font-serif text-6xl leading-none tracking-[-0.05em]">{offer.figure}</p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em]" style={{ color: offer.tone.muted }}>
              {offer.unit}
            </p>
            <ul className="mt-8 space-y-3 border-t pt-6" style={{ borderColor: offer.tone.line }}>
              {offer.includes.map((item) => (
                <li key={item} className="text-sm leading-6">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-6" style={{ color: offer.tone.muted }}>
              {pricingNote}
            </p>
            <Link
              href={`/checkout?offer=${offer.id}`}
              className="mt-8 inline-flex w-fit rounded-full px-5 py-3 text-sm"
              style={{ background: offer.tone.fg, color: offer.tone.bg }}
            >
              Start with {offer.title.toLowerCase()} →
            </Link>
            <Link href={engagementHref(offer.id)} className="mt-4 text-sm underline underline-offset-4">Discuss the scope first</Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export function PricingBoard() {
  return (
    <div className="px-6 pt-32 pb-24 md:px-10 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-[1440px]">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-stone">A clear place to start</p>
        <h1 className="mt-4 max-w-3xl font-serif text-[clamp(3rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.04em]">Good work.<br /><span className="italic text-stone">A clear agreement.</span></h1>
        <p className="mb-12 mt-6 max-w-xl text-base leading-7 text-stone">Choose the engagement that fits. Review the starting fee, send a proposal, or talk through the scope before committing.</p>
        <PricingCards />
      </div>
    </div>
  );
}
