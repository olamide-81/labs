"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { industries } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const lines = ["We build the products", "companies run on."];

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end px-6 pt-28 pb-8 md:px-10">
      <div className="mx-auto grid w-full max-w-[1440px] flex-1 items-end gap-12 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <motion.p
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-stone"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            Product & engineering agency
          </motion.p>
          <h1 className="mt-6 font-serif text-[clamp(3.3rem,8.2vw,8.1rem)] leading-[0.9] tracking-[-0.04em]">
            {lines.map((line, index) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className={`block ${index === 1 ? "italic" : ""}`}
                  initial={reduce ? false : { y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1, delay: 0.12 + index * 0.08, ease }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
        </div>
        <motion.div
          className="flex flex-col justify-end gap-8 lg:col-span-4 lg:pb-3"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease }}
        >
          <p className="max-w-sm text-[15px] leading-7 text-stone">
            Gratebridge is the product and engineering practice of Gratebridge Labs.
            We design and build software for operators in finance, health, energy,
            commerce, mobility, and media.
          </p>
          <Link
            href="/work"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-ink px-5 py-3 text-sm text-cream transition-transform duration-500 hover:-translate-y-0.5"
          >
            Selected work
            <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>
      <div className="mx-auto mt-14 w-full max-w-[1440px] overflow-hidden border-t border-line pt-5">
        <div className="marquee-track flex w-max items-center">
          {[...industries, ...industries].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="px-6 font-mono text-[11px] uppercase tracking-[0.2em] text-stone"
            >
              {item}
              <span className="ml-6 text-ink/30">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
