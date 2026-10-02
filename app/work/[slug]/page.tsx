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
            {project.year ? `${project.industry} — ${project.year}` : project.industry}
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
          <ul className="space-y-2 text-sm">
            {project.services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
          <ul className="mt-8 space-y-3">
            {[
              project.url
                ? {
                    href: project.url,
                    label: project.url.includes("://app.") ? "App" : "Website",
                    value: project.url.replace(/^https?:\/\//, "").replace(/\/$/, ""),
                  }
                : null,
              project.appStore ? { href: project.appStore, label: "App Store", value: "Download" } : null,
              project.playStore ? { href: project.playStore, label: "Google Play", value: "Download" } : null,
            ]
              .filter((link): link is { href: string; label: string; value: string } => link !== null)
              .map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-baseline gap-3 text-sm text-stone transition-colors duration-300 hover:text-ink"
                  >
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em]">{link.label}</span>
                    {link.value}
                  </a>
                </li>
              ))}
          </ul>
        </aside>
        <div className="space-y-12 lg:col-span-7">
          <Reveal>
            <p className="text-lg leading-8">{project.summary}</p>
          </Reveal>
          <Reveal>
            <h2 className="font-serif text-3xl tracking-[-0.03em]">Situation</h2>
            <p className="mt-4 text-[15px] leading-7 text-stone">{project.challenge}</p>
          </Reveal>
          <Reveal>
            <h2 className="font-serif text-3xl tracking-[-0.03em]">What shipped</h2>
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
      {project.results.length > 0 ? (
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
      ) : null}
      <div className="border-t border-line px-6 py-16 md:px-10">
        <div className="mx-auto max-w-[1440px]">
          <Link href="/contact" className="inline-flex rounded-full bg-ink px-5 py-3 text-sm text-cream">
            Book a call
          </Link>
        </div>
      </div>
      {next ? (
        <Link
          href={`/work/${next.slug}`}
          className="group block border-t border-line px-6 py-16 md:px-10 md:py-24"
        >
          <div className="mx-auto max-w-[1440px]">
            <p className="font-serif text-[clamp(2.4rem,5vw,4.5rem)] leading-none tracking-[-0.04em] transition-colors duration-500 group-hover:text-signal">
              {next.name}
            </p>
          </div>
        </Link>
      ) : null}
    </article>
  );
}
