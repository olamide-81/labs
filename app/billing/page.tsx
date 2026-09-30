import type { Metadata } from "next";
import { ResumeForm } from "@/components/billing/resume-form";

export const metadata: Metadata = {
  title: "Invoices",
  description: "Get the Gratebridge Labs invoices sent to your email.",
};

export default function BillingPage() {
  return (
    <div className="px-6 pt-36 pb-24 md:px-10">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone">Gratebridge Labs</p>
        <h1 className="mt-4 font-serif text-6xl tracking-[-0.04em]">Find an invoice.</h1>
        <p className="mt-6 max-w-md text-sm leading-6 text-stone">
          Use the email from checkout. We send the links. Nothing is listed on this page.
        </p>
        <ResumeForm />
      </div>
    </div>
  );
}
