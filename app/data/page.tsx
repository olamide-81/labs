import type { Metadata } from "next";
import { SectorFigure } from "@/components/sector-figure";
import { inquiries } from "@/lib/inquiries";

export const metadata: Metadata = {
  title: "Data",
  description: "Labs studies consequential problems in different sectors.",
};

export default function DataPage() {
  return (
    <div className="px-6 pt-32 pb-24 md:px-10 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-[1440px]">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-stone">Data</p>
        <h1 className="mt-4 max-w-4xl font-serif text-[clamp(3.2rem,7vw,6.4rem)] leading-[0.92] tracking-[-0.04em]">
          Consequential problems
          <span className="italic"> in different sectors.</span>
        </h1>
        <p className="mt-6 max-w-xl text-[15px] leading-7 text-stone">
          Labs studies them across these sectors.
        </p>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {inquiries.map((item) => (
            <article
              key={item.sector}
              className="flex min-h-[22rem] flex-col overflow-hidden rounded-[1.4rem] border border-line"
              style={{ background: item.bg, color: item.fg }}
            >
              <div className="h-44 px-6 pt-6">
                <SectorFigure sector={item.sector} />
              </div>
              <div className="mt-auto p-6 md:p-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] opacity-60">{item.index}</p>
                <h2 className="mt-2 font-serif text-4xl tracking-[-0.04em]">{item.sector}</h2>
                <p className="mt-3 text-sm leading-6 opacity-80">{item.about}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
