"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { industries, studio } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

function ringTicks(count: number, outer: number, inner: number) {
  return Array.from({ length: count }, (_, index) => {
    const angle = -Math.PI / 2 + (Math.PI * 2 * index) / count;
    const x1 = 260 + Math.cos(angle) * outer;
    const y1 = 260 + Math.sin(angle) * outer;
    const x2 = 260 + Math.cos(angle) * inner;
    const y2 = 260 + Math.sin(angle) * inner;
    return `M${x1.toFixed(1)} ${y1.toFixed(1)}L${x2.toFixed(1)} ${y2.toFixed(1)}`;
  }).join("");
}

function HeroMark({ reduce }: { reduce: boolean }) {
  return (
    <svg viewBox="0 0 520 520" className="h-full w-full text-ink" fill="none" aria-hidden>
      <circle cx="260" cy="260" r="168" fill="rgb(226 74 18 / 0.1)" />
      <circle cx="260" cy="260" r="214" stroke="currentColor" strokeWidth="1" opacity="0.22" />
      <path d={ringTicks(12, 214, 198)} stroke="currentColor" strokeWidth="1.15" />
      <path d="M52 70V52h18M468 52v18h-18M52 450v18h18M468 468v-18h-18" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="260" cy="260" r="188" stroke="currentColor" strokeWidth="1.2" />
      <circle
        cx="260"
        cy="260"
        r="188"
        stroke="#e24a12"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="280 902"
        transform="rotate(-36 260 260)"
      />
      <g>
        {!reduce ? (
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 260 260"
            to="360 260 260"
            dur="32s"
            repeatCount="indefinite"
          />
        ) : null}
        <circle cx="260" cy="72" r="13" stroke="#e24a12" strokeWidth="1" opacity="0.4" />
        <circle cx="260" cy="72" r="6" fill="#e24a12" />
      </g>
      <g>
        {!reduce ? (
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="360 260 260"
            to="0 260 260"
            dur="46s"
            repeatCount="indefinite"
          />
        ) : null}
        <circle cx="380" cy="260" r="4" fill="currentColor" />
      </g>
      <path
        d="M188 248 L248 188 L332 214 L312 292 L236 324 Z"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinejoin="round"
      />
      <path d="M248 188 L312 292" stroke="#e24a12" strokeWidth="1.6" />
      <circle cx="188" cy="248" r="5" fill="currentColor" />
      <circle cx="248" cy="188" r="5" fill="currentColor" />
      <circle cx="332" cy="214" r="5" fill="currentColor" />
      <circle cx="312" cy="292" r="6" fill="#e24a12" />
      <circle cx="236" cy="324" r="5" fill="currentColor" />
    </svg>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const lines = ["We build the products", "companies run on."];

  return (
    <section className="relative flex min-h-[70svh] flex-col overflow-hidden bg-paper text-ink md:min-h-[78svh]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 82% 42%, rgb(226 74 18 / 0.14), transparent 62%)",
        }}
      />
      <div className="relative mx-auto grid w-full max-w-[1440px] flex-1 items-center gap-8 px-6 pt-28 pb-10 md:px-10 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <motion.p
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-stone"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            Labs · technology agency
          </motion.p>
          <h1 className="mt-5 max-w-3xl font-serif text-[clamp(3.2rem,7vw,6.6rem)] leading-[0.9] tracking-[-0.045em]">
            {lines.map((line, index) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className={`block ${index === 1 ? "italic" : ""}`}
                  initial={reduce ? false : { y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1, delay: 0.08 + index * 0.1, ease }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.div
            className="mt-8 max-w-md"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.32, ease }}
          >
            <p className="text-[15px] leading-7 text-stone">
              Software, websites, and a team that stays. You own the work.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/pricing"
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-5 py-3 text-sm text-cream transition-transform duration-500 hover:-translate-y-0.5"
              >
                Start a project
                <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
              </Link>
              <a
                href={studio.calendly}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-ink/15 px-5 py-3 text-sm transition-colors duration-300 hover:border-ink"
              >
                Book a session
              </a>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="h-52 sm:h-64 lg:col-span-5 lg:h-[26rem]"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease }}
        >
          <HeroMark reduce={reduce === true} />
        </motion.div>
      </div>
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-wrap gap-x-5 gap-y-2 border-t border-line px-6 py-4 md:px-10">
        {industries.map((industry) => (
          <span key={industry} className="font-mono text-[11px] uppercase tracking-[0.16em] text-stone">
            {industry}
          </span>
        ))}
      </div>
    </section>
  );
}
