"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import {
  blurPlaceholder,
  galleryImageSrcs,
  hasMapsVenuePhotosEnabled,
} from "@/lib/images";
import { motion } from "framer-motion";
import { sectionVariants, viewportOnce } from "@/lib/animations";
import { SITE } from "@/lib/site";

const genericAlts = [
  "Chicken biryani bowl overhead — golden rice and spices",
  "Naan bread fresh from the tandoor",
  "Beef nihari in a steaming bowl",
  "Bihari kebab rolled in paratha",
  "Halwa poori breakfast plate",
  "Chicken karahi in a wok",
  "Pakistani restaurant table setting",
  "Spiced crispy fried chicken",
  "Desi chai in a cup",
];

function galleryAltForIndex(i: number): string {
  if (hasMapsVenuePhotosEnabled && i === 0) {
    return "A&N's Halal Kitchen — venue photo shared on Google Maps";
  }
  return genericAlts[i] ?? "Pakistani halal cuisine";
}

export function InstagramGallery() {
  return (
    <section className="bg-ans-cream py-28 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1320px] px-6 md:px-12 lg:px-20">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center"
        >
          <h2 className="font-display text-[40px] text-ans-emerald md:text-[48px]">
            Fresh food. Real photos.
          </h2>
          <Link
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block font-sans text-ans-muted transition-colors hover:text-ans-emerald"
          >
            @theanshalalkitchen on Instagram
          </Link>
        </motion.div>

        <div className="mt-12 columns-2 gap-4 md:columns-3">
          {galleryImageSrcs.map((src, i) => (
            <div
              key={`gallery-${i}`}
              className="mb-4 break-inside-avoid overflow-hidden rounded-xl"
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={src}
                  alt={galleryAltForIndex(i)}
                  fill
                  sizes="(max-width:768px) 50vw, 33vw"
                  className="cursor-pointer object-cover transition-opacity hover:opacity-90"
                  placeholder="blur"
                  blurDataURL={blurPlaceholder}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-ans-gold transition-colors hover:text-ans-emerald"
          >
            Follow us on Instagram →
            <Instagram className="h-5 w-5" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
