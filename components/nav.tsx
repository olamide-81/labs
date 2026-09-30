"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { nav, studio } from "@/lib/site";
import { Mark } from "./mark";

const ease = [0.22, 1, 0.36, 1] as const;

export function Nav() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
          open
            ? "bg-night text-cream"
            : scrolled
              ? "bg-paper/85 text-ink backdrop-blur-xl"
              : "bg-transparent text-ink"
        }`}
      >
        <div className="mx-auto flex h-[4.5rem] max-w-[1440px] items-center justify-between px-6 md:px-10">
          <Link href="/" aria-label={studio.name} className="inline-flex items-center gap-3 text-sm tracking-[-0.02em]">
            <Mark />
            <span className="font-mono text-[11px] uppercase tracking-[0.18em]">Labs</span>
          </Link>
          <div className="flex items-center gap-5 lg:gap-8">
            <nav className="hidden items-center gap-5 lg:flex lg:gap-8" aria-label="Primary">
              {nav.map((item) => {
                const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm tracking-[-0.01em] transition-colors duration-300 ${
                      active ? "" : "text-stone hover:text-current"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <Link
              href="/contact"
              className={`hidden rounded-full px-4 py-2 text-sm transition-transform duration-500 hover:-translate-y-0.5 lg:inline-flex ${
                open ? "bg-cream text-ink" : "bg-ink text-cream"
              }`}
            >
              Start a project
            </Link>
            <button
              type="button"
              className="font-mono text-[11px] uppercase tracking-[0.18em] lg:hidden"
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-30 flex flex-col justify-end bg-night px-6 pb-16 text-cream lg:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease }}
          >
            <nav className="flex flex-col gap-3" aria-label="Mobile">
              {nav.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.08 * index, ease }}
                >
                  <Link href={item.href} className="font-serif text-5xl leading-tight italic">
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 * nav.length, ease }}
              >
                <Link href="/contact" className="mt-6 inline-flex rounded-full bg-cream px-5 py-3 text-sm text-ink">
                  Start a project
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
