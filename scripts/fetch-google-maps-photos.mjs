/**
 * Fetches up to four photos from the Google Maps business listing via Places API.
 *
 * Prerequisites:
 * 1. Google Cloud project with Places API enabled and billing attached.
 * 2. GOOGLE_MAPS_API_KEY (restrict key to Places API + Places Photo API servers).
 *
 * Run: GOOGLE_MAPS_API_KEY=... npm run fetch:maps-photos
 *
 * Outputs:
 * - public/photos/maps/01.jpg … 04.jpg
 * - public/photos/maps/ATTRIBUTION.txt
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

const PLACE_ID =
  process.env.GOOGLE_PLACE_ID ?? "ChIJLS_7f8Pn0A4Rv4TftYi6mRg"; // default: A&N's Halal Kitchen
const OUT_DIR = path.join(ROOT, "public", "photos", "maps");
const MAX_PHOTOS = 4;

const key = process.env.GOOGLE_MAPS_API_KEY;
if (!key) {
  console.error(
    "Missing GOOGLE_MAPS_API_KEY. Enable Places API, create a server key, then:",
  );
  console.error("  GOOGLE_MAPS_API_KEY=your_key npm run fetch:maps-photos");
  process.exit(1);
}

function listingUrl(urlFromApi) {
  if (!urlFromApi) {
    return `Listing: https://www.google.com/maps/place/?q=place_id:${PLACE_ID}`;
  }
  return `Listing: ${urlFromApi}`;
}

async function placeDetails() {
  const params = new URLSearchParams({
    place_id: PLACE_ID,
    fields: "name,photos,url",
    key,
  });
  const url = `https://maps.googleapis.com/maps/api/place/details/json?${params}`;
  const res = await fetch(url);
  const data = await res.json();

  if (data.status !== "OK" || !data.result?.photos?.length) {
    console.error("Places Details failed:", data.status, data.error_message ?? "");
    process.exit(1);
  }

  return data.result;
}

async function downloadPhoto(photoReference) {
  const params = new URLSearchParams({
    maxwidth: "1600",
    photo_reference: photoReference,
    key,
  });
  const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?${params}`;
  const res = await fetch(photoUrl, { redirect: "follow" });
  if (!res.ok) {
    throw new Error(`Photo HTTP ${res.status}`);
  }
  const ctype = res.headers.get("content-type") ?? "";
  if (!ctype.startsWith("image/")) {
    const text = await res.text();
    throw new Error(`Expected image, got ${ctype}: ${text.slice(0, 200)}`);
  }
  return Buffer.from(await res.arrayBuffer());
}

fs.mkdirSync(OUT_DIR, { recursive: true });

const place = await placeDetails();
const photos = place.photos.slice(0, MAX_PHOTOS);

console.log(`Place: ${place.name}`);
if (place.photos.length < MAX_PHOTOS) {
  console.error(
    `Listing has ${place.photos.length} Google photo(s); need at least ${MAX_PHOTOS}. Add photos in Google Business Profile, then rerun.`,
  );
  process.exit(1);
}

console.log(`Downloading ${photos.length} photo(s)…`);

const attributionLines = [];
for (let i = 0; i < photos.length; i++) {
  const photo = photos[i];
  const ref = photo.photo_reference;
  attributionLines.push(
    `# Photo ${String(i + 1).padStart(2, "0")}.jpg`,
    ...(photo.html_attributions ?? []),
    "",
  );

  try {
    const buf = await downloadPhoto(ref);
    const outPath = path.join(OUT_DIR, `${String(i + 1).padStart(2, "0")}.jpg`);
    fs.writeFileSync(outPath, buf);
    console.log(`  Wrote ${path.relative(ROOT, outPath)} (${buf.byteLength} bytes)`);
  } catch (e) {
    console.error(`  Failed photo ${i + 1}:`, e.message ?? e);
    process.exit(1);
  }
}

fs.writeFileSync(
  path.join(OUT_DIR, "ATTRIBUTION.txt"),
  [
    "Google Places — photo attributions (required when displaying these photos).",
    "",
    listingUrl(place.url),
    "",
    ...attributionLines,
  ].join("\n"),
  "utf8",
);

console.log(
  `\nDone. Attribution saved to ${path.relative(ROOT, path.join(OUT_DIR, "ATTRIBUTION.txt"))}`,
);
console.log("Restart Next dev server or rebuild so bundled env picks up the new files.");
