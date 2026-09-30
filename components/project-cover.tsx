import Image from "next/image";
import type { Project } from "@/lib/projects";

export function ProjectCover({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  const { bg, fg, accent } = project.palette;

  if (project.image) {
    return (
      <div
        className={`relative overflow-hidden ${className}`}
        style={{ background: project.imageBg ?? bg }}
      >
        <Image
          src={project.image}
          alt=""
          fill
          className={
            project.imageFit === "contain"
              ? "object-contain object-center p-8 md:p-12"
              : "object-cover object-center"
          }
          sizes="(min-width: 1024px) 60vw, 100vw"
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className={`relative overflow-hidden ${className}`}
      style={{ background: bg, color: fg }}
    >
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `linear-gradient(${fg} 1px, transparent 1px), linear-gradient(90deg, ${fg} 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(180deg, black, transparent 88%)",
        }}
      />
      <Motif motif={project.motif} accent={accent} fg={fg} />
      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] opacity-80">
          {project.industry}
        </p>
        <p className="font-serif text-3xl italic leading-none sm:text-4xl">{project.name}</p>
      </div>
    </div>
  );
}

function Motif({
  motif,
  accent,
  fg,
}: {
  motif: Project["motif"];
  accent: string;
  fg: string;
}) {
  if (motif === "arc") {
    return (
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 900" fill="none">
        <circle cx="560" cy="380" r="220" stroke={accent} strokeWidth="1.5" />
        <circle cx="560" cy="380" r="150" stroke={fg} strokeOpacity="0.35" strokeWidth="1" />
        <path d="M80 640H720" stroke={fg} strokeOpacity="0.4" />
        <path d="M180 700H620" stroke={accent} strokeWidth="3" />
      </svg>
    );
  }

  if (motif === "plus") {
    return (
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 900" fill="none">
        <circle cx="400" cy="390" r="168" stroke={fg} strokeOpacity="0.35" />
        <path d="M400 250V530M260 390H540" stroke={accent} strokeWidth="8" />
        <rect x="120" y="680" width="180" height="2" fill={fg} opacity="0.45" />
        <rect x="120" y="704" width="120" height="2" fill={fg} opacity="0.3" />
      </svg>
    );
  }

  if (motif === "bars") {
    return (
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 900" fill="none">
        {[0, 1, 2, 3, 4].map((index) => (
          <rect
            key={index}
            x={140 + index * 28}
            y={240 + (4 - index) * 36}
            width="18"
            height={220 + index * 48}
            fill={index === 3 ? accent : fg}
            opacity={index === 3 ? 1 : 0.22}
          />
        ))}
        <circle cx="620" cy="300" r="70" fill={accent} />
      </svg>
    );
  }

  if (motif === "frame") {
    return (
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 900" fill="none">
        <rect x="170" y="150" width="460" height="560" stroke={fg} strokeOpacity="0.35" />
        <rect x="230" y="230" width="280" height="360" fill={accent} />
        <path d="M230 650H510" stroke={fg} strokeOpacity="0.5" />
      </svg>
    );
  }

  if (motif === "route") {
    return (
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 900" fill="none">
        <path
          d="M90 680C220 680 220 240 400 240C580 240 580 520 710 520"
          stroke={accent}
          strokeWidth="4"
        />
        {[
          [90, 680],
          [400, 240],
          [710, 520],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="8" fill={fg} />
        ))}
        <path d="M120 760H420" stroke={fg} strokeOpacity="0.25" />
        <path d="M120 788H300" stroke={fg} strokeOpacity="0.25" />
      </svg>
    );
  }

  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 900" fill="none">
      <rect x="150" y="160" width="6" height="520" fill={accent} />
      {[0, 1, 2, 3, 4, 5, 6].map((index) => (
        <rect
          key={index}
          x="210"
          y={200 + index * 64}
          width={index % 3 === 0 ? 360 : 260}
          height="8"
          fill={fg}
          opacity={index % 2 === 0 ? 0.85 : 0.28}
        />
      ))}
    </svg>
  );
}
