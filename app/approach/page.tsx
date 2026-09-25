import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Approach",
  description: "How Gratebridge designs and engineers products, from the first question to production.",
};

const steps = [
  {
    index: "01",
    title: "Frame",
    copy: "We start with the operating reality: who depends on the product, what must be true, and what can wait. The frame is a written point of view, not a deck of options.",
  },
  {
    index: "02",
    title: "Shape",
    copy: "Product, design, and engineering shape the first release together. Interfaces, system boundaries, and the sequence of work are decided in the same conversation.",
  },
  {
    index: "03",
    title: "Build",
    copy: "We engineer the product in production conditions. Design stays in the work until the last screen, the last state, and the last empty case.",
  },
  {
    index: "04",
    title: "Settle",
    copy: "A release is not the end. We stay through adoption, measure what the product actually does, and leave a system the team can carry.",
  },
];

export default function ApproachPage() {
  return (
    <div className="px-6 pt-32 pb-24 md:px-10 md:pt-40">
      <div className="mx-auto max-w-[1440px]">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-stone">Approach</p>
        <h1 className="mt-4 max-w-5xl font-serif text-[clamp(3.2rem,7vw,6.6rem)] leading-[0.92] tracking-[-0.04em]">
          One team from the question
          <span className="italic"> to the system.</span>
        </h1>
        <p className="mt-8 max-w-xl text-[15px] leading-7 text-stone">
          Gratebridge is hired when a company needs the product and the engineering held to the
          same standard. We do not hand a design across a wall and hope it survives.
        </p>
        <ol className="mt-20 border-t border-line">
          {steps.map((step) => (
            <li key={step.index} className="border-b border-line">
              <Reveal>
                <div className="grid gap-6 py-10 md:grid-cols-12 md:py-14">
                  <p className="font-mono text-[11px] text-stone md:col-span-2">{step.index}</p>
                  <h2 className="font-serif text-4xl tracking-[-0.03em] md:col-span-3 md:text-5xl">
                    {step.title}
                  </h2>
                  <p className="max-w-md text-[15px] leading-7 text-stone md:col-span-6 md:col-start-7">
                    {step.copy}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
        <Reveal className="mt-24 flex flex-col items-start justify-between gap-8 border-t border-line pt-16 md:flex-row md:items-end">
          <h2 className="max-w-xl font-serif text-4xl leading-[1.05] tracking-[-0.03em] md:text-5xl">
            If the work needs both a point of view and a build, we should talk.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-ink px-5 py-3 text-sm text-cream"
          >
            Contact the studio <span>→</span>
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
