import Link from "next/link";
import { engagementHref, offers } from "@/lib/offers";
import { studio } from "@/lib/site";

export function PricingBoard() {
  return (
    <div className="px-6 pt-32 pb-24 md:px-10 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-[1440px]">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-stone">Pricing</p>
        <div className="mt-4 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <h1 className="max-w-xl font-serif text-[clamp(3rem,6vw,5.4rem)] leading-[0.92] tracking-[-0.04em]">
            Three ways in.
          </h1>
          <p className="max-w-xs text-sm leading-6 text-stone">
            Starting fees. Negotiable before you pay. You own the work.
          </p>
        </div>
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {offers.map((offer) => (
            <article
              key={offer.id}
              id={offer.id}
              className="flex scroll-mt-28 flex-col rounded-[1.4rem] p-7 md:p-8"
              style={{ background: offer.tone.bg, color: offer.tone.fg }}
            >
              <div className="flex items-center justify-between gap-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em]" style={{ color: offer.tone.muted }}>
                  {offer.kicker}
                </p>
                <p className="font-serif text-3xl italic leading-none" style={{ color: offer.tone.mark }}>
                  {offer.index}
                </p>
              </div>
              <h2 className="mt-10 font-serif text-4xl leading-none tracking-[-0.04em]">{offer.title}</h2>
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
              <Link
                href={engagementHref(offer.id)}
                className="mt-8 inline-flex w-fit items-center gap-3 rounded-full px-5 py-3 text-sm"
                style={{ background: offer.tone.fg, color: offer.tone.bg }}
              >
                Checkout <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
          <p className="text-sm text-stone">Discovery sessions are on the calendar.</p>
          <a
            href={studio.calendly}
            target="_blank"
            rel="noreferrer"
            className="text-sm transition-colors duration-300 hover:text-signal"
          >
            Book a session →
          </a>
        </div>
      </div>
    </div>
  );
}
