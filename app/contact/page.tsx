import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { studio } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with the technology agency at Gratebridge Labs.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ engagement?: string }>;
}) {
  const { engagement } = await searchParams;

  return (
    <div className="px-6 pt-32 pb-24 md:px-10 md:pt-40">
      <div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-stone">Contact</p>
          <h1 className="mt-4 font-serif text-[clamp(3.2rem,6vw,5.6rem)] leading-[0.92] tracking-[-0.04em]">
            Start a
            <span className="italic"> project.</span>
          </h1>
          <p className="mt-8 max-w-md text-[15px] leading-7 text-stone">
            Tell us the company, the product, and what has to be true when people depend on it.
            We read every note and reply with a clear next step — questions, or a written scope.
          </p>
          <ul className="mt-8 max-w-md space-y-3 text-sm leading-6 text-stone">
            <li>Name the engagement if you know it: software, website, or retainer.</li>
            <li>A first conversation is a working session, not a pitch.</li>
            <li>Nothing starts until the scope, the fee, and the timeline are in writing.</li>
          </ul>
          <div className="mt-10 flex flex-col items-start gap-4">
            <a
              href={studio.calendly}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border border-ink/20 px-4 py-2.5 text-sm underline decoration-transparent underline-offset-4 transition-colors duration-300 hover:border-ink"
            >
              Book a discovery session
            </a>
            <a
              href={`mailto:${studio.email}`}
              className="text-lg tracking-[-0.02em] underline decoration-ink/20 underline-offset-4 transition-colors duration-300 hover:decoration-signal"
            >
              {studio.email}
            </a>
          </div>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-stone">
            {studio.name} · {studio.domain}
          </p>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <ContactForm initialEngagement={engagement} />
        </div>
      </div>
    </div>
  );
}
