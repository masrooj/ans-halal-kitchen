"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { toast } from "sonner";
import type { MenuItem } from "@/types";
import { getMenuImageSrc, blurPlaceholder } from "@/lib/images";
import { SITE } from "@/lib/site";
import { stripLeadingEmoji } from "@/lib/strings";

export function MenuCard({
  item,
  categoryLabel,
}: {
  item: MenuItem;
  categoryLabel: string;
}) {
  const src = getMenuImageSrc(item.image);

  const handleOrder = () => {
    toast.success("Opening DoorDash", {
      description: "Continue your order on DoorDash.",
    });
    window.open(SITE.doorDash, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.article
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-500 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={src}
          alt={item.name}
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 hover:scale-105"
          placeholder="blur"
          blurDataURL={blurPlaceholder}
        />
        {item.badge ? (
          <span className="absolute left-3 top-3 rounded-full bg-ans-gold px-3 py-1 font-sans text-[10px] font-semibold text-ans-emerald">
            {item.badge}
          </span>
        ) : null}
      </div>
      <div className="p-5">
        <p className="mt-1 font-sans text-xs uppercase tracking-wider text-ans-gold">
          {stripLeadingEmoji(categoryLabel)}
        </p>
        <h3 className="mt-1 font-display text-[22px] font-semibold text-ans-emerald">
          {item.name}
        </h3>
        <p className="mt-2 line-clamp-2 font-sans text-[13px] leading-6 text-ans-muted">
          {item.desc}
        </p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <p className="font-display text-xl font-bold text-ans-crimson">
            ${item.price.toFixed(2)}
          </p>
          <button
            type="button"
            onClick={handleOrder}
            className="rounded-full border border-ans-emerald px-4 py-1.5 font-sans text-sm text-ans-emerald transition-all hover:bg-ans-emerald hover:text-white"
          >
            Add to Order
          </button>
        </div>
      </div>
    </motion.article>
  );
}
