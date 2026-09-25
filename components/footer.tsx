import Link from "next/link";
import { nav, studio } from "@/lib/site";
import { Mark } from "./mark";

export function Footer() {
  return (
    <footer className="bg-night text-cream">
      <div className="mx-auto grid max-w-[1440px] gap-16 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cream/55">
            New business
          </p>
          <a
            href={`mailto:${studio.email}`}
            className="mt-6 block font-serif text-[clamp(2.4rem,6vw,5.4rem)] leading-[0.95] tracking-[-0.03em] transition-colors duration-500 hover:text-signal"
          >
            {studio.email}
          </a>
        </div>
        <div className="grid grid-cols-2 gap-10 lg:col-span-5 lg:justify-items-end">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cream/55">
              Index
            </p>
            <ul className="mt-5 space-y-2">
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
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cream/55">
              Studio
            </p>
            <p className="mt-5 max-w-[16rem] text-sm leading-6 text-cream/75">
              {studio.name} is a product and engineering practice of {studio.parent}.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 border-t border-cream/10 px-6 py-6 md:px-10">
        <Link href="/" className="inline-flex items-center gap-3 text-sm">
          <Mark className="h-3.5 w-3.5" />
          {studio.name}
        </Link>
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-cream/45">
          © {new Date().getFullYear()} {studio.parent}
        </p>
      </div>
    </footer>
  );
}
