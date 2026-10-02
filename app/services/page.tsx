import type { Metadata } from "next";
import Link from "next/link";
import { engagementHref, offers, pricingNote } from "@/lib/offers";

export const metadata: Metadata = {
  title: "Services",
  description: "Full software, websites, and a management retainer from Gratebridge Labs.",
};

const practices = [
  { title: "Product Team", copy: "Decides what to build, who it is for, and what comes first. The scope is written before the work starts." },
  { title: "Engineering", copy: "Builds the product. The app, the site, and the system behind them." },
  { title: "Operations", copy: "Runs the product after launch. The day-to-day, the support, and what your team needs to carry it." },
  { title: "Partnerships", copy: "Works with the other companies on the product. Banks, platforms, vendors, and your own teams." },
  { title: "Quality Assurance", copy: "Checks the product before it ships. The main flows, the edge cases, and what breaks." },
  { title: "DevOps", copy: "Puts the product live and keeps releases moving. Hosting, deploys, and the environments around them." },
];

export default function ServicesPage() {
  return (
    <div className="px-6 pt-32 pb-24 md:px-10 md:pt-40">
      <div className="mx-auto max-w-[1440px]">
        <h1 className="max-w-5xl font-serif text-[clamp(3.2rem,7vw,6.6rem)] leading-[0.92] tracking-[-0.04em]">
          Services
        </h1>
        <div className="mt-20 border-t border-line">
          {offers.map((offer) => (
            <article key={offer.id} className="grid gap-8 border-b border-line py-14 md:grid-cols-12 md:py-20">
              <div className="md:col-span-5">
                <h2 className="font-serif text-5xl tracking-[-0.04em]">{offer.title}</h2>
                <p className="mt-6 font-serif text-4xl tracking-[-0.04em]">{offer.figure}</p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-stone">{offer.unit}</p>
              </div>
              <div className="md:col-span-6 md:col-start-7">
                <p className="text-[15px] leading-7">{offer.means}</p>
                <p className="mt-4 text-[15px] leading-7 text-stone">{offer.fit}</p>
                <ul className="mt-8 space-y-3">
                  {offer.includes.map((item) => (
                    <li key={item} className="border-t border-line py-3 text-sm leading-6">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm leading-6 text-stone">{pricingNote}</p>
                <Link
                  href={engagementHref(offer.id)}
                  className="mt-8 inline-flex rounded-full bg-ink px-5 py-3 text-sm text-cream"
                >
                  Book a call
                </Link>
              </div>
            </article>
          ))}
        </div>
        <h2 className="mt-24 font-serif text-4xl tracking-[-0.04em]">The team on the work</h2>
        <ol className="mt-10 border-t border-line">
          {practices.map((item) => (
            <li key={item.title} className="grid gap-4 border-b border-line py-8 md:grid-cols-12">
              <h3 className="font-serif text-3xl tracking-[-0.03em] md:col-span-4">{item.title}</h3>
              <p className="text-[15px] leading-7 text-stone md:col-span-6 md:col-start-7">{item.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
