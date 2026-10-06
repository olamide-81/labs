import type { Metadata } from "next";
import { WorkShowcase } from "@/components/work-showcase";
export const metadata: Metadata = { title: "Work", description: "Paxalpay and Rich Aunty Finance. Products designed and engineered by Gratebridge Labs." };
export default function WorkPage() { return <div className="pt-20"><h1 className="sr-only">Work by Gratebridge Labs</h1><WorkShowcase /></div>; }
