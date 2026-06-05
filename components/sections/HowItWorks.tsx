"use client";

import { motion } from "framer-motion";
import { sectionVariants, viewportOnce } from "@/lib/animations";
import { SITE } from "@/lib/site";
import { HOME_PAGE } from "@/cms/home.page";
import { CMS_ICONS } from "@/cms/cms.icons";

export function HowItWorks() {
  const hiw = HOME_PAGE.howItWorks;

  return (
    <section className="bg-white py-28 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1320px] px-6 md:px-12 lg:px-20">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center"
        >
          <h2 className="font-display text-[40px] text-ans-emerald md:text-[48px]">
            {hiw.headline}
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-4 md:gap-8">
          {hiw.steps.map((s, i) => {
            const Icon = CMS_ICONS[s.iconKey];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                viewport={viewportOnce}
                className="relative rounded-2xl bg-ans-cream p-8"
              >
                <span className="pointer-events-none absolute right-4 top-4 font-display text-[72px] font-bold text-ans-gold/20">
                  {i + 1}
                </span>
                <Icon className="h-7 w-7 text-ans-emerald" aria-hidden />
                <h3 className="mt-4 font-sans text-lg font-semibold text-ans-charcoal">
                  {s.title}
                </h3>
                <p className="mt-2 font-sans text-sm leading-7 text-ans-muted">{s.body}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={SITE.doorDash}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full bg-ans-emerald px-8 py-3 text-center font-sans font-semibold text-white transition-colors hover:bg-ans-emerald-mid sm:w-auto"
          >
            {hiw.doorDashLabel}
          </a>
          <a
            href={SITE.uberEats}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full border-2 border-ans-gold px-8 py-3 text-center font-sans font-semibold text-ans-emerald transition-colors hover:bg-ans-gold/10 sm:w-auto"
          >
            {hiw.uberEatsLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
