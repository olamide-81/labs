import Link from "next/link";
import { engagementHref, offers } from "@/lib/offers";
import { nav, studio } from "@/lib/site";
import { Mark } from "./mark";

export function Footer() {
  return (
    <footer className="bg-night text-cream">
      <div className="mx-auto grid max-w-[1440px] gap-16 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <a
            href={`mailto:${studio.email}`}
            className="block max-w-full font-serif text-[clamp(1.7rem,7vw,4.4rem)] leading-[0.95] tracking-[-0.03em] break-words transition-colors duration-500 hover:text-signal"
          >
            {studio.email}
          </a>
        </div>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-6">
          <ul className="space-y-2">
            {offers.map((offer) => (
              <li key={offer.id}>
                <Link
                  href={engagementHref(offer.id)}
                  className="text-sm text-cream/85 transition-colors duration-300 hover:text-cream"
                >
                  {offer.title}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-cream/85 transition-colors duration-300 hover:text-cream"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="space-y-2">
            <li>
              <Link href="/contact" className="text-sm text-cream/85 transition-colors duration-300 hover:text-cream">
                Book a call
              </Link>
            </li>
            <li>
              <Link href="/billing" className="text-sm text-cream/85 transition-colors duration-300 hover:text-cream">
                Invoices
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 border-t border-cream/10 px-6 py-6 md:px-10">
        <Link href="/" className="inline-flex items-center gap-3 text-sm">
          <Mark className="h-3.5 w-3.5" />
          {studio.name}
        </Link>
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-cream/45">
          © {new Date().getFullYear()} {studio.name}
        </p>
      </div>
    </footer>
  );
}
