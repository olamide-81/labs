export function SectorFigure({ sector }: { sector: string }) {
  const common = {
    viewBox: "0 0 320 200",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    className: "h-full w-full",
    "aria-hidden": true,
  } as const;

  if (sector === "Finance") {
    return (
      <svg {...common}>
        <rect x="28" y="36" width="150" height="128" />
        <rect x="142" y="52" width="150" height="128" />
        <path d="M48 72h90M48 96h70M48 120h80" />
        <path d="M162 92h90M162 116h60M162 140h80" />
      </svg>
    );
  }

  if (sector === "Health") {
    return (
      <svg {...common}>
        <path d="M40 150C80 150 80 50 140 50s60 100 100 100 40-70 80-70" />
        <circle cx="40" cy="150" r="6" fill="currentColor" stroke="none" />
        <circle cx="140" cy="50" r="6" fill="currentColor" stroke="none" />
        <circle cx="240" cy="150" r="6" fill="currentColor" stroke="none" />
        <circle cx="300" cy="80" r="6" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (sector === "Energy") {
    return (
      <svg {...common}>
        <rect x="36" y="40" width="110" height="120" />
        <path d="M70 70h40M70 94h40M70 118h40" />
        <path d="M168 100h36" />
        <rect x="204" y="48" width="80" height="104" />
        <path d="M228 100l16-28 8 20h18l-22 36 6-20h-16z" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (sector === "Commerce") {
    return (
      <svg {...common}>
        <rect x="48" y="28" width="224" height="144" />
        <rect x="108" y="58" width="104" height="84" />
      </svg>
    );
  }

  if (sector === "Mobility") {
    return (
      <svg {...common}>
        <path d="M28 100h120" />
        <path d="M172 100h120" strokeDasharray="6 8" />
        <circle cx="28" cy="100" r="6" fill="currentColor" stroke="none" />
        <circle cx="148" cy="100" r="6" fill="currentColor" stroke="none" />
        <circle cx="292" cy="100" r="6" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (sector === "Agriculture") {
    return (
      <svg {...common}>
        <path d="M36 156h248" />
        <path d="M52 156c8-36 20-52 36-52s28 16 36 52" />
        <path d="M124 156c8-48 22-72 40-72s32 24 40 72" />
        <path d="M204 156c8-32 18-46 32-46s24 14 32 46" />
        <circle cx="160" cy="48" r="10" />
      </svg>
    );
  }

  if (sector === "Hospitality") {
    return (
      <svg {...common}>
        <path d="M160 36l92 52v76H68V88z" />
        <path d="M136 164V112h48v52" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <rect x="40" y="48" width="90" height="112" />
      <rect x="116" y="40" width="90" height="112" />
      <rect x="192" y="56" width="90" height="112" />
    </svg>
  );
}
