import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function exists(p) {
  return fs.existsSync(path.join(__dirname, p));
}

const mapsVenuePhotos =
  exists(path.join("public", "photos", "maps", "01.jpg")) &&
  exists(path.join("public", "photos", "maps", "02.jpg")) &&
  exists(path.join("public", "photos", "maps", "03.jpg")) &&
  exists(path.join("public", "photos", "maps", "04.jpg"));

/** See `lib/images.ts`: listing JPEGs swap in only when NEXT_PUBLIC_USE_GOOGLE_MAPS_VENUE_PHOTOS=true. */
const nextEnv = {
  NEXT_PUBLIC_HAS_MAPS_VENUE_PHOTOS: mapsVenuePhotos ? "true" : "false",
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: nextEnv,
  images: {
    // Local files only unless you temporarily add remote sources again.
    remotePatterns: [],
  },
};

export default nextConfig;
