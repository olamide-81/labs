"use client";

import { useActionState } from "react";
import { payInvoiceAction, proposeAgainAction, type ActionState } from "@/lib/billing/actions";

export function PayButton({ invoiceId }: { invoiceId: string }) {
  const [state, action, pending] = useActionState(
    async (prev: ActionState) => payInvoiceAction(invoiceId) ?? prev,
    null as ActionState,
  );
  return (
    <form action={action}>
      {state?.error ? <p className="mb-3 text-sm text-signal">{state.error}</p> : null}
      <button disabled={pending} className="inline-flex items-center gap-3 rounded-full bg-ink px-5 py-3 text-sm text-cream disabled:opacity-60">
        Pay now <span aria-hidden>→</span>
      </button>
    </form>
  );
}

export function ProposalForm({ invoiceId }: { invoiceId: string }) {
  const [state, action, pending] = useActionState(proposeAgainAction, null as ActionState);
  return (
    <form action={action} className="mt-8 border-t border-line pt-6">
      <input type="hidden" name="invoice" value={invoiceId} />
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-stone">Propose another fee</p>
      {state?.error ? <p className="mt-3 text-sm text-signal">{state.error}</p> : null}
      <input name="proposed" inputMode="decimal" placeholder="4500" className="mt-4 w-full border-b border-line bg-transparent py-3 outline-none placeholder:text-stone/40" />
      <textarea name="note" rows={3} placeholder="Why this number" className="mt-4 w-full resize-none border-b border-line bg-transparent py-3 outline-none placeholder:text-stone/40" />
      <button disabled={pending} className="mt-5 inline-flex rounded-full border border-ink/15 px-5 py-3 text-sm disabled:opacity-60">
        Send
      </button>
    </form>
  );
}
