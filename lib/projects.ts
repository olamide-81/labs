export type Project = {
  slug: string;
  name: string;
  industry: string;
  year: string;
  headline: string;
  summary: string;
  services: string[];
  palette: { bg: string; fg: string; accent: string };
  motif: "arc" | "plus" | "bars" | "frame" | "route" | "columns";
  image?: string;
  imageBg?: string;
  imageFit?: "cover" | "contain";
  challenge: string;
  response: string;
  made: string[];
  results: { value: string; label: string }[];
  url?: string;
  appStore?: string;
  playStore?: string;
};

export const projects: Project[] = [
  {
    slug: "paxalpay",
    name: "Paxalpay",
    industry: "Fintech",
    year: "2025",
    headline: "Crypto in. Spend it immediately.",
    summary: "Deposit crypto. Pay bills, transfer to a bank, or scan to pay.",
    services: ["Product", "Design", "Engineering"],
    palette: { bg: "#101820", fg: "#f4efe4", accent: "#d7b56d" },
    motif: "arc",
    image: "/products/paxalpay-hero.png",
    imageBg: "#07080c",
    imageFit: "cover",
    url: "https://paxalpay.com",
    appStore: "https://apps.apple.com/ng/app/paxalpay/id6761045303",
    playStore: "https://play.google.com/store/apps/details?id=com.paxalpay.mobileapp",
    challenge:
      "Getting crypto into spendable money meant waiting on a peer-to-peer trade. The rate, the counterparty, and the payout were separate steps.",
    response:
      "Labs designed and engineered one wallet. A person deposits crypto, sees the rate, and then pays a bill, transfers to a bank, or scans to pay. The fee is on screen before the trade.",
    made: [
      "BTC, ETH, USDT, and other tokens",
      "Instant conversion to local currency",
      "Bills, airtime, bank transfer, scan to pay",
      "The fee is shown before the trade",
    ],
    results: [],
  },
  {
    slug: "raf",
    name: "RAF",
    industry: "Savings",
    year: "2025",
    headline: "Save and invest, in naira or dollars.",
    summary: "Goal plans, vaults, and a portfolio. Built for Rich Aunty Finance.",
    services: ["Product", "Design", "Engineering"],
    palette: { bg: "#141c18", fg: "#f3f7f4", accent: "#8fbfa2" },
    motif: "bars",
    image: "/products/raf-phone.png",
    imageBg: "#2f6bff",
    imageFit: "contain",
    url: "https://app.richauntyfinance.com",
    appStore: "https://apps.apple.com/ng/app/raf-investment/id6740771324",
    playStore: "https://play.google.com/store/apps/details?id=com.rafengineering.rafmobileapp",
    challenge:
      "Saving toward a goal and holding an investment sat in different tools. A person could not see the plan and what they held in one place.",
    response:
      "Labs designed and engineered one app for Rich Aunty Finance. A person sets a goal, holds naira or dollars, and sees the plans and assets together.",
    made: [
      "Plans for a goal: education, emergency, travel",
      "Naira and dollar",
      "Vaults, flex savings, community plans",
      "Portfolio of plans and assets",
    ],
    results: [],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacent(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { previous: undefined, next: undefined };
  return {
    previous: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  };
}
