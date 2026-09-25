"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { projects, type Project } from "@/lib/projects";
import { ProjectCover } from "./project-cover";

const filters = ["All", ...Array.from(new Set(projects.map((project) => project.industry)))];

export function WorkGrid() {
  const [filter, setFilter] = useState("All");
  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((project) => project.industry === filter)),
    [filter],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by industry">
        {filters.map((item) => {
          const selected = item === filter;
          return (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setFilter(item)}
              className={`rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                selected ? "bg-ink text-cream" : "text-stone hover:text-ink"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>
      <ul className="mt-12 grid gap-x-8 gap-y-16 md:grid-cols-2">
        {visible.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
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
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <div>
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
