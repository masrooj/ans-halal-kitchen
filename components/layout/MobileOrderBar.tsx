"use client";

import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function MobileOrderBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex gap-3 border-t border-white/10 bg-ans-emerald px-4 py-3 text-white md:hidden pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <a
        href={SITE.doorDash}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 rounded-full bg-white py-3 text-center font-sans text-sm font-semibold text-ans-emerald"
      >
        Order on DoorDash
      </a>
      <a
        href={`tel:${SITE.phoneTel}`}
        className="inline-flex items-center justify-center rounded-full border border-white/30 px-4"
        aria-label={`Call ${SITE.phoneDisplay}`}
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}
