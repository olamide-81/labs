"use server";

import { randomBytes } from "crypto";
import { emailProjectNote } from "@/lib/billing/mail";
import { insertNote } from "@/lib/billing/store";
import { offers } from "@/lib/offers";
import { studio } from "@/lib/site";

export type ContactState = { ok?: boolean; error?: string } | null;

function clean(value: FormDataEntryValue | null) {
  return String(value ?? "").trim();
}

function engagementLabel(value: string) {
  return offers.find((offer) => offer.id === value)?.title ?? "Not sure yet";
}

export async function sendProjectNote(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const name = clean(formData.get("name"));
  const email = clean(formData.get("email")).toLowerCase();
  const company = clean(formData.get("company"));
  const engagement = engagementLabel(clean(formData.get("engagement")));
  const message = clean(formData.get("message")).slice(0, 4000);

  if (!name || !email.includes("@") || !message) {
    return { error: "Name, email, and a short note are required." };
  }

  const note = {
    id: randomBytes(12).toString("hex"),
    name,
    email,
    company,
    engagement,
    message,
    createdAt: new Date().toISOString(),
  };

  try {
    await insertNote(note);
  } catch {
    return { error: `The note did not save. Write to ${studio.email}.` };
  }

  const sent = await emailProjectNote(note);
  if (!sent.studio.ok || !sent.client.ok) {
    return { error: `The note is saved, but email did not send. Write to ${studio.email}.` };
  }
  return { ok: true };
}
