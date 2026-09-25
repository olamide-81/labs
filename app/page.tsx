import Link from "next/link";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";
import { WorkIndex } from "@/components/work-index";

const disciplines = [
  {
    index: "01",
    title: "Product",
    copy: "We decide what is worth building, in what order, and how it should behave once people depend on it.",
  },
  {
    index: "02",
    title: "Design",
    copy: "Interfaces with a point of view. Systems, typography, and the small decisions that make a product feel inevitable.",
  },
  {
    index: "03",
    title: "Engineering",
    copy: "Production software. Architecture, platforms, and the last mile between a prototype and something a company can run.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <WorkIndex />
      <section className="border-t border-line px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-stone">The practice</p>
            <h2 className="mt-4 max-w-3xl font-serif text-[clamp(2.4rem,5vw,4.6rem)] leading-[0.98] tracking-[-0.035em]">
              Product and engineering, held in the same room.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {disciplines.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <p className="font-mono text-[11px] text-stone">{item.index}</p>
                <h3 className="mt-4 text-2xl tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-4 max-w-sm text-sm leading-7 text-stone">{item.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-night px-6 py-28 text-cream md:px-10 md:py-40">
        <Reveal className="mx-auto max-w-[1440px]">
          <p className="max-w-5xl font-serif text-[clamp(2.2rem,5.4vw,5rem)] leading-[1.02] tracking-[-0.035em]">
            Taste is a technical decision. The products that last are the ones where design and
            engineering were never handed across a wall.
          </p>
          <Link
            href="/approach"
            className="mt-12 inline-flex items-center gap-3 text-sm text-cream/80 transition-colors duration-300 hover:text-cream"
          >
            How we work <span>→</span>
          </Link>
        </Reveal>
      </section>
      <section className="px-6 py-28 md:px-10 md:py-36">
        <Reveal className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-stone">
              A Gratebridge Labs company
            </p>
            <h2 className="mt-4 font-serif text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.04em]">
              Have a product
              <span className="block italic">that has to hold up?</span>
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-ink px-5 py-3 text-sm text-cream transition-transform duration-500 hover:-translate-y-0.5"
          >
            Start a conversation <span>→</span>
          </Link>
        </Reveal>
      </section>
    </>
  );
}
