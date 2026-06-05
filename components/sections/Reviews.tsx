"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { reviews } from "@/data/reviews";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { sectionVariants, viewportOnce } from "@/lib/animations";
import { SITE } from "@/lib/site";
import { HOME_PAGE } from "@/cms/home.page";

export function Reviews() {
  const rv = HOME_PAGE.reviews;
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false },
    [Autoplay({ delay: 5000, stopOnInteraction: false })],
  );
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section id="reviews" className="bg-white py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1320px] px-6 md:px-12 lg:px-20">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p className="font-sans text-xs font-medium uppercase tracking-widest text-ans-gold">
            {rv.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-[40px] text-ans-emerald md:text-[52px]">
            {rv.headline}
          </h2>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-ans-muted md:gap-6">
            <span className="font-display text-4xl text-ans-emerald">{rv.ratingEmoji}</span>
            <span className="font-sans text-sm">{rv.outOf}</span>
            <span className="hidden text-white/20 sm:inline">|</span>
            <span className="font-sans text-sm">{rv.googleLine}</span>
            <span className="hidden sm:inline">|</span>
            <span className="font-sans text-sm">{rv.facebookLine}</span>
            <span className="hidden sm:inline">|</span>
            <span className="font-sans text-sm">{rv.rankingLine}</span>
          </div>
          <p className="mt-3 font-sans text-[13px] italic text-ans-muted">
            {rv.carouselHint}
          </p>
        </motion.div>

        <div className="mt-12">
          <div className="overflow-hidden pb-2" ref={emblaRef}>
            <div className="flex -ml-4">
              {reviews.map((r) => (
                <div
                  className="min-w-0 shrink-0 grow-0 pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                  key={r.name + r.date}
                >
                  <ReviewCard review={r} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    selected === i ? "bg-ans-emerald" : "bg-ans-gold/30"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={scrollPrev}
                className="rounded-full border border-ans-gold/30 p-2 text-ans-emerald hover:bg-ans-cream"
                aria-label="Previous reviews"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={scrollNext}
                className="rounded-full border border-ans-gold/30 p-2 text-ans-emerald hover:bg-ans-cream"
                aria-label="Next reviews"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <p className="mt-6 text-center">
            <a
              href={SITE.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-ans-gold underline-offset-4 hover:text-ans-emerald hover:underline"
            >
              {rv.readAllCta}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
