import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { studio } from "@/lib/site";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Gratebridge Labs is a technology agency and a data company. The agency is the main practice. Data studies consequential problems in different sectors.",
};

const principles = [
  {
    title: "Clarity before velocity",
    copy: "Speed on the wrong product is an expensive way to be busy. We slow down until the thing is clear, then we move.",
  },
  {
    title: "One room",
    copy: "Strategy, interface, and engineering are not phases we pass between vendors. They are one practice.",
  },
  {
    title: "Systems that meet reality",
    copy: "We design for the Tuesday afternoon: permissions, empty states, bad data, and the person who has to use it.",
  },
  {
    title: "Finish is a material",
    copy: "Type, motion, and engineering quality are the same decision. A product should feel considered in the hand and sound in the system.",
  },
];

export default function StudioPage() {
  return (
    <div className="px-6 pt-32 pb-24 md:px-10 md:pt-40">
      <div className="mx-auto max-w-[1440px]">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-stone">
          {studio.domain}
        </p>
        <h1 className="mt-4 max-w-5xl font-serif text-[clamp(3.2rem,7vw,6.6rem)] leading-[0.92] tracking-[-0.04em]">
          A technology agency
          <span className="italic"> and a data company.</span>
        </h1>
        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <p className="text-lg leading-8 lg:col-span-7">
            {studio.name} is the lab. The technology agency is the main practice on this site:
            one team that can define a product, design it, and engineer it through to production,
            for operators in finance, health, energy, commerce, mobility, media, hospitality, and
            insurance.
          </p>
          <div className="text-[15px] leading-7 text-stone lg:col-span-4 lg:col-start-9">
            <p>
              The commercial shape of the agency is simple: a software project, a website, or a
              management retainer. Data is a separate practice. Labs studies consequential
              problems in different sectors.
            </p>
            <p className="mt-4">
              We do not run social media, content production, paid media, or brand identity as
              a separate shop. If that is the brief, we will say so early.
            </p>
          </div>
        </div>
        <div className="mt-16 grid gap-px bg-line md:grid-cols-2">
          <Link href="/pricing" className="group bg-paper p-8 transition-colors duration-500 hover:bg-night hover:text-cream md:p-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone group-hover:text-cream/55">
              Agency
            </p>
            <h2 className="mt-4 font-serif text-4xl tracking-[-0.03em]">The work you hire.</h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-stone group-hover:text-cream/70">
              Full software, websites, and a management retainer. This is the bulk of the lab.
            </p>
            <p className="mt-8 text-sm">See pricing →</p>
          </Link>
          <Link href="/data" className="group bg-paper p-8 transition-colors duration-500 hover:bg-night hover:text-cream md:p-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone group-hover:text-cream/55">
              Data
            </p>
            <h2 className="mt-4 font-serif text-4xl tracking-[-0.03em]">Consequential problems.</h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-stone group-hover:text-cream/70">
              Labs studies them in different sectors. The page is the study.
            </p>
            <p className="mt-8 text-sm">Read the inquiries →</p>
          </Link>
        </div>
        <div className="mt-24 grid gap-px bg-line md:grid-cols-2">
          {principles.map((item) => (
            <Reveal key={item.title} className="bg-paper p-8 md:p-12">
              <h2 className="text-2xl tracking-[-0.03em]">{item.title}</h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-stone">{item.copy}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-24 bg-night px-8 py-16 text-cream md:px-14 md:py-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cream/50">
            Work with us
          </p>
          <h2 className="mt-4 max-w-3xl font-serif text-[clamp(2.4rem,5vw,4.4rem)] leading-[1] tracking-[-0.035em]">
            Tell us what the product has to do in the world.
          </h2>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-3 text-sm text-cream/80 transition-colors duration-300 hover:text-cream"
          >
            {studio.email} <span>→</span>
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
