import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { studio } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell Gratebridge Labs what you want to do, then book a 30-minute call.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ want?: string; source?: string }>;
}) {
  const { want, source } = await searchParams;

  return (
    <div className="px-6 pt-32 pb-24 md:px-10 md:pt-40">
      <div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h1 className="font-serif text-[clamp(3.2rem,6vw,5.6rem)] leading-[0.92] tracking-[-0.04em]">
            Let’s make it real.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-8 text-stone">Tell us what you are building, what needs to change, and when. We will help define a useful first release and a clear scope.</p>
          <a href={studio.calendly} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-full bg-ink px-5 py-3 text-sm text-cream">Choose a 30-minute call ↗</a>
          <a
            href={`mailto:${studio.email}`}
            className="mt-10 block text-lg tracking-[-0.02em] underline decoration-ink/20 underline-offset-4 transition-colors duration-300 hover:decoration-signal"
          >
            {studio.email}
          </a>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <ContactForm initialEngagement={want} initialSource={source?.slice(0, 200)} />
        </div>
      </div>
    </div>
  );
}
