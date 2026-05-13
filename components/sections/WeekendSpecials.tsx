"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { sectionVariants, viewportOnce } from "@/lib/animations";

export function WeekendSpecials() {
  return (
    <section className="border-y border-ans-gold/20 bg-ans-gold/10 py-16 md:py-20">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto max-w-3xl px-6 text-center md:px-12"
      >
        <div className="inline-flex rounded-full bg-ans-gold px-6 py-2 font-sans text-xs font-bold uppercase tracking-widest text-ans-emerald">
          ⏰ Weekends Only
        </div>
        <h2 className="mt-6 font-display text-[40px] text-ans-emerald md:text-[52px]">
          Halwa Poori — every Saturday &amp; Sunday morning.
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-sans text-base leading-8 text-ans-muted">
          Our legendary weekend breakfast special: warm semolina halwa, crispy poori,
          chickpea cholay, and optional qeema. Served 10AM until it runs out — and it
          always runs out.
        </p>
        <div className="mt-8 flex justify-center">
          <span className="rounded-full border border-ans-gold/30 bg-white px-6 py-3 font-sans text-sm font-medium text-ans-emerald">
            Saturdays &amp; Sundays · 10:00 AM – until sold out
          </span>
        </div>
        <Link
          href="#weekend-deals"
          className="group mt-8 inline-flex items-center gap-1 font-sans text-ans-gold transition-colors hover:text-ans-emerald"
        >
          Order Weekend Breakfast
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </motion.div>
    </section>
  );
}
