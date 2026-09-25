import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { studio } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with Gratebridge, the product and engineering agency of Gratebridge Labs.",
};

export default function ContactPage() {
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
            Tell us about the company, the product, and what has to be true when the work is in
            people’s hands. We read every note.
          </p>
          <a
            href={`mailto:${studio.email}`}
            className="mt-10 inline-block text-lg tracking-[-0.02em] underline decoration-ink/20 underline-offset-4 transition-colors duration-300 hover:decoration-signal"
          >
            {studio.email}
          </a>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-stone">
            {studio.name} · {studio.parent}
          </p>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
