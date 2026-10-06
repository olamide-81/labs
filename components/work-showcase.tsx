import Link from "next/link";
import { projects } from "@/lib/projects";
import { ProjectCover } from "@/components/project-cover";

export function WorkShowcase() {
  return <section id="selected-work" className="px-6 py-20 md:px-10 md:py-28">
    <div className="mx-auto max-w-[1440px]">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div><p className="font-mono text-[11px] uppercase tracking-[0.2em] text-stone">Selected work / 01—02</p>
          <h2 className="mt-4 font-serif text-[clamp(3rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.04em]">From an idea.<br /><span className="italic text-stone">Into people’s hands.</span></h2></div>
        <p className="max-w-sm text-sm leading-7 text-stone">A few products we designed and engineered, and what each puts in people’s hands.</p>
      </div>
      <div className="space-y-8">
        {projects.map((project, index) => <article key={project.slug} className="work-feature overflow-hidden rounded-[1.5rem]" style={{ background: project.palette.bg, color: project.palette.fg }}>
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="flex flex-col p-7 md:p-10 lg:p-12">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] opacity-70"><span>0{index + 1} / {project.industry}</span><span>Product in market</span></div>
              <p className="mt-12 font-mono text-xs uppercase tracking-[0.18em]" style={{ color: project.palette.accent }}>{project.name}</p>
              <h3 className="mt-4 max-w-md font-serif text-[clamp(2.6rem,4vw,4rem)] leading-[0.97] tracking-[-0.035em]">{project.headline}</h3>
              <p className="mt-6 max-w-sm text-sm leading-7 opacity-75">{project.summary}</p>
              <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.14em] opacity-60">Our role / {project.services.join(" + ")}</p>
              <div className="mt-8 flex flex-wrap gap-5 text-sm">
                {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer" className="border-b border-current pb-1">Visit the product ↗<span className="sr-only"> — {project.name} (new tab)</span></a>}
                <Link href={`/contact?want=software&project=${project.slug}`} className="border-b border-current pb-1">Build something like this →</Link>
              </div>
            </div>
            <ProjectCover project={project} className="min-h-[330px] sm:min-h-[440px] lg:min-h-[530px]" />
          </div>
          <div className="grid gap-px border-t border-white/15 sm:grid-cols-3">
            {project.results.map(result => <div key={result.label} className="px-7 py-7 md:px-10"><p className="font-serif text-4xl tracking-[-0.04em]" style={{ color: project.palette.accent }}>{result.value}</p><p className="mt-2 text-xs leading-5 opacity-70">{result.label}</p></div>)}
          </div>
          <p className="px-7 pb-5 font-mono text-[9px] uppercase tracking-[0.12em] opacity-50 md:px-10">Product capabilities · based on the shipped scope</p>
        </article>)}
      </div>
    </div>
  </section>;
}
