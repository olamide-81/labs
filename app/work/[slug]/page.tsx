import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectCover } from "@/components/project-cover";
import { Reveal } from "@/components/reveal";
import { getAdjacent, getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Work" };
  return {
    title: project.name,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const { next } = getAdjacent(slug);

  return (
    <article>
      <header className="px-6 pt-32 md:px-10 md:pt-40">
        <div className="mx-auto max-w-[1440px]">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-stone">
            {project.industry} — {project.year}
          </p>
          <h1 className="mt-5 max-w-5xl font-serif text-[clamp(3.2rem,7.4vw,7rem)] leading-[0.92] tracking-[-0.04em]">
            {project.name}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-stone">{project.headline}</p>
        </div>
      </header>
      <div className="mt-12 px-6 md:px-10">
        <div className="mx-auto aspect-[16/9] max-w-[1440px] overflow-hidden md:aspect-[16/8]">
          <ProjectCover project={project} className="h-full w-full" />
        </div>
      </div>
      <div className="mx-auto grid max-w-[1440px] gap-16 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-12">
        <aside className="lg:col-span-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-stone">Services</p>
          <ul className="mt-4 space-y-2 text-sm">
            {project.services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </aside>
        <div className="space-y-12 lg:col-span-7">
          <Reveal>
            <p className="text-lg leading-8">{project.summary}</p>
          </Reveal>
          <Reveal>
            <h2 className="font-serif text-3xl tracking-[-0.03em]">The situation</h2>
            <p className="mt-4 text-[15px] leading-7 text-stone">{project.challenge}</p>
          </Reveal>
          <Reveal>
            <h2 className="font-serif text-3xl tracking-[-0.03em]">What we did</h2>
            <p className="mt-4 text-[15px] leading-7 text-stone">{project.response}</p>
            <ul className="mt-8 space-y-4 border-t border-line">
              {project.made.map((item) => (
                <li key={item} className="border-b border-line py-4 text-sm leading-6">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
      <section className="border-t border-line px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-3">
          {project.results.map((result) => (
            <div key={result.label}>
              <p className="font-serif text-5xl tracking-[-0.04em] md:text-6xl">{result.value}</p>
              <p className="mt-3 max-w-[16rem] text-sm leading-6 text-stone">{result.label}</p>
            </div>
          ))}
        </div>
      </section>
      {next ? (
        <Link
          href={`/work/${next.slug}`}
          className="group block border-t border-line px-6 py-16 md:px-10 md:py-24"
        >
          <div className="mx-auto flex max-w-[1440px] items-end justify-between gap-8">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-stone">Next</p>
              <p className="mt-3 font-serif text-[clamp(2.4rem,5vw,4.5rem)] leading-none tracking-[-0.04em] transition-colors duration-500 group-hover:text-signal">
                {next.name}
              </p>
            </div>
            <span className="pb-2 text-sm text-stone transition-transform duration-500 group-hover:translate-x-1">
              {next.industry} →
            </span>
          </div>
        </Link>
      ) : null}
    </article>
  );
}
