import type { Metadata } from "next";
import Link from "next/link";
import { WorkGrid } from "@/components/work-grid";

export const metadata: Metadata = {
  title: "Work",
  description: "Products designed and engineered by Gratebridge Labs.",
};

export default function WorkPage() {
  return (
    <div className="px-6 pt-32 pb-24 md:px-10 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-[1440px]">
        <h1 className="max-w-4xl font-serif text-[clamp(3.2rem,7vw,6.5rem)] leading-[0.92] tracking-[-0.04em]">
          Work
        </h1>
        <div className="mt-16">
          <WorkGrid />
        </div>
        <div className="mt-24 border-t border-line pt-12">
          <Link href="/contact" className="inline-flex rounded-full bg-ink px-5 py-3 text-sm text-cream">
            Book a call
          </Link>
        </div>
      </div>
    </div>
  );
}
