"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { menuCategories } from "@/data/menu";
import { MenuCard } from "@/components/ui/MenuCard";
import { sectionVariants, viewportOnce } from "@/lib/animations";

const MAX_CARDS = 9;

export function MenuSection() {
  const [active, setActive] = useState(menuCategories[0]!.id);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    const id = window.location.hash.replace(/^#/, "");
    if (menuCategories.some((c) => c.id === id)) setActive(id);
    const onHash = () => {
      const hid = window.location.hash.replace(/^#/, "");
      if (menuCategories.some((c) => c.id === hid)) setActive(hid);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    setExpandedId(null);
  }, [active]);

  const category = useMemo(
    () => menuCategories.find((c) => c.id === active)!,
    [active],
  );

  const expanded = expandedId === category.id;
  const items = expanded
    ? category.items
    : category.items.slice(0, MAX_CARDS);
  const hasMore = category.items.length > MAX_CARDS;

  return (
    <section
      id="menu"
      className="bg-ans-cream py-24 md:py-32 lg:py-40"
    >
      <div id="weekend-deals" className="scroll-mt-[5.75rem]" aria-hidden />
      <div className="mx-auto max-w-[1320px] px-6 md:px-12 lg:px-20">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-ans-gold">
            Menu
          </p>
          <h2 className="mt-3 font-display text-[40px] text-ans-emerald md:text-[52px]">
            Everything on our menu.
          </h2>
          <p className="mt-4 max-w-xl font-sans text-ans-muted">
            Scroll through — or jump to your craving.
          </p>
        </motion.div>

        <div className="sticky top-[64px] z-40 -mx-4 mt-10 overflow-x-auto bg-ans-cream/95 px-4 py-3 backdrop-blur md:-mx-0 md:px-0">
          <div className="flex min-w-min gap-2 pb-1">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActive(cat.id)}
                className={`whitespace-nowrap rounded-full border px-4 py-2 font-sans text-[13px] font-medium transition-colors ${
                  active === cat.id
                    ? "border-transparent bg-ans-emerald text-white"
                    : "border-ans-gold/20 bg-white text-ans-charcoal hover:border-ans-gold/40"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-6 font-sans text-sm text-ans-muted">{category.note}</p>

        <AnimatePresence mode="wait">
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
            {items.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <MenuCard item={item} categoryLabel={category.label} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {hasMore ? (
          <p className="mt-8 text-center font-sans text-sm text-ans-gold">
            <button
              type="button"
              onClick={() => setExpandedId(expanded ? null : category.id)}
              className="hover:text-ans-emerald"
            >
              {expanded
                ? "Show less ↑"
                : `See all ${category.label.replace(/^[^\s]+\s/, "")} →`}
            </button>
          </p>
        ) : null}
      </div>
    </section>
  );
}
