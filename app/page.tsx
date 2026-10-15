import Link from "next/link";
import { WorkShowcase } from "@/components/work-showcase";
import { ResearchGrid } from "@/components/research-grid";
import { Hero } from "@/components/hero";
import { PricingCards } from "@/components/pricing-board";
import { FounderCall } from "@/components/founder-call";

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
  { title: "Find the focus", copy: "We get clear on your customers, the problem, and the first thing worth building." },
  { title: "Make a plan", copy: "You get a written scope, a clear fee, and a timeline before the work begins." },
  { title: "Build together", copy: "Work directly with our designers and engineers. See progress, try it out, and shape the details." },
  { title: "Launch with confidence", copy: "We test the essential flows, prepare the handover, and get your product into people’s hands." },
] as const;

export default function Home() {
  return (
    <>
      <Hero />
      <WorkShowcase />

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

      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="font-serif text-[clamp(2.6rem,5vw,4.4rem)] leading-[0.95] tracking-[-0.04em]">
            The team behind your product
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
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-2xl font-serif text-[clamp(2.6rem,5vw,4.4rem)] leading-[0.95] tracking-[-0.04em]">
              From first conversation<br /><span className="italic text-stone">to something real.</span>
            </h2>
            <p className="max-w-xs text-sm leading-6 text-stone">A clear plan. A team you can talk to. Progress you can see.</p>
          </div>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {method.map((item, index) => (
              <li key={item.title} className="group border-t border-line pt-5">
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-mono text-xs text-signal">0{index + 1}</span>
                  <span aria-hidden="true" className="text-xl text-stone transition-transform group-hover:translate-x-1 motion-reduce:transform-none">↗</span>
                </div>
                <h3 className="font-serif text-3xl tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-4 max-w-sm text-sm leading-6 text-stone">{item.copy}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 border-t border-line pt-6 text-sm text-stone">
            Yours from day one: the code, the design, and the accounts.
          </p>
        </div>
      </section>

      <section id="pricing" className="scroll-mt-24 px-6 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto max-w-[1440px] border-t border-line pt-12 md:pt-16">
          <h2 className="font-serif text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.95] tracking-[-0.04em]">Services &amp; pricing</h2>
          <div className="mt-12"><PricingCards /></div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1440px] border-t border-line pt-12">
          <p className="font-mono text-xs uppercase tracking-widest text-stone">The data practice</p>
          <h2 className="mt-5 max-w-4xl font-serif text-[clamp(2.8rem,5.4vw,5rem)] leading-[0.94] tracking-[-0.04em]">Consequential problems. <span className="italic">Eight sectors.</span></h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone">Evidence worth understanding. Explore the challenges in healthcare, energy, finance and beyond, with sourced data and questions for further research.</p>
          <ResearchGrid />
          <Link href="/data" className="mt-8 inline-block underline underline-offset-4">Explore the research library →</Link>
        </div>
      </section>

      <FounderCall />
    </>
  );
}
