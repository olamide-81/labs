"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { industries } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const lines = ["We design and engineer", "the products companies", "put in market."];

  return (
    <section className="relative flex min-h-[70svh] flex-col bg-paper text-ink md:min-h-[78svh]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-end px-6 pt-32 pb-10 md:px-10">
        <h1 className="max-w-5xl font-serif text-[clamp(2.8rem,6.2vw,5.6rem)] leading-[0.94] tracking-[-0.045em]">
          {lines.map((line, index) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={reduce ? false : { y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, delay: 0.06 + index * 0.08, ease }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.div
          className="mt-10"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease }}
        >
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-ink px-5 py-3 text-sm text-cream transition-transform duration-500 hover:-translate-y-0.5"
          >
            Book a call
          </Link>
        </motion.div>
      </div>
      <div className="mx-auto flex w-full max-w-[1440px] flex-wrap gap-x-5 gap-y-2 border-t border-line px-6 py-4 md:px-10">
        {industries.map((industry) => (
          <span key={industry} className="font-mono text-[11px] uppercase tracking-[0.16em] text-stone">
            {industry}
          </span>
        ))}
      </div>
    </section>
  );
}
