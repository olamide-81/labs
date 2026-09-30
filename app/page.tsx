import Link from "next/link";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";
import { offers } from "@/lib/offers";
import { industries, studio } from "@/lib/site";

const lines = [
  { title: "Product Team", line: "Scope, priority, and the release." },
  { title: "Engineering", line: "The system, built to run." },
  { title: "Operations", line: "How it is run after launch." },
  { title: "Partnerships", line: "The teams beside the build." },
  { title: "Quality Assurance", line: "What is checked before it ships." },
  { title: "DevOps", line: "Release, hosting, and the live system." },
] as const;

const practice = [
  { id: "software" as const, line: "A product, designed and engineered as one system." },
  { id: "website" as const, line: "A site that says what the company does." },
  { id: "retainer" as const, line: "A named team on the live product." },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-stone">Engage</p>
            <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <h2 className="max-w-xl font-serif text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.95] tracking-[-0.04em]">
                Ways to work with the Labs.
              </h2>
              <p className="max-w-xs text-sm leading-6 text-stone">
                Software, a website, or a team that stays. The fee is scoped in writing.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid items-stretch gap-4 lg:grid-cols-3">
            {practice.map((item, index) => {
              const offer = offers.find((entry) => entry.id === item.id)!;
              return (
                <Reveal key={offer.id} delay={index * 0.06} className="h-full">
                  <Link
                    href={`/pricing#${offer.id}`}
                    className="group flex h-full min-h-72 flex-col rounded-[1.4rem] p-7 md:min-h-80 md:p-8"
                    style={{ background: offer.tone.bg, color: offer.tone.fg }}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <p
                        className="font-mono text-[11px] uppercase tracking-[0.18em]"
                        style={{ color: offer.tone.muted }}
                      >
                        {offer.kicker}
                      </p>
                      <p className="font-serif text-3xl italic leading-none" style={{ color: offer.tone.mark }}>
                        {offer.index}
                      </p>
                    </div>
                    <h3 className="pt-16 font-serif text-4xl leading-none tracking-[-0.04em]">{offer.title}</h3>
                    <p className="mt-4 max-w-[16rem] text-sm leading-6" style={{ color: offer.tone.muted }}>
                      {item.line}
                    </p>
                    <p className="mt-auto pt-8 text-sm">
                      Scope and fee
                      <span className="ml-2 inline-block transition-transform duration-500 group-hover:translate-x-1">
                        →
                      </span>
                    </p>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 md:pb-24">
        <Link
          href="/work"
          className="group relative mx-auto flex min-h-64 max-w-[1440px] flex-col justify-end overflow-hidden rounded-[1.6rem] px-7 py-10 md:min-h-80 md:px-14 md:py-14"
          style={{
            background:
              "radial-gradient(ellipse 80% 140% at 92% 8%, rgb(226 74 18 / 0.34), transparent 52%), linear-gradient(128deg, #f6f1e6 0%, #f3e0cc 42%, #e8c4a4 100%)",
          }}
        >
          <svg
            viewBox="0 0 480 520"
            className="pointer-events-none absolute top-1/2 right-10 hidden h-[78%] w-auto -translate-y-1/2 text-ink/75 lg:right-16 md:block"
            fill="none"
            aria-hidden
          >
            <rect x="64" y="72" width="250" height="320" rx="32" stroke="currentColor" strokeWidth="1.25" />
            <rect x="156" y="140" width="250" height="320" rx="32" stroke="currentColor" strokeWidth="1.25" />
            <path d="M104 168h130M104 204h88M104 240h110" stroke="currentColor" strokeWidth="1.25" />
            <circle cx="300" cy="292" r="7" fill="currentColor" />
            <path d="M307 292h78" stroke="#e24a12" strokeWidth="1.5" />
            <circle cx="392" cy="292" r="7" fill="#e24a12" />
          </svg>
          <p className="relative font-mono text-[11px] uppercase tracking-[0.22em] text-stone">Work</p>
          <h2 className="relative mt-4 max-w-xl font-serif text-[clamp(2.8rem,6vw,5.2rem)] leading-[0.92] tracking-[-0.04em]">
            Products in market.
          </h2>
          <p className="relative mt-8 text-sm">
            See the work
            <span className="ml-2 inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
          </p>
        </Link>
      </section>

      <section className="px-6 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto max-w-[1440px] border-t border-line pt-12 md:pt-16">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-stone">Approach</p>
              <h2 className="mt-4 max-w-xl font-serif text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.95] tracking-[-0.04em]">
                The practices on the work.
              </h2>
            </div>
            <Link href="/approach" className="text-sm transition-colors duration-300 hover:text-signal">
              How we work →
            </Link>
          </Reveal>
          <ol className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {lines.map((step, index) => (
              <li key={step.title} className="bg-paper p-6 md:p-8">
                <p className="font-mono text-[11px] text-stone">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-8 font-serif text-3xl tracking-[-0.03em]">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-stone">{step.line}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 border-t border-line pt-12 md:pt-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-stone">Data</p>
            <h2 className="mt-4 font-serif text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.95] tracking-[-0.04em]">
              Consequential problems in different sectors.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-6 text-stone">
              Labs studies them. That is the data practice.
            </p>
            <Link href="/data" className="mt-8 inline-block text-sm transition-colors duration-300 hover:text-signal">
              See the sectors →
            </Link>
          </Reveal>
          <ul className="grid grid-cols-2 gap-px bg-line sm:grid-cols-4 lg:col-span-7">
            {industries.map((industry, index) => (
              <li key={industry} className="bg-paper px-4 py-6">
                <p className="font-mono text-[11px] text-stone">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-4 font-serif text-2xl tracking-[-0.03em]">{industry}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-10 md:pb-28">
        <div className="mx-auto max-w-[1440px] rounded-[1.6rem] bg-night px-7 py-14 text-cream md:px-14 md:py-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cream/55">Discovery</p>
          <h2 className="mt-4 max-w-3xl font-serif text-[clamp(2.8rem,5.5vw,5rem)] leading-[0.95] tracking-[-0.04em]">
            A working session, not a pitch.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-6 text-cream/65">
            Thirty minutes. The product, the constraint, and whether we should write a scope.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={studio.calendly}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-cream px-5 py-3 text-sm text-ink"
            >
              Book a session <span aria-hidden>→</span>
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-3 rounded-full border border-cream/20 px-5 py-3 text-sm"
            >
              Start a project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
