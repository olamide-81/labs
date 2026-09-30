import type { Offer } from "@/lib/offers";

export type InvoiceStatus = "negotiating" | "awaiting_payment" | "paid" | "void";

export type InvoiceEvent = {
  at: string;
  type: "created" | "proposed" | "accepted" | "countered" | "payment_started" | "paid" | "reminded" | "void";
  note: string;
};

export type Invoice = {
  id: string;
  number: string;
  offerId: Offer["id"];
  title: string;
  cadence: Offer["cadence"];
  name: string;
  email: string;
  company: string;
  listPriceUsd: number;
  amountUsd: number;
  proposedUsd?: number;
  proposalNote?: string;
  status: InvoiceStatus;
  dueAt?: string;
  paidAt?: string;
  receiptNumber?: string;
  paystackReference?: string;
  chargeNgn?: number;
  fxRate?: number;
  cycle: number;
  parentId?: string;
  renewed: boolean;
  lastReminderAt?: string;
  events: InvoiceEvent[];
  createdAt: string;
  updatedAt: string;
};
