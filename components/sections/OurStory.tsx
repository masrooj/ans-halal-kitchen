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

export function OurStory() {
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
            Our Story
          </p>
          <h2 className="mt-4 font-display text-[40px] leading-tight text-ans-emerald md:text-[52px]">
            A little piece of Karachi, right here in Sugar Land.
          </h2>
          <div className="mt-6 space-y-6 font-sans text-base leading-8 text-ans-muted">
            <p>
              A&amp;N&apos;s Halal Kitchen was born from a simple belief — that the
              bold, soulful flavors of Karachi&apos;s street food culture deserved a
              home in Texas. Our recipes aren&apos;t created; they&apos;re inherited.
              Passed down through family kitchens, tested in the streets of Pakistan,
              and brought to your table with love.
            </p>
            <p>
              Every dish we serve is Zabiha Halal — hand cut, never frozen, and made
              fresh daily. From our slow-cooked Nihari to our smoky Bihari Kabab
              Rolls, you&apos;ll taste the difference that real ingredients and real
              technique make.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 md:gap-8">
            {[
              { n: "4.9★", l: "Google Rating" },
              { n: "1,146+", l: "Happy Reviews" },
              { n: "100%", l: "Zabiha Halal" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display text-4xl text-ans-emerald md:text-[52px]">
                  {s.n}
                </p>
                <p className="mt-1 font-sans text-[13px] text-ans-muted">{s.l}</p>
              </div>
            ))}
          </div>
          <Link
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex font-sans text-sm text-ans-gold transition-colors hover:text-ans-emerald"
          >
            Follow us @theanshalalkitchen →
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
                hasMapsVenuePhotosEnabled
                  ? "Inside A&N's Halal Kitchen — Google Maps contributor photo"
                  : "Chef preparing Pakistani cuisine in the kitchen"
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
                hasMapsVenuePhotosEnabled
                  ? "A&N's Halal Kitchen dish — venue photo via Google Maps"
                  : "Halwa poori breakfast spread"
              }
              fill
              className="object-cover"
              sizes="200px"
              placeholder="blur"
              blurDataURL={blurPlaceholder}
            />
          </div>
          <div className="absolute -right-4 -top-4 rounded-xl bg-ans-gold px-4 py-2 font-display text-lg italic text-white shadow-lg">
            Est. in Sugar Land
          </div>
        </motion.div>
      </div>

      <div className="mx-auto mt-16 max-w-[1320px] bg-ans-cream-dark px-6 py-6 md:mt-20 md:px-12 lg:px-20">
        <div className="flex flex-col flex-wrap items-center justify-center gap-4 font-sans text-sm text-ans-emerald md:flex-row md:gap-8">
          <span className="rounded-full bg-white/80 px-4 py-2">
            🏆 #1 Halal Kitchen · Sugar Land
          </span>
          <span className="rounded-full bg-white/80 px-4 py-2">
            📍 12925 W Bellfort Blvd
          </span>
          <span className="rounded-full bg-white/80 px-4 py-2">
            ⏰ Open 7 Days
          </span>
        </div>
      </div>
    </section>
  );
}
