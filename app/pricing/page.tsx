import type { Metadata } from "next";
import { PricingBoard } from "@/components/pricing-board";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Software, websites, and a management retainer. Scoped in writing.",
};

export default function PricingPage() {
  return <PricingBoard />;
}
