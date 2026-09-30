import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "What Gratebridge Labs covers: product, engineering, operations, partnerships, quality assurance, and DevOps.",
};

const steps = [
  {
    index: "01",
    title: "Product Team",
    copy: "Decides what to build, who it is for, and what comes first. The scope is written before the work starts.",
  },
  {
    index: "02",
    title: "Engineering",
    copy: "Builds the product. The app, the site, and the system behind them.",
  },
  {
    index: "03",
    title: "Operations",
    copy: "Runs the product after launch. The day-to-day, the support, and what your team needs to carry it.",
  },
  {
    index: "04",
    title: "Partnerships",
    copy: "Works with the other companies on the product. Banks, platforms, vendors, and your own teams.",
  },
  {
    index: "05",
    title: "Quality Assurance",
    copy: "Checks the product before it ships. The main flows, the edge cases, and what breaks.",
  },
  {
    index: "06",
    title: "DevOps",
    copy: "Puts the product live and keeps releases moving. Hosting, deploys, and the environments around them.",
  },
];

export default function ApproachPage() {
  return (
    <div className="px-6 pt-32 pb-24 md:px-10 md:pt-40">
      <div className="mx-auto max-w-[1440px]">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-stone">Approach</p>
        <h1 className="mt-4 max-w-5xl font-serif text-[clamp(3.2rem,7vw,6.6rem)] leading-[0.92] tracking-[-0.04em]">
          What we cover.
        </h1>
        <p className="mt-8 max-w-xl text-[15px] leading-7 text-stone">
          One team. These are the practices on the work, from the first scope through to the live product.
        </p>
        <ol className="mt-20 border-t border-line">
          {steps.map((step) => (
            <li key={step.index} className="border-b border-line">
              <Reveal>
                <div className="grid gap-6 py-10 md:grid-cols-12 md:py-14">
                  <p className="font-mono text-[11px] text-stone md:col-span-2">{step.index}</p>
                  <h2 className="font-serif text-4xl tracking-[-0.03em] md:col-span-4 md:text-5xl">
                    {step.title}
                  </h2>
                  <p className="max-w-md text-[15px] leading-7 text-stone md:col-span-5 md:col-start-8">
                    {step.copy}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
        <Reveal className="mt-24 flex flex-col items-start justify-between gap-8 border-t border-line pt-16 md:flex-row md:items-end">
          <h2 className="max-w-xl font-serif text-4xl leading-[1.05] tracking-[-0.03em] md:text-5xl">
            If this is the team you need, start a project.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-ink px-5 py-3 text-sm text-cream"
          >
            Start a project <span>→</span>
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
