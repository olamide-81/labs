import type { Metadata } from "next";
import Link from "next/link";
import { WorkGrid } from "@/components/work-grid";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected products designed and engineered by Gratebridge Labs, including Paxalpay and RAF, a savings and investment product.",
};

export default function WorkPage() {
  return (
    <div className="px-6 pt-32 pb-24 md:px-10 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-[1440px]">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-stone">Index</p>
        <h1 className="mt-4 max-w-4xl font-serif text-[clamp(3.2rem,7vw,6.5rem)] leading-[0.92] tracking-[-0.04em]">
          Paxalpay
          <span className="italic"> and RAF.</span>
        </h1>
        <p className="mt-8 max-w-sm text-[15px] leading-7 text-stone">
          Two products in market. More when they are ready to show.
        </p>
        <div className="mt-16">
          <WorkGrid />
        </div>
        <div className="mt-24 flex flex-col items-start justify-between gap-8 border-t border-line pt-12 md:flex-row md:items-end">
          <h2 className="max-w-xl font-serif text-4xl leading-[1.05] tracking-[-0.03em]">
            A product, a site, or a team.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-ink px-5 py-3 text-sm text-cream"
          >
            Start a project <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
