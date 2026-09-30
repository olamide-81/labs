export type Inquiry = {
  index: string;
  sector: string;
  about: string;
  problem: string;
  direction: string;
  bg: string;
  fg: string;
};

export const inquiries: Inquiry[] = [
  {
    index: "01",
    sector: "Finance",
    about: "Money and the record of it.",
    problem: "The official record and the operating record do not agree.",
    direction: "One ledger the desk and the investor can both trust.",
    bg: "#10140f",
    fg: "#f6f3ec",
  },
  {
    index: "02",
    sector: "Health",
    about: "Care and the record of it.",
    problem: "Care happens outside the record.",
    direction: "The next action on the surface, not after the visit.",
    bg: "#f6f3ec",
    fg: "#12110f",
  },
  {
    index: "03",
    sector: "Energy",
    about: "Power and the market for it.",
    problem: "The asset and the market live in different rooms.",
    direction: "State, constraint, and price in one place.",
    bg: "#241910",
    fg: "#f6f1e8",
  },
  {
    index: "04",
    sector: "Commerce",
    about: "Goods and how they are sold.",
    problem: "The object is smaller on screen than in the room.",
    direction: "One catalog across the boutique and the site.",
    bg: "#e24a12",
    fg: "#f6f3ec",
  },
  {
    index: "05",
    sector: "Mobility",
    about: "How people and things move.",
    problem: "Disruption is translated by people, not a system.",
    direction: "A control-room decision arrives on the platform.",
    bg: "#13241c",
    fg: "#f3f7f4",
  },
  {
    index: "06",
    sector: "Agriculture",
    about: "Food and how it is grown.",
    problem: "The season, the field, and the buyer are separate records.",
    direction: "What was planted, what moved, and what was paid.",
    bg: "#f3f0e8",
    fg: "#12110f",
  },
  {
    index: "07",
    sector: "Hospitality",
    about: "The guest and the house.",
    problem: "The guest meets one house. The operation does not.",
    direction: "One guest, one record, across the house.",
    bg: "#0e0e0c",
    fg: "#f6f3ec",
  },
  {
    index: "08",
    sector: "Insurance",
    about: "Risk, cover, and the claim.",
    problem: "The policy, the claim, and the person are three files.",
    direction: "The decision, the evidence, and what is still missing.",
    bg: "#1c2430",
    fg: "#f4efe4",
  },
];
