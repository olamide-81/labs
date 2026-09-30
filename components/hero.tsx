"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { industries, studio } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const lines = ["We build the products", "companies run on."];

  return (
    <section className="relative flex min-h-[70svh] flex-col overflow-hidden bg-paper text-ink md:min-h-[78svh]">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] lg:block">
        <Image
          src="/hero-corporate.jpg"
          alt=""
          fill
          priority
          sizes="46vw"
          className="object-cover object-[72%_center]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #f3f0e8 0%, rgb(243 240 232 / 0.78) 14%, rgb(243 240 232 / 0) 42%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-20"
          style={{ background: "linear-gradient(transparent, #f3f0e8)" }}
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] flex-1 items-center px-6 pt-28 pb-8 md:px-10 lg:grid-cols-12">
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
      </div>

      <div className="relative z-10 -mt-2 h-80 px-6 lg:hidden">
        <Image
          src="/hero-corporate.jpg"
          alt="People walking into a pale stone office building."
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_30%]"
        />
        <div
          className="absolute inset-x-0 top-0 h-28"
          style={{ background: "linear-gradient(#f3f0e8, rgb(243 240 232 / 0))" }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-16"
          style={{ background: "linear-gradient(transparent, #f3f0e8)" }}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-wrap gap-x-5 gap-y-2 border-t border-line px-6 py-4 md:px-10">
        {industries.map((industry) => (
          <span key={industry} className="font-mono text-[11px] uppercase tracking-[0.16em] text-stone">
            {industry}
          </span>
        ))}
      </div>
    </section>
  );
}
