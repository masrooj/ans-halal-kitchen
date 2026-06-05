"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { sectionVariants, viewportOnce } from "@/lib/animations";
import { HOME_PAGE } from "@/cms/home.page";
import { CMS_ICONS } from "@/cms/cms.icons";

export function HalalCommitment() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yLeft = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const yRight = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const hc = HOME_PAGE.halalCommitment;

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-ans-emerald py-24 text-white md:py-32 lg:py-40"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/pattern-islamic.svg')] opacity-[0.04]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-[1320px] gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-12 lg:px-20">
        <motion.div
          style={{ y: yLeft }}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p className="font-sans text-xs font-medium uppercase tracking-widest text-ans-gold/60">
            {hc.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-[40px] italic leading-tight text-white md:text-[52px]">
            {hc.headline}
          </h2>
          <p className="mt-6 max-w-lg font-sans text-[17px] leading-8 text-white/65">
            {hc.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {hc.pills.map((p) => (
              <span
                key={p}
                className="rounded-full border border-white/20 bg-white/10 px-5 py-2 font-sans text-[13px] text-white"
              >
                {p}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          style={{ y: yRight }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {hc.cards.map((c) => {
            const Icon = CMS_ICONS[c.iconKey];
            return (
              <div
                key={c.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <Icon className="h-6 w-6 text-ans-gold" aria-hidden />
                <h3 className="mt-3 font-sans text-base font-semibold text-white">
                  {c.title}
                </h3>
                <p className="mt-2 font-sans text-sm leading-6 text-white/55">
                  {c.body}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
