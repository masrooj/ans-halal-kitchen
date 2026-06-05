"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { sectionVariants, viewportOnce } from "@/lib/animations";
import { HOME_PAGE } from "@/cms/home.page";

export function WeekendSpecials() {
  const w = HOME_PAGE.weekendSpecials;

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
          {w.badge}
        </div>
        <h2 className="mt-6 font-display text-[40px] text-ans-emerald md:text-[52px]">
          {w.headline}
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-sans text-base leading-8 text-ans-muted">
          {w.body}
        </p>
        <div className="mt-8 flex justify-center">
          <span className="rounded-full border border-ans-gold/30 bg-white px-6 py-3 font-sans text-sm font-medium text-ans-emerald">
            {w.hoursChip}
          </span>
        </div>
        <Link
          href="#weekend-deals"
          className="group mt-8 inline-flex items-center gap-1 font-sans text-ans-gold transition-colors hover:text-ans-emerald"
        >
          {w.linkLabel}
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </motion.div>
    </section>
  );
}
