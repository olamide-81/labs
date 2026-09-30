"use client";

import { useActionState } from "react";
import { deskDecideAction, deskLoginAction, type ActionState } from "@/lib/billing/actions";
import type { Invoice } from "@/lib/billing/types";

export function DeskLogin() {
  const [state, action, pending] = useActionState(deskLoginAction, null as ActionState);
  return (
    <form action={action} className="mt-10 max-w-md">
      <label className="block text-sm">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-stone">Desk key</span>
        <input name="key" type="password" required className="mt-2 w-full border-b border-line bg-transparent py-3 outline-none" />
      </label>
      {state?.error ? <p className="mt-4 text-sm text-signal">{state.error}</p> : null}
      <button disabled={pending} className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm text-cream">
        Open
      </button>
    </form>
  );
}

export function DeskDecision({ invoice }: { invoice: Invoice }) {
  const [state, action, pending] = useActionState(deskDecideAction, null as ActionState);
  if (invoice.status === "paid" || invoice.status === "void") return null;
  return (
    <form action={action} className="mt-4 flex flex-wrap items-end gap-3">
      <input type="hidden" name="invoice" value={invoice.id} />
      {state?.error ? <p className="w-full text-sm text-signal">{state.error}</p> : null}
      {invoice.status === "negotiating" && invoice.proposedUsd ? (
        <button name="decision" value="accept" disabled={pending} className="rounded-full bg-ink px-4 py-2 text-sm text-cream">
          Accept {invoice.proposedUsd}
        </button>
      ) : null}
      <input name="amount" inputMode="decimal" placeholder="Counter USD" className="w-32 border-b border-line bg-transparent py-2 text-sm outline-none" />
      <button name="decision" value="counter" disabled={pending} className="rounded-full border border-ink/15 px-4 py-2 text-sm">
        Set fee
      </button>
      <button name="decision" value="void" disabled={pending} className="rounded-full px-4 py-2 text-sm text-stone">
        Void
      </button>
    </form>
  );
}
