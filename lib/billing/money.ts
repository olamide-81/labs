const RATE_FALLBACK = 1380;

export function usdToNgnRate() {
  const fromEnv = Number(process.env.PAYSTACK_USD_TO_NGN_RATE);
  if (Number.isFinite(fromEnv) && fromEnv > 0) return fromEnv;
  return RATE_FALLBACK;
}

export function usdToNgn(amountUsd: number, rate = usdToNgnRate()) {
  return Math.round(amountUsd * rate);
}

export function formatUsd(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: amount % 1 === 0 ? 0 : 2,
  }).format(amount);
}

export function formatNgn(amount: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function siteUrl() {
  if (process.env.APP_URL) return process.env.APP_URL.replace(/\/$/, "");
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "https://labs.gratebridge.com";
}

export function invoicePath(id: string) {
  return `${siteUrl()}/invoice/${id}`;
}

export function parseUsd(value: FormDataEntryValue | null) {
  const amount = Number(String(value ?? "").replace(/[$,\s]/g, ""));
  if (!Number.isFinite(amount) || amount <= 0) return null;
  return Math.round(amount * 100) / 100;
}
