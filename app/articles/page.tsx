import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles",
  description: "Writing from Gratebridge Labs.",
};

export default function ArticlesPage() {
  return (
    <div className="px-6 pt-32 pb-24 md:px-10 md:pt-40">
      <div className="mx-auto max-w-[1440px]">
        <h1 className="max-w-5xl font-serif text-[clamp(3.2rem,7vw,6.6rem)] leading-[0.92] tracking-[-0.04em]">
          Articles
        </h1>
      </div>
    </div>
  );
}
