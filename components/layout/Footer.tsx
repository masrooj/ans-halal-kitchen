import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";
import { hasMapsVenuePhotosEnabled } from "@/lib/images";
import { SITE } from "@/lib/site";
import { FOOTER_QUICK_LINKS } from "@/cms/nav.catalog";
import { HOME_PAGE } from "@/cms/home.page";

export function Footer() {
  const f = HOME_PAGE.footer;

  return (
    <footer className="relative bg-ans-emerald pt-20 pb-10 text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/pattern-islamic.svg')] opacity-[0.03]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1320px] px-6 md:px-12 lg:px-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <p className="font-display text-2xl italic text-white">{SITE.name}</p>
            <p className="mt-2 font-sans text-[11px] uppercase tracking-wider text-ans-gold/60">
              {f.sublineKicker}
            </p>
            <p className="mt-3 font-display text-base italic text-white/50">
              {f.taglineItalic}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-all hover:border-ans-gold hover:text-ans-gold"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-all hover:border-ans-gold hover:text-ans-gold"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <p className="font-sans text-[10px] font-medium uppercase tracking-widest text-ans-gold/50">
              {f.columnMenu}
            </p>
            <ul className="mt-4 space-y-2">
              {FOOTER_QUICK_LINKS.map((item) => (
                <li key={item.label + item.href}>
                  <Link
                    href={item.href}
                    className="font-sans text-sm text-white/60 transition-colors hover:text-ans-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-sans text-[10px] font-medium uppercase tracking-widest text-ans-gold/50">
              {f.columnHours}
            </p>
            <ul className="mt-4 space-y-2 font-sans text-sm text-white/60">
              {f.hourLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <p className="mt-2 font-sans text-xs italic text-ans-gold">
              {f.halwaHoursNote}
            </p>
          </div>

          <div>
            <p className="font-sans text-[10px] font-medium uppercase tracking-widest text-ans-gold/50">
              {f.columnOrder}
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href={SITE.doorDash}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 hover:border-ans-gold hover:text-ans-gold"
              >
                {f.doorDashLabel}
              </a>
              <a
                href={SITE.uberEats}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 hover:border-ans-gold hover:text-ans-gold"
              >
                {f.uberEatsLabel}
              </a>
            </div>
            <div className="mt-6 space-y-1 font-sans text-sm text-white/60">
              <a href={`tel:${SITE.phoneTel}`} className="block hover:text-ans-gold">
                {SITE.phoneDisplay}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="block hover:text-ans-gold"
              >
                {SITE.email}
              </a>
              {SITE.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </div>

        {hasMapsVenuePhotosEnabled ? (
          <p className="mx-auto mt-12 max-w-2xl text-center font-sans text-[11px] leading-relaxed text-white/35">
            {f.mapsAttributionLead}{" "}
            <a
              href={SITE.googleMapsPlace}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ans-gold/45 underline-offset-2 hover:text-ans-gold"
            >
              {f.mapsAttributionMapsWord}
            </a>{" "}
            {f.mapsAttributionTrail}{" "}
            <Link
              href="/photos/maps/ATTRIBUTION.txt"
              className="text-ans-gold/45 underline-offset-2 hover:text-ans-gold"
              prefetch={false}
            >
              {f.mapsAttributionFile}
            </Link>
            .
          </p>
        ) : null}

        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="font-sans text-[11px] text-white/25">
              © {f.copyrightYear} {f.copyrightRestaurant}. {f.copyrightRights}
            </p>
            <p className="font-sans text-[11px] text-white/25">{f.legalLinks}</p>
          </div>
          <p className="mt-4 text-center font-sans text-[11px] text-ans-gold/40">
            {f.halalStripe}
          </p>
        </div>
      </div>
    </footer>
  );
}
