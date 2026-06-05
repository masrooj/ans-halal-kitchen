"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Facebook, Instagram, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { contactSchema, type ContactInput } from "@/lib/schemas";
import { sectionVariants, viewportOnce } from "@/lib/animations";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/cn";
import { HOME_PAGE } from "@/cms/home.page";

const inputCls =
  "border border-ans-gold/20 rounded-xl px-4 py-3 font-sans text-sm outline-none transition-shadow focus:border-ans-emerald focus:ring-2 focus:ring-ans-emerald/20";
const labelCls = "text-xs font-medium text-ans-muted";

export function ContactUs() {
  const c = HOME_PAGE.contact;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (_data: ContactInput) => {
    toast.success("Message sent! We'll reply soon.");
    reset();
  };

  return (
    <section id="contact" className="bg-white py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1320px] px-6 md:px-12 lg:px-20">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center"
        >
          <h2 className="font-display text-[40px] text-ans-emerald md:text-[48px]">
            {c.headline}
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-6 font-sans text-lg font-semibold text-ans-emerald">
              {c.formTitle}
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-1">
                  <label className={labelCls} htmlFor="c-name">
                    {c.labels.name}
                  </label>
                  <input
                    id="c-name"
                    className={cn(inputCls, errors.name && "border-ans-crimson")}
                    {...register("name")}
                  />
                  {errors.name ? (
                    <p className="text-xs text-ans-crimson">{errors.name.message}</p>
                  ) : null}
                </div>
                <div className="flex flex-col gap-1">
                  <label className={labelCls} htmlFor="c-email">
                    {c.labels.email}
                  </label>
                  <input
                    id="c-email"
                    type="email"
                    className={cn(inputCls, errors.email && "border-ans-crimson")}
                    {...register("email")}
                  />
                  {errors.email ? (
                    <p className="text-xs text-ans-crimson">{errors.email.message}</p>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className={labelCls} htmlFor="c-subject">
                  {c.labels.subject}
                </label>
                <input
                  id="c-subject"
                  className={cn(inputCls, errors.subject && "border-ans-crimson")}
                  {...register("subject")}
                />
                {errors.subject ? (
                  <p className="text-xs text-ans-crimson">{errors.subject.message}</p>
                ) : null}
              </div>
              <div className="flex flex-col gap-1">
                <label className={labelCls} htmlFor="c-message">
                  {c.labels.message}
                </label>
                <textarea
                  id="c-message"
                  rows={5}
                  className={cn(inputCls, errors.message && "border-ans-crimson")}
                  {...register("message")}
                />
                {errors.message ? (
                  <p className="text-xs text-ans-crimson">{errors.message.message}</p>
                ) : null}
              </div>
              <button
                type="submit"
                className="w-fit rounded-full bg-ans-emerald px-10 py-3.5 font-sans font-semibold text-white transition-transform hover:scale-[1.02] hover:bg-ans-emerald-mid"
              >
                {c.submit}
              </button>
            </form>
          </div>

          <div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 rounded-2xl bg-ans-cream p-5">
                <span className="inline-flex rounded-xl bg-ans-emerald/5 p-3 text-ans-emerald">
                  <MapPin className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-sans font-semibold text-ans-charcoal">{c.visitTitle}</p>
                  <p className="mt-1 font-sans text-sm text-ans-muted">{SITE.address}</p>
                  <a
                    href={SITE.googleMapsPlace}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block font-sans text-sm text-ans-gold hover:text-ans-emerald"
                  >
                    {c.directionsLink}
                  </a>
                </div>
              </div>
              <div className="flex gap-4 rounded-2xl bg-ans-cream p-5">
                <span className="inline-flex rounded-xl bg-ans-emerald/5 p-3 text-ans-emerald">
                  <Phone className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-sans font-semibold text-ans-charcoal">{c.phoneTitle}</p>
                  <a
                    href={`tel:${SITE.phoneTel}`}
                    className="mt-1 block font-sans text-sm text-ans-muted hover:text-ans-emerald"
                  >
                    {SITE.phoneDisplay}
                  </a>
                </div>
              </div>
              <div className="flex gap-4 rounded-2xl bg-ans-cream p-5">
                <span className="inline-flex rounded-xl bg-ans-emerald/5 p-3 text-ans-emerald">
                  <Instagram className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-sans font-semibold text-ans-charcoal">{c.socialTitle}</p>
                  <a
                    href={SITE.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block font-sans text-sm text-ans-muted hover:text-ans-emerald"
                  >
                    {SITE.instagramHandle}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl">
              <iframe
                title={`${SITE.name} on Google Maps`}
                src={SITE.googleMapsEmbed}
                width="100%"
                height={280}
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ans-gold/30 text-ans-emerald transition-colors hover:border-ans-emerald hover:bg-ans-emerald hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ans-gold/30 text-ans-emerald transition-colors hover:border-ans-emerald hover:bg-ans-emerald hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
