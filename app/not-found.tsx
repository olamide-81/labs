import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[80svh] flex-col justify-end px-6 pt-32 pb-20 md:px-10">
      <div className="mx-auto w-full max-w-[1440px]">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-stone">404</p>
        <h1 className="mt-4 font-serif text-[clamp(3rem,7vw,6rem)] leading-[0.92] tracking-[-0.04em]">
          This page is not
          <span className="italic"> on the bridge.</span>
        </h1>
        <Link href="/" className="mt-10 inline-flex items-center gap-3 text-sm">
          Back to the studio <span>→</span>
        </Link>
      </div>
    </div>
  );
}
