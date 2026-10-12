import Link from "next/link";
import { inquiries } from "@/lib/inquiries";
import { research } from "@/lib/research";
import { SectorFigure } from "@/components/sector-figure";

export function ResearchGrid() {
  return <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{research.map((item, i) => {
    const visual = inquiries[i];
    return <Link key={item.slug} href={`/data/${item.slug}`} className="group flex flex-col overflow-hidden rounded-[1.4rem] border border-line transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4" style={{background: visual.bg, color: visual.fg}}>
      <div className="h-36 px-6 pt-6"><SectorFigure sector={visual.sector} /></div>
      <div className="flex flex-1 flex-col p-6"><p className="font-mono text-[11px] uppercase tracking-widest opacity-60">{visual.index} / Research brief</p><h3 className="mt-2 font-serif text-4xl">{item.sector}</h3><p className="mt-6 font-serif text-4xl">{item.value}</p><p className="mt-2 text-sm leading-6">{item.label}</p><p className="mt-3 text-xs opacity-70">{item.period}</p><p className="mt-6 text-sm underline underline-offset-4">Read the evidence →</p></div>
    </Link>;
  })}</div>;
}
