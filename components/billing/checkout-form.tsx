"use client";

import { useActionState } from "react";
import { checkoutAction, type ActionState } from "@/lib/billing/actions";
import { formatNgn, formatUsd, usdToNgn } from "@/lib/billing/money";
import type { Offer } from "@/lib/offers";

export function CheckoutForm({ offer, rate }: { offer: Offer; rate: number }) {
  const [state, action, pending] = useActionState(checkoutAction, null as ActionState);
  const ngn = usdToNgn(offer.priceUsd, rate);

  return (
    <form action={action} className="flex flex-col gap-5">
      <input type="hidden" name="offer" value={offer.id} />
      <label className="block text-sm">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-stone">Name</span>
        <input name="name" required className="mt-2 w-full border-b border-line bg-transparent py-3 outline-none" />
      </label>
      <label className="block text-sm">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-stone">Email</span>
        <input name="email" type="email" required className="mt-2 w-full border-b border-line bg-transparent py-3 outline-none" />
      </label>
      <label className="block text-sm">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-stone">Company</span>
        <input name="company" className="mt-2 w-full border-b border-line bg-transparent py-3 outline-none" />
      </label>
      {state?.error ? <p className="text-sm text-signal">{state.error}</p> : null}
      <button
        name="intent"
        value="pay"
        disabled={pending}
        className="mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-ink px-5 py-3 text-sm text-cream disabled:opacity-60"
      >
        Pay {formatUsd(offer.priceUsd)}
        <span aria-hidden>→</span>
      </button>
      <p className="text-xs leading-5 text-stone">
        Paystack charges {formatNgn(ngn)}
        {offer.cadence === "month" ? " this month" : ""}. The invoice link stays in your email.
      </p>
      <div className="mt-4 border-t border-line pt-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-stone">Or propose a fee</p>
        <label className="mt-4 block text-sm">
          <span className="text-stone">Your number, in USD</span>
          <input name="proposed" inputMode="decimal" placeholder="4500" className="mt-2 w-full border-b border-line bg-transparent py-3 outline-none placeholder:text-stone/40" />
        </label>
        <label className="mt-4 block text-sm">
          <span className="text-stone">Note</span>
          <textarea name="note" rows={3} className="mt-2 w-full resize-none border-b border-line bg-transparent py-3 outline-none" />
        </label>
        <button
          name="intent"
          value="negotiate"
          disabled={pending}
          className="mt-5 inline-flex items-center gap-3 rounded-full border border-ink/15 px-5 py-3 text-sm disabled:opacity-60"
        >
          Send proposal
        </button>
      </div>
    </form>
  );
}
