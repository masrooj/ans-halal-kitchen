"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { AnimatedLine } from "@/components/ui/AnimatedText";
import { HalalBadge } from "@/components/ui/HalalBadge";
import {
  blurPlaceholder,
  hasMapsVenuePhotosEnabled,
  heroBackgroundSrc,
  heroCollageSrc,
} from "@/lib/images";
import { SITE } from "@/lib/site";
import { HOME_PAGE } from "@/cms/home.page";

/**
 * Pill positions around the hero food image (left ×3, right ×3).
 * Full literals so Tailwind JIT always emits these utilities.
 * Must match `HOME_PAGE.hero.floatCards` length and order.
 */
const HERO_FLOAT_PILL_LAYOUT = [
  "-left-3 top-[6%] md:-left-8",
  "-left-5 top-[40%] md:-left-12",
  "-left-2 bottom-[10%] md:-left-6",
  "-right-3 top-[8%] md:-right-8",
  "-right-5 top-[44%] md:-right-11",
  "-right-2 bottom-[12%] md:-right-6",
] as const;

export function Hero() {
  const { scrollY } = useScroll();
  const yCollage = useTransform(scrollY, [0, 600], [0, -80]);
  const h = HOME_PAGE.hero;

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src={heroBackgroundSrc}
          alt={
            hasMapsVenuePhotosEnabled ? h.imageAltMaps : h.imageAltStock
          }
          fill
          priority
          sizes="100vw"
          className="object-cover"
          placeholder="blur"
          blurDataURL={blurPlaceholder}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ans-emerald/95 via-ans-emerald/70 to-transparent" />
        <div
          className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.04]"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1320px] flex-1 grid-cols-1 items-center gap-10 px-6 py-28 md:grid-cols-5 md:px-12 lg:px-20 lg:py-32">
        <div className="md:col-span-3">
          <HalalBadge size="lg" className="border-green-300/80 bg-green-50/95" />
          <h1 className="mt-6 font-display font-normal">
            <span className="block text-[clamp(56px,8vw,110px)] leading-[0.85]">
              <AnimatedLine
                text={h.headlineLines[0]}
                className="text-ans-gold"
                delayOffset={0}
              />
            </span>
            <span className="mt-1 block text-[clamp(56px,8vw,110px)] leading-[0.85]">
              <AnimatedLine
                text={h.headlineLines[1]}
                className="text-white"
                delayOffset={0.35}
              />
            </span>
            <span className="mt-1 block text-[clamp(56px,8vw,110px)] leading-[0.85]">
              <AnimatedLine
                text={h.headlineLines[2]}
                className="text-white"
                delayOffset={0.7}
              />
            </span>
          </h1>
          <p className="mt-4 font-sans text-sm font-medium text-ans-gold-light/95">
            {h.sublineGold}
          </p>
          <p className="mt-4 max-w-lg font-sans text-[17px] leading-7 text-white/70">
            {h.lead}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={SITE.doorDash}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-ans-gold px-8 py-3.5 font-sans font-semibold text-ans-emerald transition-all hover:scale-[1.02] hover:bg-ans-gold-light"
            >
              {h.ctaOrder}
            </a>
            <a
              href="#menu"
              className="rounded-full border border-white/40 px-8 py-3.5 font-sans font-medium text-white transition-colors hover:bg-white/10"
            >
              {h.ctaMenu}
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4 font-sans text-[13px] text-white/60">
            <span className="font-display text-2xl text-ans-gold md:text-3xl">
              {h.ratingDisplay}
            </span>
            <span>{h.ratingSub}</span>
            <span className="hidden text-white/30 sm:inline">·</span>
            <span className="hidden sm:inline">{h.ratingTagline}</span>
          </div>
        </div>

        <motion.div
          style={{ y: yCollage }}
          className="relative mx-auto flex w-full justify-center md:col-span-2 md:mx-0"
        >
          <div className="relative aspect-[3/4] w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px]">
            <div className="relative h-full w-full overflow-hidden rounded-[28px] shadow-[0_24px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/20">
              <Image
                src={heroCollageSrc}
                alt="Chicken biryani and Pakistani halal specialties"
                fill
                sizes="(max-width:768px) 280px, 320px"
                className="object-cover"
                placeholder="blur"
                blurDataURL={blurPlaceholder}
              />
            </div>

            {h.floatCards.map((c, i) => {
              const layout = HERO_FLOAT_PILL_LAYOUT[i];
              if (!layout) return null;
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.45 + c.delay,
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`absolute z-10 ${layout}`}
                >
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 3.5 + c.delay * 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Link
                      href="#menu"
                      className="flex items-center gap-2 whitespace-nowrap rounded-full bg-white px-3.5 py-2 shadow-[0_4px_18px_rgba(0,0,0,0.14)] transition-transform hover:scale-[1.03] sm:px-4 sm:py-2.5"
                    >
                      <span className="text-lg leading-none sm:text-xl" aria-hidden>
                        {c.emoji}
                      </span>
                      <span className="font-sans text-[13px] font-medium text-ans-charcoal sm:text-sm">
                        {c.title}
                      </span>
                    </Link>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-white/40">
        <span className="font-sans text-[10px] tracking-[0.3em]">
          {h.scrollCue}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5" aria-hidden />
        </motion.div>
      </div>
    </section>
  );
}
