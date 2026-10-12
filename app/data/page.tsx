import type { Metadata } from "next";
import { ResearchGrid } from "@/components/research-grid";
export const metadata: Metadata = { title: "Data — consequential problems", description: "Eight sectors. Sourced evidence, research questions and reading on consequential problems in finance, healthcare, energy and beyond." };
export default function DataPage() {
 return <div className="px-6 pt-32 pb-24 md:px-10 md:pt-40"><div className="mx-auto max-w-[1440px]">
 <p className="mb-6 font-mono text-xs uppercase tracking-widest text-stone">The data practice / Eight sectors</p>
 <h1 className="max-w-4xl font-serif text-[clamp(3.2rem,7vw,6.4rem)] leading-[0.92] tracking-[-0.04em]">Consequential problems<span className="italic"> in different sectors.</span></h1>
 <p className="mt-8 max-w-2xl text-lg leading-8 text-stone">A place to read the evidence, understand its limits and ask better questions. Explore eight sectors through published data and our research agenda.</p>
 <ResearchGrid />
 <section className="mt-16 max-w-3xl border-t border-line pt-8"><h2 className="font-serif text-3xl">How to read this library</h2><p className="mt-4 leading-7 text-stone">These are introductory research briefs based on external publications, not original Gratebridge surveys. Each figure includes its reporting period, source and limitations. Figures refer to different years and populations; they are not a ranking of sectors. Historical baselines are labeled and are not presented as live estimates.</p><p className="mt-4 text-sm text-stone">Sources checked 12 October 2026. Our questions are editorial research directions, not findings established by the cited data.</p></section>
 </div></div>;
}
