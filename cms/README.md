# File-based CMS (no database)

All editable **copy**, **menu rows**, **reviews**, **navigation labels**, and **business URLs** live under `cms/`. Components keep layout, motion, and styling; they **import** these modules.

## Where to edit what

| File | Edit when you want to change… |
|------|-------------------------------|
| [`site.settings.ts`](./site.settings.ts) | Restaurant name, taglines, phone, email, address (`address` + `addressLines`), social URLs, DoorDash/Uber Eats links, Google Maps / embed / place id. Also **business hours** (`BUSINESS_HOURS_LINES`) used next to reservations and synced conceptually with footer hours in `home.page.ts`. |
| [`menu.catalog.ts`](./menu.catalog.ts) | Menu categories, item names, descriptions, prices, badges, image keys. |
| [`reviews.catalog.ts`](./reviews.catalog.ts) | Carousel review quotes (name, date, rating, text, dish). |
| [`nav.catalog.ts`](./nav.catalog.ts) | Primary nav links, header wordmark lines, footer quick links, navbar “Order” button labels. |
| [`home.page.ts`](./home.page.ts) | Home page marketing copy: hero, marquee, story, how-it-works, halal section, weekend specials, reviews strip text, Instagram headings/alts, reservations intro, contact form labels/headlines, newsletter, footer column copy (hours shown in footer are duplicated here as `footer.hourLines` — keep them aligned with reality). |
| [`cms.icons.ts`](./cms.icons.ts) | Which Lucide icons back CMS-driven cards/steps (keys referenced from `home.page.ts`). |

## Import shortcuts

- `@/cms/…` — CMS modules (source of truth).
- `@/lib/site` — Re-exports `SITE`, `BUSINESS_HOURS_LINES` from `cms/site.settings.ts` for existing imports.
- `@/data/menu` and `@/data/reviews` — Thin re-exports of `cms/menu.catalog.ts` and `cms/reviews.catalog.ts`.

## When to touch `.tsx` instead

Change React/TSX files when you alter **structure**, **animations**, **new sections**, **Tailwind layout**, or **behavior** — not for routine text/menu updates once those strings live in `cms/`.
