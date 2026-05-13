/**
 * Downloads unique stock imagery into `/public/images` — every menu slug,
 * kids slug, gallery slot, and venue slot maps to its own distinct URL (see stock-photo-urls.mjs).
 *
 * npm run download:stock-images
 */

import crypto from "crypto";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  galleryRemoteUrls,
  mergedMenuRemoteUrls,
  venueFallbackRemoteUrls,
} from "./stock-photo-urls.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const MENU_DIR = path.join(ROOT, "public", "images", "menu");
const VENUE_DIR = path.join(ROOT, "public", "images", "venue");
const GALLERY_DIR = path.join(ROOT, "public", "images", "gallery");

const USER_AGENT =
  "ans-halal-kitchen-stock-sync/1.0 (marketing site asset download)";

async function fetchBinary(url) {
  const res = await fetch(url, {
    redirect: "follow",
    headers: { "User-Agent": USER_AGENT, Accept: "image/*,*/*;q=0.8" },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const type = res.headers.get("content-type") ?? "";
  if (!type.includes("image")) {
    const t = await res.text();
    throw new Error(`Not an image (${type}) ${url}: ${t.slice(0, 120)}`);
  }
  return Buffer.from(await res.arrayBuffer());
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

const canonicalFromUrl = new Map();
/** Same photo bytes must appear only once (catches CDN dupes across sources) */
const hashToCanonPath = new Map();

async function writeFromUrl(destPath, url, label) {
  if (canonicalFromUrl.has(url)) {
    fs.copyFileSync(canonicalFromUrl.get(url), destPath);
    console.log(`  copy(URL) → ${path.relative(ROOT, destPath)}`);
    return;
  }

  const buf = await fetchBinary(url);
  const hash = crypto.createHash("sha256").update(buf).digest("hex");
  if (hashToCanonPath.has(hash)) {
    const primary = hashToCanonPath.get(hash);
    fs.copyFileSync(primary, destPath);
    canonicalFromUrl.set(url, primary);
    console.warn(`  ⚠ (${label}) same bytes as ${path.relative(ROOT, primary)} — copied`);
    return;
  }

  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.writeFileSync(destPath, buf);
  canonicalFromUrl.set(url, destPath);
  hashToCanonPath.set(hash, destPath);
  console.log(`  ok → ${path.relative(ROOT, destPath)} (${buf.byteLength} B)`);
}

async function main() {
  ensureDir(MENU_DIR);
  ensureDir(VENUE_DIR);
  ensureDir(GALLERY_DIR);

  console.log("Menu + kids thumbnails…");
  for (const [key, url] of Object.entries(mergedMenuRemoteUrls)) {
    const dest = path.join(MENU_DIR, `${key.replace(/[^\w.-]+/g, "-")}.jpg`);
    await writeFromUrl(dest, url, `menu/${key}`);
  }

  console.log("Venue fallbacks…");
  await writeFromUrl(
    path.join(VENUE_DIR, "hero.jpg"),
    venueFallbackRemoteUrls.hero,
    "venue/hero",
  );
  await writeFromUrl(
    path.join(VENUE_DIR, "story-main.jpg"),
    venueFallbackRemoteUrls.storyMain,
    "venue/story-main",
  );
  await writeFromUrl(
    path.join(VENUE_DIR, "story-inset.jpg"),
    venueFallbackRemoteUrls.storyInset,
    "venue/story-inset",
  );

  console.log("Gallery…");
  for (let i = 0; i < galleryRemoteUrls.length; i++) {
    const name = `${String(i + 1).padStart(2, "0")}.jpg`;
    await writeFromUrl(
      path.join(GALLERY_DIR, name),
      galleryRemoteUrls[i],
      `gallery/${name}`,
    );
  }

  console.log(
    `\nDone. Unique sources: merged menu ${Object.keys(mergedMenuRemoteUrls).length}, gallery ${galleryRemoteUrls.length}, venue 3.`,
  );
}

await main();
