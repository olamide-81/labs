import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { studio } from "@/lib/site";

export const metadata: Metadata = {
  title: "Studio",
  description: "Gratebridge is the product and engineering agency of Gratebridge Labs.",
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
          {studio.parent}
        </p>
        <h1 className="mt-4 max-w-5xl font-serif text-[clamp(3.2rem,7vw,6.6rem)] leading-[0.92] tracking-[-0.04em]">
          A studio for products
          <span className="italic"> that have to last.</span>
        </h1>
        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <p className="text-lg leading-8 lg:col-span-7">
            {studio.name} is the product and engineering agency of {studio.parent}. We partner
            with founders and operators who need software that can carry a business — across
            finance, health, energy, commerce, mobility, and media.
          </p>
          <p className="text-[15px] leading-7 text-stone lg:col-span-4 lg:col-start-9">
            The parent company is {studio.parent}. The practice is {studio.name}: a single team
            that can define a product, design it, and engineer it through to production.
          </p>
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
