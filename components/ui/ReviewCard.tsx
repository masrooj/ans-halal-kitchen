import type { Review } from "@/types";
import { Star } from "lucide-react";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="relative flex h-full flex-col rounded-2xl border border-ans-gold/10 bg-ans-cream p-8">
      <span className="font-display text-[96px] leading-none text-ans-gold/15" aria-hidden>
        “
      </span>
      <blockquote className="-mt-6 flex-1 font-display text-[17px] italic leading-8 text-ans-charcoal">
        {review.text}
      </blockquote>
      <p className="mt-4 inline-flex w-fit rounded-full border border-ans-emerald/10 bg-ans-emerald/5 px-3 py-1 font-sans text-xs text-ans-emerald">
        {review.dish}
      </p>
      <div className="mt-6 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ans-emerald font-sans text-sm font-bold text-white">
          {review.initials}
        </span>
        <div className="flex-1">
          <p className="font-sans text-sm font-semibold text-ans-charcoal">
            {review.name}
          </p>
          <p className="font-sans text-xs text-ans-muted">{review.date}</p>
          <div className="mt-1 flex items-center gap-1">
            {Array.from({ length: review.rating }).map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-ans-gold text-ans-gold"
                aria-hidden
              />
            ))}
            <span className="ml-2 font-sans text-xs text-ans-muted">
              {review.platform}
            </span>
          </div>
        </div>
        <span className="rounded-md bg-white px-2 py-1 font-sans text-xs font-bold text-ans-emerald">
          G
        </span>
      </div>
    </div>
  );
}
