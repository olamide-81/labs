"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { projects } from "@/lib/projects";
import { ProjectCover } from "./project-cover";

const ease = [0.22, 1, 0.36, 1] as const;

export function WorkIndex() {
  const [active, setActive] = useState(projects[0].slug);
  const reduce = useReducedMotion();
  const current = projects.find((project) => project.slug === active) ?? projects[0];

  return (
    <section id="work" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-stone">
            Selected work
          </p>
          <h2 className="mt-4 max-w-md font-serif text-4xl leading-[1.05] tracking-[-0.03em] md:text-5xl">
            Engagements across the industries we practice in.
          </h2>
          <ul className="mt-12 border-t border-line">
            {projects.map((project, index) => {
              const selected = project.slug === current.slug;
              return (
                <li key={project.slug} className="border-b border-line">
                  <Link
                    href={`/work/${project.slug}`}
                    className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-4 py-5"
                    onMouseEnter={() => setActive(project.slug)}
                    onFocus={() => setActive(project.slug)}
                  >
                    <span className="font-mono text-[11px] text-stone">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span
                        className={`block text-2xl tracking-[-0.03em] transition-colors duration-500 md:text-[1.7rem] ${
                          selected ? "text-ink" : "text-ink/55 group-hover:text-ink"
                        }`}
                      >
                        {project.name}
                      </span>
                      <span className="mt-1 block text-sm text-stone">{project.industry}</span>
                    </span>
                    <span className="font-mono text-[11px] text-stone">{project.year}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="lg:col-span-7">
          <div className="lg:sticky lg:top-28">
            <Link href={`/work/${current.slug}`} className="block">
              <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[5/4]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.slug}
                    className="absolute inset-0"
                    initial={reduce ? false : { opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.55, ease }}
                  >
                    <ProjectCover project={current} className="h-full w-full" />
                  </motion.div>
                </AnimatePresence>
              </div>
              <p className="mt-5 max-w-xl text-[15px] leading-7 text-stone">{current.headline}</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
