import Link from "next/link";
import { Hero } from "@/components/hero";
import { PricingCards } from "@/components/pricing-board";
import { engagementHref, offers } from "@/lib/offers";

const impact = [
  { figure: "7,500", label: "Active users within 8 months of launch." },
  { figure: "$3m", label: "Average monthly volume, on other products." },
  { figure: "Monthly", label: "Consistent growth once a product is in market." },
] as const;

const room = [
  { title: "Product", copy: "What to build, for whom, and what comes first. The founder is in that decision." },
  { title: "Engineering", copy: "The product, built from scratch. The app, the site, and the system behind them." },
  { title: "Operations", copy: "The day after launch. The routine, the support, and what the founder’s team has to carry." },
  { title: "Platforms", copy: "Banks, platforms, and vendors the product has to sit with." },
  { title: "Quality", copy: "The main flows, checked before anything ships." },
  { title: "Release", copy: "Hosting, deploys, and the environments the product lives in." },
] as const;

const beside = [
  { title: "Ideate", copy: "The problem, the product, and what is worth building." },
  { title: "Brainstorm", copy: "In the room with the founder, before a direction is locked." },
  { title: "Build", copy: "From nothing, through to a release the founder owns." },
  { title: "Try", copy: "Put a version in front of use, and learn what holds." },
  { title: "Explore", copy: "New ideas, new paths, and what the live product should try next." },
] as const;

const method = [
  {
    title: "Scope first",
    copy: "Written before the build: what it has to do, who it is for, what is out, the fee, and the timeline. The published figure is a start. The fee follows scope, complexity, and time.",
  },
  {
    title: "One team",
    copy: "Product, design, and engineering stay in the same room as the founder. The work is not passed between vendors.",
  },
  {
    title: "Focus",
    copy: "One release at a time. The ordinary day of the person who has to use it, including the empty states and the bad data.",
  },
  {
    title: "Speed",
    copy: "Clear first, then we move. The timeline is the plan. Quality and the release path are part of that plan, not a later surprise.",
  },
] as const;

export default function Home() {
  return (
    <>
      <Hero />

      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <h2 className="font-serif text-[clamp(2.8rem,5.4vw,5rem)] leading-[0.94] tracking-[-0.045em] lg:col-span-7">
              We work directly with founders.
            </h2>
            <p className="text-lg leading-8 text-stone lg:col-span-4 lg:col-start-9">
              An experienced team beside you. We ideate, brainstorm, build it out, and try things. The exploration stays with the founder until the product is the one to ship.
            </p>
          </div>
          <ul className="mt-14 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-5">
            {beside.map((item) => (
              <li key={item.title} className="bg-paper p-6 md:p-7">
                <h3 className="font-serif text-3xl tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-stone">{item.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-night px-6 py-16 text-cream md:px-10 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="max-w-3xl font-serif text-[clamp(2.4rem,4.6vw,4rem)] leading-[0.96] tracking-[-0.04em]">
            Built from scratch. The record is in fintech.
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-7 text-cream/70">
            Products made for consequential problems, then grown. Most of the work starts with nothing in market yet.
          </p>
          <div className="mt-14 grid gap-12 border-t border-cream/15 pt-12 sm:grid-cols-3">
            {impact.map((item) => (
              <div key={item.figure}>
                <p className="font-serif text-6xl tracking-[-0.05em] md:text-7xl">{item.figure}</p>
                <p className="mt-4 max-w-[16rem] text-sm leading-6 text-cream/70">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="font-serif text-[clamp(2.6rem,5vw,4.4rem)] leading-[0.95] tracking-[-0.04em]">
            The room on the work
          </h2>
          <ul className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {room.map((item) => (
              <li key={item.title} className="bg-paper p-7 md:p-9">
                <h3 className="font-serif text-3xl tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-stone">{item.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="font-serif text-[clamp(2.6rem,5vw,4.4rem)] leading-[0.95] tracking-[-0.04em]">
            How the work runs
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {method.map((item) => (
              <article key={item.title} className="rounded-[1.2rem] bg-night px-7 py-8 text-cream md:px-8 md:py-10">
                <h3 className="font-serif text-3xl tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-4 max-w-md text-sm leading-6 text-cream/70">{item.copy}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-lg leading-8">
            The founder keeps the code, the design, and the accounts.
          </p>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto max-w-[1440px] border-t border-line pt-12 md:pt-16">
          <h2 className="font-serif text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.95] tracking-[-0.04em]">Services</h2>
          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            {offers.map((offer) => (
              <article key={offer.id} className="flex flex-col border-t border-line pt-6">
                <h3 className="font-serif text-4xl tracking-[-0.04em]">{offer.title}</h3>
                <p className="mt-4 text-sm leading-6 text-stone">{offer.means}</p>
                <p className="mt-6 font-serif text-3xl tracking-[-0.04em]">{offer.figure}</p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-stone">{offer.unit}</p>
                <Link href={engagementHref(offer.id)} className="mt-8 text-sm">
                  Book a call
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto max-w-[1440px] border-t border-line pt-12 md:pt-16">
          <h2 className="font-serif text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.95] tracking-[-0.04em]">Pricing</h2>
          <div className="mt-12">
            <PricingCards />
          </div>
        </div>
      </section>

      <section className="px-6 pb-10 md:px-10">
        <div className="mx-auto max-w-[1440px] border-t border-line pt-10">
          <Link href="/articles" className="font-serif text-3xl tracking-[-0.03em]">
            Articles
          </Link>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-10 md:pb-28">
        <div className="mx-auto max-w-[1440px] rounded-[1.6rem] bg-night px-7 py-14 text-cream md:px-14 md:py-20">
          <h2 className="max-w-3xl font-serif text-[clamp(2.8rem,5.5vw,5rem)] leading-[0.95] tracking-[-0.04em]">
            Thirty minutes with the founder.
          </h2>
          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-cream px-5 py-3 text-sm text-ink"
          >
            Book a call
          </Link>
        </div>
      </section>
    </>
  );
}
