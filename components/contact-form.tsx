"use client";

import { useActionState } from "react";
import { sendProjectNote, type ContactState } from "@/lib/contact";
import { offers, type Offer } from "@/lib/offers";
import { studio } from "@/lib/site";

type Engagement = Offer["id"] | "unsure";

const engagementOptions: { value: Engagement; label: string }[] = [
  ...offers.map((offer) => ({ value: offer.id, label: offer.title })),
  { value: "unsure", label: "Not sure yet" },
];

const control =
  "mt-2 w-full rounded-md border border-ink/25 bg-paper px-3 py-3 text-lg tracking-[-0.02em] outline-none transition-colors focus-visible:border-ink focus-visible:outline-none";

export function ContactForm({ initialEngagement = "unsure" }: { initialEngagement?: string }) {
  const engagement = engagementOptions.some((option) => option.value === initialEngagement)
    ? initialEngagement
    : "unsure";
  const [state, action, pending] = useActionState(sendProjectNote, null as ContactState);

  if (state?.ok) {
    return (
      <div className="border-t border-line pt-10">
        <p className="font-serif text-4xl leading-tight tracking-[-0.03em] italic">The note is with the Labs.</p>
        <a
          href={studio.calendly}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex rounded-full bg-ink px-5 py-3 text-sm text-cream"
        >
          Book the 30-minute call
        </a>
      </div>
    );
  }

  return (
    <form action={action} className="grid gap-5 border-t border-line pt-8">
      <label className="block">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone">Name</span>
        <input name="name" required autoComplete="name" className={control} />
      </label>
      <label className="block">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone">Email</span>
        <input name="email" type="email" required autoComplete="email" className={control} />
      </label>
      <label className="block">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone">Company</span>
        <input name="company" autoComplete="organization" className={control} />
      </label>
      <label className="block">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone">What do you want to do</span>
        <select name="engagement" defaultValue={engagement} className={control}>
          {engagementOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone">About the work</span>
        <textarea name="message" required rows={5} className={`${control} resize-y`} />
      </label>
      {state?.error ? <p className="text-sm text-signal">{state.error}</p> : null}
      <button
        type="submit"
        disabled={pending}
        className="mt-2 inline-flex w-fit items-center gap-3 rounded-full bg-ink px-5 py-3 text-sm text-cream transition-transform duration-500 hover:-translate-y-0.5 disabled:opacity-60"
      >
        {pending ? "Sending" : "Send"}
      </button>
    </form>
  );
}
