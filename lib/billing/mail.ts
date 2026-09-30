import nodemailer from "nodemailer";
import { formatNgn, formatUsd, invoicePath } from "@/lib/billing/money";
import type { Invoice } from "@/lib/billing/types";

function shell(title: string, body: string) {
  return `<!doctype html><html><body style="margin:0;background:#f3f0e8;color:#12110f;font-family:Georgia,'Times New Roman',serif">
    <div style="max-width:560px;margin:0 auto;padding:40px 24px">
      <p style="margin:0;font-family:ui-monospace,monospace;font-size:11px;letter-spacing:0.2em;text-transform:uppercase">Gratebridge Labs</p>
      <h1 style="font-weight:400;font-size:34px;line-height:1;margin:16px 0 24px">${title}</h1>
      <div style="font-family:ui-sans-serif,system-ui,sans-serif;font-size:15px;line-height:1.6">${body}</div>
    </div>
  </body></html>`;
}

async function send(to: string, subject: string, html: string, replyTo?: string) {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  if (host && user && pass) {
    try {
      const port = Number(process.env.SMTP_PORT || 465);
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure: process.env.SMTP_SECURE === "false" ? false : port === 465,
        auth: { user, pass },
      });
      const info = await transporter.sendMail({
        from: process.env.SMTP_FROM || `"Gratebridge Labs" <${user}>`,
        to,
        subject,
        html,
        replyTo: replyTo || "hello@labs.gratebridge.com",
      });
      return { ok: true as const, messageId: info.messageId };
    } catch (error) {
      const message = error instanceof Error ? error.message : "Send failed";
      console.error("Labs mail failed:", message);
      return { ok: false as const, error: message };
    }
  }

  const base = process.env.COMPLIANCE_API_URL?.replace(/\/$/, "");
  const secret = process.env.LABS_MAIL_SECRET;
  if (!base || !secret) return { ok: false as const, error: "Email is not configured" };
  try {
    const response = await fetch(`${base}/api/email/labs`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-labs-mail-secret": secret,
      },
      body: JSON.stringify({
        to,
        subject,
        html,
        replyTo: replyTo || "hello@labs.gratebridge.com",
      }),
    });
    const body = (await response.json().catch(() => null)) as { success?: boolean; message?: string; messageId?: string } | null;
    if (!response.ok || body?.success === false) {
      const message = body?.message || "Send failed";
      console.error("Labs mail failed:", message);
      return { ok: false as const, error: message };
    }
    return { ok: true as const, messageId: body?.messageId };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Send failed";
    console.error("Labs mail failed:", message);
    return { ok: false as const, error: message };
  }
}

function moneyLine(invoice: Invoice) {
  const ngn = invoice.chargeNgn ? ` · charged ${formatNgn(invoice.chargeNgn)}` : "";
  return `${formatUsd(invoice.amountUsd)}${invoice.cadence === "month" ? " / month" : ""}${ngn}`;
}

export async function emailInvoiceOpened(invoice: Invoice) {
  const link = invoicePath(invoice.id);
  const client = send(
    invoice.email,
    `${invoice.number} — Gratebridge Labs`,
    shell(
      invoice.number,
      `<p>${invoice.title} for ${invoice.name}.</p>
       <p><strong>${moneyLine(invoice)}</strong></p>
       <p>This link is your invoice. Come back to it any time.</p>
       <p><a href="${link}">${link}</a></p>`,
    ),
  );
  const studioTo = process.env.STUDIO_NOTIFY_EMAIL;
  const studio = studioTo
    ? send(
        studioTo,
        `New invoice ${invoice.number}`,
        shell(
          invoice.number,
          `<p>${invoice.name} · ${invoice.email}${invoice.company ? ` · ${invoice.company}` : ""}</p>
           <p>${invoice.title} — ${moneyLine(invoice)}</p>
           <p>Status: ${invoice.status}</p>
           ${invoice.proposalNote ? `<p>${invoice.proposalNote}</p>` : ""}
           <p><a href="${link}">Client invoice</a></p>
           <p><a href="${process.env.ADMIN_LABS_URL || "https://labs.gratebridge.com/billing/desk"}">Open Labs in the compliance admin</a></p>`,
        ),
      )
    : Promise.resolve({ ok: true as const });
  const [left, right] = await Promise.allSettled([client, studio]);
  return { client: left.status === "fulfilled" ? left.value : { ok: false as const }, studio: right.status === "fulfilled" };
}

export async function emailReceipt(invoice: Invoice) {
  const link = `${invoicePath(invoice.id)}/receipt`;
  return send(
    invoice.email,
    `Receipt ${invoice.receiptNumber} — Gratebridge Labs`,
    shell(
      "Paid",
      `<p>${invoice.receiptNumber} for ${invoice.number}.</p>
       <p><strong>${moneyLine(invoice)}</strong></p>
       <p><a href="${link}">View the receipt</a></p>`,
    ),
  );
}

export async function emailReminder(invoice: Invoice) {
  return send(
    invoice.email,
    `Due — ${invoice.number}`,
    shell(
      invoice.number,
      `<p>${invoice.title} is waiting on payment.</p>
       <p><strong>${moneyLine(invoice)}</strong></p>
       <p><a href="${invoicePath(invoice.id)}">Open the invoice</a></p>`,
    ),
  );
}

export async function emailProjectNote(note: {
  name: string;
  email: string;
  company: string;
  engagement: string;
  message: string;
}) {
  const studioTo = process.env.STUDIO_NOTIFY_EMAIL || "hello@labs.gratebridge.com";
  const studio = await send(
    studioTo,
    `New project note — ${note.name}`,
    shell(
      "New project note",
      `<p>${note.name} · ${note.email}${note.company ? ` · ${note.company}` : ""}</p>
       <p>Engagement: ${note.engagement}</p>
       <p>${note.message
         .replaceAll("&", "&amp;")
         .replaceAll("<", "&lt;")
         .replaceAll(">", "&gt;")
         .replaceAll("\n", "<br>")}</p>`,
    ),
    note.email,
  );
  const client = await send(
    note.email,
    "We have your note — Gratebridge Labs",
    shell(
      "We have the note.",
      `<p>${note.name}, this confirms the note reached Gratebridge Labs.</p>
       <p>Engagement: ${note.engagement}</p>
       <p>We reply with a clear next step — questions, or a written scope.</p>`,
    ),
    studioTo,
  );
  return { studio, client };
}

export async function emailResume(email: string, invoices: Invoice[]) {
  const items = invoices
    .map((invoice) => `<li><a href="${invoicePath(invoice.id)}">${invoice.number}</a> — ${invoice.title} — ${invoice.status.replaceAll("_", " ")}</li>`)
    .join("");
  return send(email, "Your Gratebridge Labs invoices", shell("Your invoices", `<ul>${items}</ul>`));
}
