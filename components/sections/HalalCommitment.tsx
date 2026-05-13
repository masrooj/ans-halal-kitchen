"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf, ShieldCheck, Star, Users } from "lucide-react";
import { useRef } from "react";
import { sectionVariants, viewportOnce } from "@/lib/animations";

const cards = [
  {
    icon: ShieldCheck,
    title: "Zabiha Certified",
    body: "Every meat purchase verified from certified halal slaughterhouses.",
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    body: `Sourced fresh daily. We refuse to serve what we wouldn't eat ourselves.`,
  },
  {
    icon: Users,
    title: "Family Owned",
    body: `A&N's is operated by a Pakistani family who grew up on these recipes.`,
  },
  {
    icon: Star,
    title: "4.9 Google Rating",
    body: "Rated by over 1,146 customers across Sugar Land and greater Houston.",
  },
];

const pills = [
  "✓ Hand Cut Zabiha",
  "✓ No Pork · No Alcohol",
  "✓ Fresh Never Frozen",
];

export function HalalCommitment() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yLeft = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const yRight = useTransform(scrollYProgress, [0, 1], [0, 40]);

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
            Our Commitment
          </p>
          <h2 className="mt-4 font-display text-[40px] italic leading-tight text-white md:text-[52px]">
            100% Zabiha Halal. No exceptions. No compromises.
          </h2>
          <p className="mt-6 max-w-lg font-sans text-[17px] leading-8 text-white/65">
            Every protein we serve is hand-cut Zabiha Halal. We never source from
            non-halal suppliers, never use alcohol-based marinades, and never
            compromise on what our community deserves. Our kitchen, our standards.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {pills.map((p) => (
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
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <c.icon className="h-6 w-6 text-ans-gold" aria-hidden />
              <h3 className="mt-3 font-sans text-base font-semibold text-white">
                {c.title}
              </h3>
              <p className="mt-2 font-sans text-sm leading-6 text-white/55">
                {c.body}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
