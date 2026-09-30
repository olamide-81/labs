import { createHmac, timingSafeEqual } from "crypto";
import { usdToNgn, usdToNgnRate } from "@/lib/billing/money";

const BASE = "https://api.paystack.co";

function secret() {
  const key = process.env.PAYSTACK_SECRET_KEY?.trim();
  if (!key) throw new Error("PAYSTACK_SECRET_KEY is not set");
  return key;
}

export function verifyPaystackSignature(rawBody: string, signature: string | null) {
  if (!signature) return false;
  const hash = createHmac("sha512", secret()).update(rawBody).digest("hex");
  const left = Buffer.from(hash);
  const right = Buffer.from(signature);
  if (left.length !== right.length) return false;
  return timingSafeEqual(left, right);
}

export async function startPaystackCharge(input: {
  email: string;
  amountUsd: number;
  reference: string;
  callbackUrl: string;
  metadata: Record<string, string>;
}) {
  const rate = usdToNgnRate();
  const ngn = usdToNgn(input.amountUsd, rate);
  const response = await fetch(`${BASE}/transaction/initialize`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${secret()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: input.email,
      amount: ngn * 100,
      currency: "NGN",
      reference: input.reference,
      callback_url: input.callbackUrl,
      metadata: { ...input.metadata, amountUsd: String(input.amountUsd), fxRate: String(rate) },
    }),
  });
  const data = (await response.json()) as {
    status?: boolean;
    message?: string;
    data?: { authorization_url?: string; reference?: string };
  };
  if (!response.ok || !data.status || !data.data?.authorization_url) {
    throw new Error(data.message || "Paystack could not start this payment");
  }
  return { url: data.data.authorization_url, reference: data.data.reference || input.reference, ngn, rate };
}

export async function verifyPaystackCharge(reference: string) {
  const response = await fetch(`${BASE}/transaction/verify/${encodeURIComponent(reference)}`, {
    headers: { Authorization: `Bearer ${secret()}` },
    cache: "no-store",
  });
  const data = (await response.json()) as {
    status?: boolean;
    message?: string;
    data?: { status?: string; reference?: string; amount?: number; currency?: string };
  };
  if (!response.ok || !data.status) {
    throw new Error(data.message || "Paystack could not verify this payment");
  }
  return data.data;
}
