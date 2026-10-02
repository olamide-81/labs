export const studio = {
  name: "Gratebridge Labs",
  company: "Gratebridge",
  domain: "labs.gratebridge.com",
  url: "https://labs.gratebridge.com",
  email: "hello@labs.gratebridge.com",
  calendly: "https://calendly.com/gratebridgelabs/30min",
  description:
    "Gratebridge Labs is a technology agency and a data company. The agency designs and builds full software, websites, and management retainers. The data practice studies consequential problems in different sectors.",
};

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/articles", label: "Articles" },
  { href: "/studio", label: "About" },
] as const;

export const industries = [
  "Finance",
  "Health",
  "Energy",
  "Commerce",
  "Mobility",
  "Agriculture",
  "Hospitality",
  "Insurance",
] as const;
