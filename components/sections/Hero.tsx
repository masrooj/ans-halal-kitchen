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

const floatCards = [
  {
    emoji: "🍛",
    title: "Chicken Biryani",
    tag: "Best Seller",
    className: "top-[6%] left-[4%] -rotate-3",
    delay: 0,
  },
  {
    emoji: "🥩",
    title: "Beef Nihari",
    tag: "Karachi Recipe",
    className: "top-[8%] right-[6%] rotate-2",
    delay: 0.15,
  },
  {
    emoji: "🌯",
    title: "Bihari Kabab Roll",
    tag: "Fan Favorite",
    className: "top-[38%] left-[2%] -rotate-1",
    delay: 0.3,
  },
  {
    emoji: "🍗",
    title: "Halwa Poori",
    tag: "Weekends Only",
    className: "bottom-[18%] right-[4%] rotate-3",
    delay: 0.45,
  },
  {
    emoji: "🔥",
    title: "Hot Wings",
    tag: "6pc $13.95",
    className: "bottom-[10%] left-[8%] -rotate-2",
    delay: 0.6,
  },
];

export function Hero() {
  const { scrollY } = useScroll();
  const yCollage = useTransform(scrollY, [0, 600], [0, -80]);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src={heroBackgroundSrc}
          alt={
            hasMapsVenuePhotosEnabled
              ? "A&N's Halal Kitchen — venue photo from the Google Maps listing"
              : "Aromatic Pakistani biryani bowl — golden rice and spices"
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
                text="Taste of"
                className="text-ans-gold"
                delayOffset={0}
              />
            </span>
            <span className="mt-1 block text-[clamp(56px,8vw,110px)] leading-[0.85]">
              <AnimatedLine
                text="Karachi,"
                className="text-white"
                delayOffset={0.35}
              />
            </span>
            <span className="mt-1 block text-[clamp(56px,8vw,110px)] leading-[0.85]">
              <AnimatedLine
                text="In Sugar Land."
                className="text-white"
                delayOffset={0.7}
              />
            </span>
          </h1>
          <p className="mt-4 font-sans text-sm font-medium text-ans-gold-light/95">
            We only serve Zabiha Handcut Halal Food
          </p>
          <p className="mt-4 max-w-lg font-sans text-[17px] leading-7 text-white/70">
            Authentic Zabiha Halal Pakistani cuisine — from our family kitchen to
            your table. Biryani, Nihari, Kabab Rolls &amp; more, crafted from
            Karachi recipes.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={SITE.doorDash}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-ans-gold px-8 py-3.5 font-sans font-semibold text-ans-emerald transition-all hover:scale-[1.02] hover:bg-ans-gold-light"
            >
              Order Online
            </a>
            <a
              href="#menu"
              className="rounded-full border border-white/40 px-8 py-3.5 font-sans font-medium text-white transition-colors hover:bg-white/10"
            >
              View Full Menu →
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4 font-sans text-[13px] text-white/60">
            <span className="font-display text-2xl text-ans-gold md:text-3xl">
              ⭐ 4.9
            </span>
            <span>Google · 1,146+ verified reviews</span>
            <span className="hidden text-white/30 sm:inline">·</span>
            <span className="hidden sm:inline">
              Sugar Land&apos;s #1 Halal Kitchen
            </span>
          </div>
        </div>

        <motion.div
          style={{ y: yCollage }}
          className="relative hidden min-h-[420px] md:col-span-2 md:block"
        >
          {floatCards.map((c) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5 + c.delay,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`absolute w-[220px] rounded-2xl bg-white/95 p-3 shadow-xl backdrop-blur ${c.className}`}
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
          ))}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-white/40">
        <span className="font-sans text-[10px] tracking-[0.3em]">SCROLL</span>
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
