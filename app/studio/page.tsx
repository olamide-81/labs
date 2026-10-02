import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { studio } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
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
        <h1 className="max-w-5xl font-serif text-[clamp(3.2rem,7vw,6.6rem)] leading-[0.92] tracking-[-0.04em]">
          A technology agency
          <span className="italic"> and a data company.</span>
        </h1>
        <p className="mt-16 max-w-3xl text-lg leading-8">
          {studio.name} defines a product, designs it, and engineers it through to production.
          The work is a software project, a website, or a team that stays on after launch.
        </p>
        <div className="mt-16 grid gap-px bg-line md:grid-cols-2">
          <Link href="/pricing" className="group bg-paper p-8 transition-colors duration-500 hover:bg-night hover:text-cream md:p-12">
            <h2 className="font-serif text-4xl tracking-[-0.03em]">Pricing</h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-stone group-hover:text-cream/70">
              Full software, websites, and a management retainer.
            </p>
          </Link>
          <Link href="/data" className="group bg-paper p-8 transition-colors duration-500 hover:bg-night hover:text-cream md:p-12">
            <h2 className="font-serif text-4xl tracking-[-0.03em]">Data</h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-stone group-hover:text-cream/70">
              Consequential problems, studied by sector.
            </p>
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
          <h2 className="max-w-3xl font-serif text-[clamp(2.4rem,5vw,4.4rem)] leading-[1] tracking-[-0.035em]">
            Book a 30-minute call.
          </h2>
          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-cream px-5 py-3 text-sm text-ink"
          >
            Book a call
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
