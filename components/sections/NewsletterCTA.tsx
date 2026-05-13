"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { newsletterSchema, type NewsletterInput } from "@/lib/schemas";
import { sectionVariants, viewportOnce } from "@/lib/animations";
import { SITE } from "@/lib/site";

export function NewsletterCTA() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterInput>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = (_data: NewsletterInput) => {
    toast.success("You're subscribed to specials & menu updates.");
    reset();
  };

  return (
    <section id="order" className="bg-ans-gold py-20 md:py-24">
      <div className="mx-auto max-w-2xl px-6 text-center md:px-12">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p className="font-sans text-xs font-medium uppercase tracking-widest text-ans-emerald/60">
            Newsletter
          </p>
          <h2 className="mt-3 font-display text-[40px] text-ans-emerald md:text-[48px]">
            Get weekly specials &amp; menu updates.
          </h2>
          <p className="mt-4 font-sans text-[17px] text-ans-emerald/70">
            Weekend Halwa Poori alerts. Seasonal dishes. Catering deals.
          </p>
        </motion.div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-8 max-w-md"
          noValidate
        >
          <div className="flex flex-col gap-2 rounded-full border border-white/40 bg-white/30 p-2 backdrop-blur sm:flex-row sm:items-stretch">
            <input
              type="email"
              placeholder="Your email"
              className="min-w-0 flex-1 rounded-full bg-transparent px-4 py-2.5 font-sans text-ans-emerald outline-none placeholder:text-ans-emerald/40"
              {...register("email")}
            />
            <button
              type="submit"
              className="rounded-full bg-ans-emerald px-6 py-2.5 font-sans font-semibold text-white transition-colors hover:bg-ans-emerald-mid"
            >
              Join
            </button>
          </div>
          {errors.email ? (
            <p className="mt-2 text-left text-xs text-ans-crimson">
              {errors.email.message}
            </p>
          ) : null}
          <p className="mt-3 font-sans text-xs text-ans-emerald/40">
            No spam. Unsubscribe anytime.
          </p>
        </form>

        <div className="mx-auto mt-10 flex max-w-xs items-center gap-3">
          <span className="h-px flex-1 bg-ans-emerald/20" aria-hidden />
          <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-ans-emerald/50">
            Or
          </span>
          <span className="h-px flex-1 bg-ans-emerald/20" aria-hidden />
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <p className="font-sans text-sm text-ans-emerald/70">
            Ready to order now?
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href={SITE.doorDash}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-8 py-3 font-sans font-semibold text-ans-emerald shadow-sm hover:bg-ans-cream"
            >
              DoorDash
            </a>
            <a
              href={SITE.uberEats}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-white bg-transparent px-8 py-3 font-sans font-semibold text-ans-emerald hover:bg-white/20"
            >
              Uber Eats
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
