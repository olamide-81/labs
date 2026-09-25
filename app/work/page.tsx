import type { Metadata } from "next";
import { WorkGrid } from "@/components/work-grid";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected product and engineering work by Gratebridge across industries.",
};

export default function WorkPage() {
  return (
    <div className="px-6 pt-32 pb-24 md:px-10 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-[1440px]">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-stone">Index</p>
        <h1 className="mt-4 max-w-4xl font-serif text-[clamp(3.2rem,7vw,6.5rem)] leading-[0.92] tracking-[-0.04em]">
          Work that spans
          <span className="italic"> the industry it serves.</span>
        </h1>
        <p className="mt-8 max-w-xl text-[15px] leading-7 text-stone">
          A selection of products we have designed and engineered with operators in finance,
          health, energy, commerce, mobility, and media.
        </p>
        <div className="mt-16">
          <WorkGrid />
        </div>
      </div>
    </div>
  );
}
