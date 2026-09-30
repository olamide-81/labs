export type Offer = {
  id: "software" | "website" | "retainer";
  index: string;
  kicker: string;
  title: string;
  shape: string;
  figure: string;
  unit: string;
  priceUsd: number;
  cadence: "project" | "month";
  figureNote: string;
  summary: string;
  fit: string;
  includes: string[];
  close: string;
  tone: {
    bg: string;
    fg: string;
    muted: string;
    line: string;
    mark: string;
  };
};

export const offers: Offer[] = [
  {
    id: "software",
    index: "01",
    kicker: "Development",
    title: "Full software",
    shape: "Project",
    figure: "$6,000",
    unit: "from · negotiable",
    priceUsd: 6000,
    cadence: "project",
    figureNote: "Typical first release",
    summary:
      "A product designed and engineered as one system — from the operating question to software a company can run.",
    fit: "For operators who need a first release that holds up in production, not a prototype that has to be explained.",
    includes: [
      "Written scope before work starts",
      "Design and engineering, one team",
      "Production build",
      "You own the code",
    ],
    close: "The fee, the timeline, and what is out of scope are written before kickoff.",
    tone: {
      bg: "#10140f",
      fg: "#f6f3ec",
      muted: "rgb(246 243 236 / 0.72)",
      line: "rgb(246 243 236 / 0.18)",
      mark: "#e24a12",
    },
  },
  {
    id: "website",
    index: "02",
    kicker: "Design & build",
    title: "Website",
    shape: "Project",
    figure: "$750",
    unit: "from · negotiable",
    priceUsd: 750,
    cadence: "project",
    figureNote: "Typical delivery",
    summary:
      "A site with a point of view — designed and built to explain the company and bring the right work in.",
    fit: "For a flagship, a product site, or a rebuild of a site that no longer says what the company does.",
    includes: [
      "Structure, then design",
      "Design and build, one team",
      "A site your team can update",
      "Two weeks after launch",
    ],
    close: "Launch support is part of the project. It is not an upsell.",
    tone: {
      bg: "#241910",
      fg: "#f6f1e8",
      muted: "rgb(246 241 232 / 0.72)",
      line: "rgb(246 241 232 / 0.18)",
      mark: "#e7c27a",
    },
  },
  {
    id: "retainer",
    index: "03",
    kicker: "Management",
    title: "Retainer",
    shape: "Monthly",
    figure: "$1,000",
    unit: "per month · negotiable",
    priceUsd: 1000,
    cadence: "month",
    figureNote: "Product, design, and engineering",
    summary:
      "A dedicated team managing the product after launch — roadmap, design, and engineering against the live system.",
    fit: "For a product in market, or an internal team that should not carry design and engineering alone.",
    includes: [
      "A named team",
      "A written plan each month",
      "Design and build on the live product",
      "Pause with notice. You keep the work.",
    ],
    close: "We take a retainer when we understand the product. The work stays yours if you pause.",
    tone: {
      bg: "#13241c",
      fg: "#f3f7f4",
      muted: "rgb(243 247 244 / 0.72)",
      line: "rgb(243 247 244 / 0.18)",
      mark: "#9dceb4",
    },
  },
];

export function engagementHref(id: Offer["id"] | "unsure" = "unsure") {
  return id === "unsure" ? "/contact" : `/checkout?offer=${id}`;
}

export function offerById(id: string | undefined) {
  return offers.find((offer) => offer.id === id);
}
