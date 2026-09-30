import Link from "next/link";
import { projects, type Project } from "@/lib/projects";
import { ProjectCover } from "./project-cover";

export function WorkGrid() {
  return (
    <ul className="grid gap-x-8 gap-y-16 md:grid-cols-2">
      {projects.map((project) => (
        <li key={project.slug}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <div className="aspect-[4/5] overflow-hidden sm:aspect-[5/4]">
        <ProjectCover
          project={project}
          className="h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h2 className="text-2xl tracking-[-0.03em]">{project.name}</h2>
          <p className="mt-1 text-sm text-stone">{project.headline}</p>
        </div>
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-stone">
          {project.industry}
        </p>
      </div>
    </Link>
  );
}
