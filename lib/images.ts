/**
 * Local JPGs live under `/public/images` — generated with `npm run download:stock-images`.
 * Sources are dishes & drinks styling only (food photography), plus optional Google Maps
 * venue JPEGs **only when** explicitly enabled (see below).
 */

const MENU_DIR = "/images/menu";

/** Menu card images — all keys used in `cms/menu.catalog.ts` image field */
export const MENU_IMAGE_URLS: Record<string, string> = {
  "halwa-puri": `${MENU_DIR}/halwa-puri.jpg`,
  "halwa-puri-keema": `${MENU_DIR}/halwa-puri-keema.jpg`,
  "biryani-tray": `${MENU_DIR}/biryani-tray.jpg`,
  "chicken-biryani": `${MENU_DIR}/chicken-biryani.jpg`,
  "beef-biryani": `${MENU_DIR}/beef-biryani.jpg`,
  "nalli-biryani": `${MENU_DIR}/nalli-biryani.jpg`,
  "lamb-biryani": `${MENU_DIR}/lamb-biryani.jpg`,
  "mutton-pulao": `${MENU_DIR}/mutton-pulao.jpg`,
  "veg-biryani": `${MENU_DIR}/veg-biryani.jpg`,
  "bihari-kabab-roll": `${MENU_DIR}/bihari-kabab-roll.jpg`,
  "chicken-tikka-roll": `${MENU_DIR}/chicken-tikka-roll.jpg`,
  "seekh-kabab-roll": `${MENU_DIR}/seekh-kabab-roll.jpg`,
  "chapli-kabab": `${MENU_DIR}/chapli-kabab.jpg`,
  "chicken-roll": `${MENU_DIR}/chicken-roll.jpg`,
  "fried-chicken": `${MENU_DIR}/fried-chicken.jpg`,
  "fried-chicken-4pc": `${MENU_DIR}/fried-chicken-4pc.jpg`,
  "chicken-leg": `${MENU_DIR}/chicken-leg.jpg`,
  "paplet-fish": `${MENU_DIR}/paplet-fish.jpg`,
  "fish-fry": `${MENU_DIR}/fish-fry.jpg`,
  "masala-fries": `${MENU_DIR}/masala-fries.jpg`,
  "wings-6pc": `${MENU_DIR}/wings-6pc.jpg`,
  "wings-12pc": `${MENU_DIR}/wings-12pc.jpg`,
  "desi-wings": `${MENU_DIR}/desi-wings.jpg`,
  "zinger-burger": `${MENU_DIR}/zinger-burger.jpg`,
  "beef-burger": `${MENU_DIR}/beef-burger.jpg`,
  "philly-cheesesteak": `${MENU_DIR}/philly-cheesesteak.jpg`,
  "double-burger": `${MENU_DIR}/double-burger.jpg`,
  "chicken-karahi": `${MENU_DIR}/chicken-karahi.jpg`,
  "beef-nihari": `${MENU_DIR}/beef-nihari.jpg`,
  "chana-cholay": `${MENU_DIR}/chana-cholay.jpg`,
  keema: `${MENU_DIR}/keema.jpg`,
  naan: `${MENU_DIR}/naan.jpg`,
  "garlic-naan": `${MENU_DIR}/garlic-naan.jpg`,
  paratha: `${MENU_DIR}/paratha.jpg`,
  halwa: `${MENU_DIR}/halwa.jpg`,
  kheer: `${MENU_DIR}/kheer.jpg`,
  "desi-chai": `${MENU_DIR}/desi-chai.jpg`,
  lassi: `${MENU_DIR}/lassi.jpg`,
  soda: `${MENU_DIR}/soda.jpg`,
  "paye-soup": `${MENU_DIR}/paye-soup.jpg`,
  haleem: `${MENU_DIR}/haleem.jpg`,
  "aloo-gosht": `${MENU_DIR}/aloo-gosht.jpg`,
  "kids-biryani": `${MENU_DIR}/kids-biryani.jpg`,
  "kids-fried-chicken": `${MENU_DIR}/kids-fried-chicken.jpg`,
  "kids-chicken-roll": `${MENU_DIR}/kids-chicken-roll.jpg`,
};

/**
 * Listing JPEGs exist in `/public/photos/maps` (see `next.config.mjs`).
 * Replacing hero/story with storefront/dining-room shots is opt-in — default stays on
 * bundled food stock (`/images/venue/`) unless you set `NEXT_PUBLIC_USE_GOOGLE_MAPS_VENUE_PHOTOS=true`.
 */
const GOOGLE_MAPS_VENUE_ASSETS_PRESENT =
  process.env.NEXT_PUBLIC_HAS_MAPS_VENUE_PHOTOS === "true";
const prefersGoogleMapsVenueImagery =
  process.env.NEXT_PUBLIC_USE_GOOGLE_MAPS_VENUE_PHOTOS === "true";
const HAS_MAPS_VENUE_PHOTOS =
  GOOGLE_MAPS_VENUE_ASSETS_PRESENT && prefersGoogleMapsVenueImagery;

const MAPS_DIR = "/photos/maps";

const LOCAL_VENUE = {
  hero: "/images/venue/hero.jpg",
  storyMain: "/images/venue/story-main.jpg",
  storyInset: "/images/venue/story-inset.jpg",
} as const;

const galleryLocalPaths: string[] = Array.from({ length: 9 }, (_, i) => {
  const n = `${i + 1}`.padStart(2, "0");
  return `/images/gallery/${n}.jpg`;
});

/** Hero / story — Google Maps images override when all four JPGs exist in /public */
export const heroBackgroundSrc = HAS_MAPS_VENUE_PHOTOS
  ? `${MAPS_DIR}/01.jpg`
  : LOCAL_VENUE.hero;

export const ourStoryMainSrc = HAS_MAPS_VENUE_PHOTOS
  ? `${MAPS_DIR}/02.jpg`
  : LOCAL_VENUE.storyMain;

export const ourStoryInsetSrc = HAS_MAPS_VENUE_PHOTOS
  ? `${MAPS_DIR}/03.jpg`
  : LOCAL_VENUE.storyInset;

/** Gallery masonry — Maps `04` replaces first tile when venue pack is enabled */
export const galleryImageSrcs = HAS_MAPS_VENUE_PHOTOS
  ? [`${MAPS_DIR}/04.jpg`, ...galleryLocalPaths.slice(0, 8)]
  : galleryLocalPaths;

export const hasMapsVenuePhotosEnabled = HAS_MAPS_VENUE_PHOTOS;

export function getMenuImageSrc(key: string): string {
  return MENU_IMAGE_URLS[key] ?? MENU_IMAGE_URLS["chicken-biryani"];
}

/** Hero collage — central food image with floating pill labels */
export const heroCollageSrc = getMenuImageSrc("chicken-biryani");

export const blurPlaceholder =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k=";
