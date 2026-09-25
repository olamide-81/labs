"use client";

import { FormEvent, useState } from "react";
import { studio } from "@/lib/site";

type Fields = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const empty: Fields = { name: "", email: "", company: "", message: "" };

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function update(key: keyof Fields, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!fields.name.trim() || !fields.email.trim() || !fields.message.trim()) {
      setError("Name, email, and a short note are required.");
      return;
    }
    if (!fields.email.includes("@")) {
      setError("Enter a valid email so we can reply.");
      return;
    }
    setError("");
    const body = [`Name: ${fields.name}`, `Email: ${fields.email}`, `Company: ${fields.company || "—"}`, "", fields.message].join("\n");
    window.location.href = `mailto:${studio.email}?subject=${encodeURIComponent(`New project — ${fields.name}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border-t border-line pt-10">
        <p className="font-serif text-4xl leading-tight tracking-[-0.03em] italic">
          Your note is ready in your mail app.
        </p>
        <p className="mt-4 max-w-md text-sm leading-6 text-stone">
          If it did not open, write to {studio.email} and mention {fields.company || fields.name}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="border-t border-line" noValidate>
      <Field label="Name" value={fields.name} onChange={(value) => update("name", value)} />
      <Field label="Email" type="email" value={fields.email} onChange={(value) => update("email", value)} />
      <Field label="Company" value={fields.company} onChange={(value) => update("company", value)} />
      <label className="block border-b border-line py-6">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone">About the work</span>
        <textarea
          value={fields.message}
          onChange={(event) => update("message", event.target.value)}
          rows={5}
          className="mt-3 w-full resize-none bg-transparent text-lg tracking-[-0.02em] outline-none"
        />
      </label>
      {error ? <p className="pt-4 text-sm text-signal">{error}</p> : null}
      <button
        type="submit"
        className="mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-5 py-3 text-sm text-cream transition-transform duration-500 hover:-translate-y-0.5"
      >
        Send the note
        <span>→</span>
      </button>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <label className="block border-b border-line py-6">
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-3 w-full bg-transparent text-lg tracking-[-0.02em] outline-none"
      />
    </label>
  );
}
