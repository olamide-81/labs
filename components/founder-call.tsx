import Link from "next/link";

export function FounderCall() {
  return (
    <section className="px-6 pb-20 md:px-10 md:pb-28" aria-labelledby="founder-call-title">
      <div className="founder-call relative mx-auto grid max-w-[1440px] overflow-hidden rounded-[1.6rem] bg-night text-cream lg:grid-cols-[1.2fr_1fr]">
        <div className="relative z-10 px-7 py-12 md:px-14 md:py-16">
          <p className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-cream/65"><span className="h-2 w-2 rounded-full bg-[#f1a47e]" /> A conversation, then a direction</p>
          <h2 id="founder-call-title" className="mt-8 max-w-xl font-serif text-[clamp(3rem,5.5vw,5.4rem)] leading-[0.95] tracking-[-0.04em]">Your next chapter.<br /><span className="italic text-[#f1a47e]">Let’s talk it through.</span></h2>
          <p className="mt-6 max-w-md text-base leading-7 text-cream/65">Thirty minutes with our founder. Bring an idea, a stuck project, or a question about what comes next.</p>
          <Link href="/contact?source=homepage-founder-call" className="group mt-8 inline-flex items-center gap-8 rounded-full bg-cream px-6 py-4 text-sm font-medium text-ink transition-colors hover:bg-[#f1a47e]">Book a 30-minute call <span aria-hidden="true" className="text-lg transition-transform group-hover:translate-x-1 motion-reduce:transform-none">↗</span></Link>
          <p className="mt-4 text-xs text-cream/50">No presentation needed. Just tell us where you are.</p>
        </div>
        <div className="relative flex min-h-[320px] flex-col items-center justify-center overflow-hidden border-t border-cream/10 px-7 py-10 lg:border-l lg:border-t-0" aria-hidden="true">
          <div className="call-orbit absolute h-[420px] w-[420px] rounded-full border border-[#f1a47e]/15"><span className="absolute left-1/2 top-[-5px] h-2.5 w-2.5 rounded-full bg-[#f1a47e]" /></div>
          <div className="call-dial relative flex h-60 w-60 items-center justify-center rounded-full border border-[#f1a47e]/40 bg-[#1e211b] shadow-[0_0_100px_#e24a1214] md:h-72 md:w-72">
            <div className="absolute inset-3 rounded-full border border-dashed border-[#f1a47e]/20" />
            <div className="relative z-10 text-center"><span className="font-serif text-[100px] leading-none tracking-[-0.07em] text-[#f1a47e]">30</span><span className="mt-2 block font-mono text-[10px] uppercase tracking-[0.3em] text-cream/60">Minutes</span></div>
            <span className="call-hand absolute bottom-1/2 left-1/2 h-[43%] w-px origin-bottom bg-[#f1a47e]/40" />
          </div>
          <div className="relative mt-9 flex gap-5 font-mono text-[10px] uppercase tracking-[0.15em] text-cream/60"><span>Your idea</span><span className="text-[#f1a47e]">↗</span><span>Our perspective</span></div>
        </div>
      </div>
    </section>
  );
}
