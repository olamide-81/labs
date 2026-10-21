import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NigeriaHealthcare } from "@/components/research/nigeria-healthcare";
import { research } from "@/lib/research";
export const dynamicParams = false;
export function generateStaticParams() { return research.map(({slug}) => ({slug})); }
export async function generateMetadata({params}: {params: Promise<{slug:string}>}): Promise<Metadata> {
 const {slug} = await params; const item = research.find(r => r.slug === slug);
 if (slug === "healthcare") return {title:"Healthcare in Nigeria — access, workforce and hospital economics", description:"A sourced research dossier on Nigeria’s healthcare: facilities, workers, affordability, hospital costs, long-term operations and possible solutions."};
 return {title: item ? `${item.sector} research — ${item.title}` : "Research", description: item?.context};
}
export default async function ResearchPage({params}: {params: Promise<{slug:string}>}) {
 const {slug} = await params; const item = research.find(r => r.slug === slug); if (!item) notFound();
 if (slug === "healthcare") return <NigeriaHealthcare />;
 return <article className="px-6 pb-24 pt-32 md:px-10 md:pt-40"><div className="mx-auto max-w-5xl">
 <Link href="/data" className="text-sm underline underline-offset-4">← All eight sectors</Link>
 <p className="mt-12 font-mono text-xs uppercase tracking-widest text-stone">{item.sector} / Research brief / Global scope</p>
 <h1 className="mt-5 max-w-4xl font-serif text-[clamp(3rem,6vw,5.5rem)] leading-[0.98] tracking-[-0.04em]">{item.title}</h1>
 <div className="mt-12 rounded-3xl bg-night p-8 text-cream md:p-12"><p className="font-serif text-7xl md:text-8xl">{item.value}</p><p className="mt-4 text-xl">{item.label}</p><p className="mt-4 text-sm text-cream/70">{item.period} · Global estimate</p><a href={item.url} className="mt-6 inline-block text-sm underline underline-offset-4">Source: {item.publisher} ↗</a></div>
 <div className="mt-14 grid gap-12 md:grid-cols-[2fr_1fr]"><div className="space-y-10"><section><h2 className="font-serif text-3xl">The challenge</h2><p className="mt-4 text-lg leading-8 text-stone">{item.context}</p></section><section><h2 className="font-serif text-3xl">What the number does—and does not—say</h2><p className="mt-4 leading-8 text-stone">{item.limits}</p></section><section><h2 className="font-serif text-3xl">A question worth investigating</h2><p className="mt-4 text-lg leading-8">{item.question}</p><p className="mt-4 text-sm leading-7 text-stone">Labs research direction: start with a defined population and location, review the source methodology, and validate assumptions with people working in the sector. This question is our interpretation; the statistic alone does not establish causes or prove a particular solution.</p></section></div>
 <aside className="border-t border-line pt-6"><h2 className="font-serif text-2xl">Read further</h2><a href={item.url} className="mt-5 block text-sm leading-7 underline underline-offset-4">{item.publisher} ↗</a><p className="mt-6 text-sm leading-7 text-stone">Follow the original publication for definitions, methods and available datasets. This brief is a secondary synthesis, not original field research.</p><p className="mt-6 font-mono text-xs leading-6 text-stone">Source checked<br/>12 October 2026</p></aside></div>
 <nav aria-label="Other research sectors" className="mt-16 flex flex-wrap gap-4 border-t border-line pt-8">{research.filter(r => r.slug !== slug).map(r => <Link className="rounded-full border border-line px-4 py-2 text-sm" href={`/data/${r.slug}`} key={r.slug}>{r.sector} →</Link>)}</nav>
 </div></article>;
}
