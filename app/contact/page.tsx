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
  searchParams: Promise<{ want?: string }>;
}) {
  const { want } = await searchParams;

  return (
    <div className="px-6 pt-32 pb-24 md:px-10 md:pt-40">
      <div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h1 className="font-serif text-[clamp(3.2rem,6vw,5.6rem)] leading-[0.92] tracking-[-0.04em]">
            Book a call.
          </h1>
          <a
            href={`mailto:${studio.email}`}
            className="mt-10 block text-lg tracking-[-0.02em] underline decoration-ink/20 underline-offset-4 transition-colors duration-300 hover:decoration-signal"
          >
            {studio.email}
          </a>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <ContactForm initialEngagement={want} />
        </div>
      </div>
    </div>
  );
}
