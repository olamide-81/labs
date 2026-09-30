import { runBillingCycle } from "@/lib/billing/cycle";

export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  const header = request.headers.get("authorization");
  if (!secret || header !== `Bearer ${secret}`) {
    return Response.json({ ok: false }, { status: 401 });
  }
  const result = await runBillingCycle();
  return Response.json({ ok: true, ...result });
}
