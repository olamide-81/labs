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
  challenge: string;
  response: string;
  made: string[];
  results: { value: string; label: string }[];
};

export const projects: Project[] = [
  {
    slug: "meridian",
    name: "Meridian",
    industry: "Finance",
    year: "2025",
    headline: "An operating system for private markets.",
    summary:
      "A dealing, reporting, and investor platform for a multi-strategy asset manager — one system where the close, the ledger, and the client story stay in agreement.",
    services: ["Product", "Design", "Engineering"],
    palette: { bg: "#101820", fg: "#f4efe4", accent: "#d7b56d" },
    motif: "arc",
    challenge:
      "The firm ran commitments, capital calls, and investor reporting across a stack of spreadsheets and three tools that never quite matched. Partners could not see a position without asking someone to reconcile it.",
    response:
      "We defined a single operating model, then designed and engineered the product around it: a calm desk for the investment team, a precise portal for investors, and a ledger that both of them trust.",
    made: [
      "Investment desk for commitments, calls, and distributions",
      "Investor portal with documents, notices, and performance",
      "Design system shared by internal tools and the client surface",
      "Integration layer for the fund administrator and the data warehouse",
    ],
    results: [
      { value: "11 days", label: "Cut from the quarterly close" },
      { value: "1 ledger", label: "Replacing three conflicting sources" },
      { value: "4 weeks", label: "From design lock to first internal release" },
    ],
  },
  {
    slug: "halcyon",
    name: "Halcyon",
    industry: "Health",
    year: "2025",
    headline: "Care coordination that clinicians actually open.",
    summary:
      "A clinical operations platform for a specialty group — scheduling, pathways, and the handoff between sites, built to be used in the room rather than after it.",
    services: ["Product", "Design", "Engineering"],
    palette: { bg: "#e4eee6", fg: "#14211a", accent: "#1f6b45" },
    motif: "plus",
    challenge:
      "Clinicians were coordinating across sites in chat threads and a legacy EHR that recorded the visit but not the work around it. The operational truth lived in people’s heads.",
    response:
      "We sat with coordinators and physicians, mapped the real pathway, and built a product that puts the next action on the surface. Engineering stayed close to the clinical constraints: permissions, audit, and a record that can be trusted.",
    made: [
      "Pathway board for referrals, prep, and follow-up",
      "Shared patient timeline across clinic sites",
      "Role-based access with a full audit trail",
      "Quiet interface system tuned for long clinical days",
    ],
    results: [
      { value: "3.1×", label: "Weekly active use among clinicians" },
      { value: "26%", label: "Fewer missed handoffs between sites" },
      { value: "1 record", label: "For the work the EHR never held" },
    ],
  },
  {
    slug: "kiln",
    name: "Kiln",
    industry: "Energy",
    year: "2024",
    headline: "Control software for stored power.",
    summary:
      "Dispatch, health, and commercial operations for a fleet of commercial batteries — software that sits between the asset and the market.",
    services: ["Product", "Engineering", "Platform"],
    palette: { bg: "#1a120e", fg: "#f6efe8", accent: "#ff5a1f" },
    motif: "bars",
    challenge:
      "Operators were dispatching assets from vendor portals that did not speak to each other. Commercial decisions and physical state lived in different rooms.",
    response:
      "We engineered a control surface that shows state, constraint, and price in one place, with a platform underneath that can take a new site without a new product.",
    made: [
      "Live fleet view for state of charge, alarms, and availability",
      "Dispatch workspace tied to market windows",
      "Site onboarding that does not fork the product",
      "Alerting and audit for every command that leaves the desk",
    ],
    results: [
      { value: "18%", label: "More dispatchable capacity in range" },
      { value: "9 sites", label: "On one platform in the first year" },
      { value: "< 2s", label: "From command to acknowledged state" },
    ],
  },
  {
    slug: "sable",
    name: "Sable",
    industry: "Commerce",
    year: "2024",
    headline: "A flagship that feels like the house.",
    summary:
      "Commerce, clienteling, and content for a luxury house — a digital flagship with the same restraint as the rooms it represents.",
    services: ["Design", "Engineering", "Product"],
    palette: { bg: "#efe8df", fg: "#1a1412", accent: "#6e2430" },
    motif: "frame",
    challenge:
      "The online store had been bolted onto a platform that sold everything the same way. The collection looked smaller on screen than it did in the boutique, and service could not follow a client between the two.",
    response:
      "We redesigned the buying experience around the object, then engineered a storefront and a clienteling tool that share one catalog, one client, and one standard of finish.",
    made: [
      "Editorial storefront with a collection-first browse",
      "Clienteling tool for appointments, holds, and private pieces",
      "Shared catalog and content model for studio and commerce",
      "Checkout tuned for high-consideration orders",
    ],
    results: [
      { value: "2.4×", label: "Conversion on the flagship collection" },
      { value: "38%", label: "Of online orders touched by a client advisor" },
      { value: "1 catalog", label: "For boutique, web, and private sale" },
    ],
  },
  {
    slug: "relay",
    name: "Relay",
    industry: "Mobility",
    year: "2026",
    headline: "Operations for a railway people trust.",
    summary:
      "Passenger information and the control room behind it — one product for the people on the platform and the people running the service.",
    services: ["Product", "Design", "Engineering"],
    palette: { bg: "#17181b", fg: "#f4f1ea", accent: "#f0c432" },
    motif: "route",
    challenge:
      "Disruption was announced in one system, logged in another, and explained to passengers in a third. Staff spent the incident translating, not resolving.",
    response:
      "We built Relay as a single operational thread: an incident starts in the control room and arrives on the platform as a clear, timed message, with the same language in both places.",
    made: [
      "Control-room timeline for incidents and service decisions",
      "Passenger messages generated from the operational record",
      "Station screens and a traveler view on one content model",
      "After-action review that writes itself from the timeline",
    ],
    results: [
      { value: "28%", label: "Fewer mismatched passenger messages" },
      { value: "90s", label: "Median time from decision to platform" },
      { value: "1 thread", label: "From control room to traveler" },
    ],
  },
  {
    slug: "folio",
    name: "Folio",
    industry: "Media",
    year: "2023",
    headline: "A press that can publish at the speed of the desk.",
    summary:
      "An editorial system for an independent press — commissioning, editing, and the public site, in one quiet piece of software.",
    services: ["Product", "Design", "Engineering"],
    palette: { bg: "#f7f4ee", fg: "#14161f", accent: "#2746d6" },
    motif: "columns",
    challenge:
      "Issues were assembled in documents, designed in another tool, and published by a developer. The editors could not see the issue until it was nearly too late to change it.",
    response:
      "We designed Folio around the issue, not the article. Editors compose in the same structure the reader meets, and engineering made that structure fast enough to publish from the desk.",
    made: [
      "Issue composer with type, image, and sequence",
      "Commissioning and edit states the whole desk can see",
      "Public site generated from the same model",
      "A reading experience with the press’s own typographic rules",
    ],
    results: [
      { value: "6 days", label: "From weeks, for a full issue" },
      { value: "0 devs", label: "Required for a standard publish" },
      { value: "12 issues", label: "Shipped on the system in year one" },
    ],
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
