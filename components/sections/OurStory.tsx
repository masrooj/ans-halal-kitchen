"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  blurPlaceholder,
  hasMapsVenuePhotosEnabled,
  ourStoryInsetSrc,
  ourStoryMainSrc,
} from "@/lib/images";
import { SITE } from "@/lib/site";
import { sectionVariants, viewportOnce } from "@/lib/animations";
import { HOME_PAGE } from "@/cms/home.page";

export function OurStory() {
  const s = HOME_PAGE.story;

  return (
    <section id="story" className="bg-white py-24 md:py-32 lg:py-40">
      <div className="mx-auto grid max-w-[1320px] gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-12 lg:px-20">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col justify-center"
        >
          <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-ans-gold">
            {s.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-[40px] leading-tight text-ans-emerald md:text-[52px]">
            {s.headline}
          </h2>
          <div className="mt-6 space-y-6 font-sans text-base leading-8 text-ans-muted">
            {s.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 md:gap-8">
            {s.stats.map((st) => (
              <div key={st.l}>
                <p className="font-display text-4xl text-ans-emerald md:text-[52px]">
                  {st.n}
                </p>
                <p className="mt-1 font-sans text-[13px] text-ans-muted">{st.l}</p>
              </div>
            ))}
          </div>
          <Link
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex font-sans text-sm text-ans-gold transition-colors hover:text-ans-emerald"
          >
            {s.followCta}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={viewportOnce}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src={ourStoryMainSrc}
              alt={
                hasMapsVenuePhotosEnabled ? s.mainAltMaps : s.mainAltStock
              }
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              placeholder="blur"
              blurDataURL={blurPlaceholder}
            />
          </div>
          <div className="absolute -bottom-6 -left-4 h-40 w-40 overflow-hidden rounded-2xl border-4 border-white shadow-lg md:h-48 md:w-48 md:-left-8">
            <Image
              src={ourStoryInsetSrc}
              alt={
                hasMapsVenuePhotosEnabled ? s.insetAltMaps : s.insetAltStock
              }
              fill
              className="object-cover"
              sizes="200px"
              placeholder="blur"
              blurDataURL={blurPlaceholder}
            />
          </div>
          <div className="absolute -right-4 -top-4 rounded-xl bg-ans-gold px-4 py-2 font-display text-lg italic text-white shadow-lg">
            {s.badgeFloating}
          </div>
        </motion.div>
      </div>

      <div className="mx-auto mt-16 max-w-[1320px] bg-ans-cream-dark px-6 py-6 md:mt-20 md:px-12 lg:px-20">
        <div className="flex flex-col flex-wrap items-center justify-center gap-4 font-sans text-sm text-ans-emerald md:flex-row md:gap-8">
          {s.ribbon.map((line) => (
            <span key={line} className="rounded-full bg-white/80 px-4 py-2">
              {line}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
