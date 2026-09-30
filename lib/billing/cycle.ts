import { emailInvoiceOpened, emailReminder } from "@/lib/billing/mail";
import { openInvoice } from "@/lib/billing/issue";
import { dueForReminder, retainersToRenew, saveInvoice } from "@/lib/billing/store";

export async function runBillingCycle() {
  const reminded: string[] = [];
  const renewed: string[] = [];

  for (const invoice of await dueForReminder()) {
    await emailReminder(invoice);
    await saveInvoice(
      invoice.id,
      { lastReminderAt: new Date().toISOString() },
      { at: new Date().toISOString(), type: "reminded", note: "Payment reminder sent." },
    );
    reminded.push(invoice.number);
  }

  for (const invoice of await retainersToRenew()) {
    await saveInvoice(invoice.id, { renewed: true });
    const next = await openInvoice({
      offerId: invoice.offerId,
      name: invoice.name,
      email: invoice.email,
      company: invoice.company,
      amountUsd: invoice.amountUsd,
      status: "awaiting_payment",
      parentId: invoice.id,
      cycle: invoice.cycle + 1,
    });
    await emailInvoiceOpened(next);
    renewed.push(next.number);
  }

  return { reminded, renewed };
}
