import { randomBytes } from "crypto";
import { offerById } from "@/lib/offers";
import { usdToNgn, usdToNgnRate } from "@/lib/billing/money";
import { insertInvoice } from "@/lib/billing/store";
import type { Invoice } from "@/lib/billing/types";

function dueInDays(days: number) {
  return new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString();
}

export async function openInvoice(input: {
  offerId: Invoice["offerId"];
  name: string;
  email: string;
  company: string;
  amountUsd: number;
  proposedUsd?: number;
  proposalNote?: string;
  status: Invoice["status"];
  parentId?: string;
  cycle?: number;
}) {
  const offer = offerById(input.offerId);
  if (!offer) throw new Error("Unknown engagement");
  const now = new Date().toISOString();
  const rate = usdToNgnRate();
  return insertInvoice({
    id: randomBytes(12).toString("hex"),
    offerId: offer.id,
    title: offer.title,
    cadence: offer.cadence,
    name: input.name,
    email: input.email.toLowerCase(),
    company: input.company,
    listPriceUsd: offer.priceUsd,
    amountUsd: input.amountUsd,
    proposedUsd: input.proposedUsd,
    proposalNote: input.proposalNote,
    status: input.status,
    dueAt: input.status === "awaiting_payment" ? dueInDays(7) : undefined,
    chargeNgn: usdToNgn(input.amountUsd, rate),
    fxRate: rate,
    cycle: input.cycle ?? 1,
    parentId: input.parentId,
    renewed: false,
    events: [
      {
        at: now,
        type: input.status === "negotiating" ? "proposed" : "created",
        note: input.status === "negotiating" ? input.proposalNote || "Fee proposed." : "Invoice opened.",
      },
    ],
    createdAt: now,
    updatedAt: now,
  });
}
