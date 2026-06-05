"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { HalalBadge } from "@/components/ui/HalalBadge";
import { SITE } from "@/lib/site";
import {
  NAVBAR_MOBILE_ORDER_CTA,
  NAVBAR_ORDER_CTA,
  NAVBAR_PRIMARY_LINKS,
  NAVBAR_WORDMARK,
} from "@/cms/nav.catalog";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-ans-gold/20 bg-ans-cream/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-6 py-3 md:px-12 lg:px-20">
          <div className="flex items-center gap-3">
            <Link href="#hero" className="group flex flex-col leading-tight">
              <span className="font-display text-[28px] italic text-ans-emerald transition-colors group-hover:text-ans-emerald-mid">
                {NAVBAR_WORDMARK.line1}
              </span>
              <span className="font-sans text-[9px] font-medium uppercase tracking-[0.35em] text-ans-gold">
                {NAVBAR_WORDMARK.line2}
              </span>
            </Link>
            <HalalBadge size="sm" className="hidden sm:inline-flex" />
          </div>

          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Primary"
          >
            {NAVBAR_PRIMARY_LINKS.map((l) => (
              <Link
                key={`${l.href}-${l.label}`}
                href={l.href}
                className="font-sans text-sm font-medium text-ans-charcoal transition-colors duration-200 hover:text-ans-gold"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="font-sans text-xs text-ans-muted transition-colors hover:text-ans-emerald"
            >
              {SITE.phoneDisplay}
            </a>
            <a
              href={SITE.doorDash}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-ans-emerald px-5 py-2.5 font-sans text-sm text-white shadow-sm transition-all hover:bg-ans-emerald-mid hover:shadow-md"
            >
              {NAVBAR_ORDER_CTA}
            </a>
          </div>

          <button
            type="button"
            className="rounded-full p-2 text-ans-emerald md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[60] bg-ans-emerald text-white md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex h-full flex-col px-6 py-6">
              <div className="flex justify-end">
                <button
                  type="button"
                  aria-label="Close"
                  onClick={() => setOpen(false)}
                  className="rounded-full p-2"
                >
                  <X className="h-7 w-7" />
                </button>
              </div>
              <nav className="mt-8 flex flex-1 flex-col gap-2">
                {NAVBAR_PRIMARY_LINKS.map((l, i) => (
                  <motion.div
                    key={`${l.href}-${l.label}`}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.45 }}
                  >
                    <Link
                      href={l.href}
                      className="block font-display text-4xl italic"
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="flex flex-col gap-4 border-t border-white/10 pt-8">
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="font-sans text-lg"
                >
                  {SITE.phoneDisplay}
                </a>
                <a
                  href={SITE.doorDash}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-6 py-3 text-center font-sans font-semibold text-ans-emerald"
                >
                  {NAVBAR_MOBILE_ORDER_CTA}
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
