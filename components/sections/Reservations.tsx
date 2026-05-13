"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import { toast } from "sonner";
import {
  reservationSchema,
  type ReservationInput,
} from "@/lib/schemas";
import { buildTimeOptions } from "@/lib/timeOptions";
import { sectionVariants, viewportOnce } from "@/lib/animations";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/cn";

const timeOptions = buildTimeOptions();

const fieldWrap = "flex flex-col gap-1";
const labelCls = "text-xs font-medium text-ans-muted";
const inputCls =
  "border border-ans-gold/20 rounded-xl px-4 py-3 font-sans text-sm text-ans-charcoal outline-none transition-shadow focus:border-ans-emerald focus:ring-2 focus:ring-ans-emerald/20";
const errCls = "text-xs text-ans-crimson";

export function Reservations() {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReservationInput>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      partySize: "2",
      catering: false,
    },
  });

  const onSubmit = (_data: ReservationInput) => {
    setDone(true);
    toast.success("Reservation request sent! We'll call you to confirm.");
  };

  return (
    <section className="bg-ans-emerald py-24 text-white md:py-32 lg:py-40">
      <div className="mx-auto grid max-w-[1320px] gap-14 px-6 md:grid-cols-2 md:gap-12 md:px-12 lg:px-20">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p className="font-sans text-xs font-medium uppercase tracking-widest text-ans-gold/60">
            Dine in &amp; catering
          </p>
          <h2 className="mt-4 font-display text-[40px] italic leading-tight text-white md:text-[52px]">
            Book a table or place a catering order.
          </h2>
          <p className="mt-4 font-sans text-[17px] leading-8 text-white/60">
            Whether it&apos;s a family dinner, a group gathering, or a catering
            event, A&amp;N&apos;s Halal Kitchen is ready to serve you. Our
            20–25 seat dine-in space is cozy, clean and welcoming.
          </p>

          <div className="mt-10 flex flex-col gap-4">
            <div className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
              <MapPin className="h-5 w-5 shrink-0 text-ans-gold" />
              <div>
                <p className="font-sans text-sm font-semibold">Location</p>
                <p className="font-sans text-sm text-white/60">{SITE.address}</p>
                <a
                  href={SITE.googleMapsPlace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block font-sans text-sm text-ans-gold hover:underline"
                >
                  Get Directions →
                </a>
              </div>
            </div>
            <div className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
              <Phone className="h-5 w-5 shrink-0 text-ans-gold" />
              <div>
                <p className="font-sans text-sm font-semibold">Call Us</p>
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="font-sans text-sm text-white/80 hover:text-white"
                >
                  {SITE.phoneDisplay}
                </a>
                <p className="font-sans text-xs text-white/45">tap to call</p>
              </div>
            </div>
            <div className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
              <Clock className="h-5 w-5 shrink-0 text-ans-gold" />
              <div className="font-sans text-sm text-white/65">
                <p>Mon–Fri: 11:00 AM – 10:00 PM</p>
                <p>Sat–Sun: 10:00 AM – 10:00 PM</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl bg-white p-8 shadow-2xl md:p-10"
        >
          <h3 className="font-display text-[28px] text-ans-emerald">
            Make a Reservation
          </h3>
          {done ? (
            <div className="mt-10 flex flex-col items-center gap-4 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ans-emerald text-2xl text-white">
                ✓
              </span>
              <p className="font-sans text-lg text-ans-emerald">
                We&apos;ll confirm your table via phone!
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 flex flex-col gap-4"
              noValidate
            >
              <div className={fieldWrap}>
                <label className={labelCls} htmlFor="fullName">
                  Full Name
                </label>
                <input
                  id="fullName"
                  className={cn(inputCls, errors.fullName && "border-ans-crimson")}
                  {...register("fullName")}
                />
                {errors.fullName ? (
                  <p className={errCls}>{errors.fullName.message}</p>
                ) : null}
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className={fieldWrap}>
                  <label className={labelCls} htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={cn(inputCls, errors.email && "border-ans-crimson")}
                    {...register("email")}
                  />
                  {errors.email ? (
                    <p className={errCls}>{errors.email.message}</p>
                  ) : null}
                </div>
                <div className={fieldWrap}>
                  <label className={labelCls} htmlFor="phone">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className={cn(inputCls, errors.phone && "border-ans-crimson")}
                    {...register("phone")}
                  />
                  {errors.phone ? (
                    <p className={errCls}>{errors.phone.message}</p>
                  ) : null}
                </div>
              </div>

              <div className={fieldWrap}>
                <label className={labelCls} htmlFor="date">
                  Date
                </label>
                <input
                  id="date"
                  type="date"
                  className={cn(inputCls, errors.date && "border-ans-crimson")}
                  {...register("date")}
                />
                {errors.date ? (
                  <p className={errCls}>{errors.date.message}</p>
                ) : null}
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className={fieldWrap}>
                  <label className={labelCls} htmlFor="partySize">
                    Party Size
                  </label>
                  <select
                    id="partySize"
                    className={cn(inputCls, errors.partySize && "border-ans-crimson")}
                    {...register("partySize")}
                  >
                    {["1", "2", "3", "4", "5", "6+"].map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                  {errors.partySize ? (
                    <p className={errCls}>{errors.partySize.message}</p>
                  ) : null}
                </div>
                <div className={fieldWrap}>
                  <label className={labelCls} htmlFor="time">
                    Time
                  </label>
                  <select
                    id="time"
                    className={cn(inputCls, errors.time && "border-ans-crimson")}
                    {...register("time")}
                  >
                    <option value="">Select time</option>
                    {timeOptions.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  {errors.time ? (
                    <p className={errCls}>{errors.time.message}</p>
                  ) : null}
                </div>
              </div>

              <div className={fieldWrap}>
                <label className={labelCls} htmlFor="requests">
                  Special Requests
                </label>
                <textarea
                  id="requests"
                  rows={4}
                  className={inputCls}
                  {...register("requests")}
                />
              </div>

              <label className="flex items-center gap-2 font-sans text-sm text-ans-muted">
                <input type="checkbox" {...register("catering")} className="h-4 w-4 rounded border-ans-gold/30" />
                This is a catering/bulk order inquiry
              </label>

              <button
                type="submit"
                className="mt-2 w-full rounded-full bg-ans-emerald py-4 font-sans text-lg font-semibold text-white transition-colors hover:bg-ans-emerald-mid"
              >
                Reserve Table
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
