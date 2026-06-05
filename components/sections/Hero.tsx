"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { AnimatedLine } from "@/components/ui/AnimatedText";
import { HalalBadge } from "@/components/ui/HalalBadge";
import {
  blurPlaceholder,
  hasMapsVenuePhotosEnabled,
  heroBackgroundSrc,
} from "@/lib/images";
import { SITE } from "@/lib/site";
import { HOME_PAGE } from "@/cms/home.page";

/**
 * Original scatter layout (same as first hero). Full literals so Tailwind JIT
 * always emits these utilities — do not build positioning from runtime strings.
 * Must match `HOME_PAGE.hero.floatCards` length and order.
 */
const HERO_FLOAT_CARD_LAYOUT = [
  "top-[6%] left-[4%] -rotate-3",
  "top-[8%] right-[6%] rotate-2",
  "top-[38%] left-[2%] -rotate-1",
  "bottom-[18%] right-[4%] rotate-3",
  "bottom-[10%] left-[8%] -rotate-2",
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
          className="relative hidden min-h-[420px] md:col-span-2 md:block"
        >
          {h.floatCards.map((c, i) => {
            const layout = HERO_FLOAT_CARD_LAYOUT[i];
            if (!layout) return null;
            return (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5 + c.delay,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`absolute w-[220px] rounded-2xl bg-white/95 p-3 shadow-xl backdrop-blur ${layout}`}
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4 + c.delay * 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex items-center gap-2"
              >
                <span className="text-2xl" aria-hidden>
                  {c.emoji}
                </span>
                <div>
                  <p className="font-sans text-[13px] font-semibold text-ans-emerald">
                    {c.title}
                  </p>
                  <p className="font-sans text-[11px] text-ans-muted">{c.tag}</p>
                </div>
              </motion.div>
            </motion.div>
            );
          })}
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
