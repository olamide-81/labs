"use client";

import { useActionState } from "react";
import { resumeAction, type ActionState } from "@/lib/billing/actions";

export function ResumeForm() {
  const [state, action, pending] = useActionState(resumeAction, null as ActionState);
  return (
    <form action={action} className="mt-10 max-w-md">
      <label className="block text-sm">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-stone">Email</span>
        <input name="email" type="email" required className="mt-2 w-full border-b border-line bg-transparent py-3 outline-none" />
      </label>
      {state?.error ? <p className="mt-4 text-sm text-signal">{state.error}</p> : null}
      {state?.notice ? <p className="mt-4 text-sm">{state.notice}</p> : null}
      <button disabled={pending} className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm text-cream disabled:opacity-60">
        Email my invoices
      </button>
    </form>
  );
}
