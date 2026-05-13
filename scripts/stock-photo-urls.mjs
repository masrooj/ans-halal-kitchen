/**
 * Strictly unique URLs per slot → no reused menu tiles or masonry images.
 *
 * Layout in `MASTER_IMAGE_URL`:
 * [0 … 41]   menu (42 keys in `MENU_KEY_ORDER`)
 * [42 … 44]   kids-only slugs (`kids-*`)
 * [45 … 53]   gallery 01 … 09
 * [54 … 56]   wide food banner slots (hero · story main · story inset)
 */

function uns(id, w = 800) {
  return `https://images.unsplash.com/photo-${id}?fm=jpg&w=${w}&q=80`;
}

function pex(id, w = 800) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
}

const UNS_PRIMARY = [
  uns("1563379091339-03b21ab4a4f8"),
  uns("1589301760014-d929f3979dbc"),
  uns("1631452180519-c014fe946bc7"),
  uns("1563379926898-05f4575a45d8"),
  uns("1596797038530-2c107229654b"),
  uns("1529006557810-274b9b2fc783"),
  uns("1599487488170-d11ec9c172f0"),
  uns("1555939594-58d7cb561ad1"),
  uns("1529042410759-befb1204b468"),
  uns("1626082927389-6cd097cdc6ec"),
  uns("1598103442097-8b74394b95c6"),
  uns("1519708227418-c8fd9a32b7a2"),
  uns("1467003909585-2f8a72700288"),
  uns("1568901346375-23c9450c58cd"),
  uns("1550547660-d9450f859349"),
  uns("1577219491135-ce391730fb2c"),
  uns("1488477181946-6428a0291777"),
  uns("1437418747212-8d9709afab22"),
  uns("1544145945-f90425340c7e"),
  uns("1547592166-23ac45744acd"),
  uns("1504674900247-0877df9cc836"),
  uns("1517248135467-4c7edcad34c4"),
  uns("1603894584373-5ac82b2ae398"),
  uns("1562967914-608f82629710"),
  uns("1512621776951-a57141f2eefd"),
];

const PEX_MENU_GALLERY = [
  1640777,
  1640772,
  674574,
  769289,
  958545,
  7625056,
  1279330,
  1624487,
  1647163,
  2673353,
  1437267,
  1640775,
  1640774,
  1640773,
  1640776,
  1640780,
  6275112,
  958546,
  9600139,
  9620234,
  9620238,
  1640779,
  7651627,
  9620239,
  9620240,
  6644958,
  9585469,
  9620241,
  9620242,
];

if (UNS_PRIMARY.length !== 25 || PEX_MENU_GALLERY.length !== 29) {
  throw new Error(
    `Pool size error: UNS ${UNS_PRIMARY.length}, PEX block ${PEX_MENU_GALLERY.length}`,
  );
}

export const MASTER_IMAGE_URL = UNS_PRIMARY.concat(
  PEX_MENU_GALLERY.map((id) => pex(id)),
).concat([
  pex(709567, 1680),
  pex(1143754, 1400),
  pex(3184932, 1200),
]);

if (MASTER_IMAGE_URL.length !== 57) {
  throw new Error(`MASTER expected 57, got ${MASTER_IMAGE_URL.length}`);
}

export const MENU_KEY_ORDER = [
  "halwa-puri",
  "halwa-puri-keema",
  "biryani-tray",
  "chicken-biryani",
  "beef-biryani",
  "nalli-biryani",
  "lamb-biryani",
  "mutton-pulao",
  "veg-biryani",
  "bihari-kabab-roll",
  "chicken-tikka-roll",
  "seekh-kabab-roll",
  "chapli-kabab",
  "chicken-roll",
  "fried-chicken",
  "fried-chicken-4pc",
  "chicken-leg",
  "paplet-fish",
  "fish-fry",
  "masala-fries",
  "wings-6pc",
  "wings-12pc",
  "desi-wings",
  "zinger-burger",
  "beef-burger",
  "philly-cheesesteak",
  "double-burger",
  "chicken-karahi",
  "beef-nihari",
  "chana-cholay",
  "keema",
  "naan",
  "garlic-naan",
  "paratha",
  "halwa",
  "kheer",
  "desi-chai",
  "lassi",
  "soda",
  "paye-soup",
  "haleem",
  "aloo-gosht",
];

export const menuImageRemoteUrls = Object.fromEntries(
  MENU_KEY_ORDER.map((key, i) => [key, MASTER_IMAGE_URL[i]]),
);

export const kidsMenuImageRemoteUrls = Object.fromEntries([
  ["kids-biryani", MASTER_IMAGE_URL[42]],
  ["kids-fried-chicken", MASTER_IMAGE_URL[43]],
  ["kids-chicken-roll", MASTER_IMAGE_URL[44]],
]);

export const mergedMenuRemoteUrls = {
  ...menuImageRemoteUrls,
  ...kidsMenuImageRemoteUrls,
};

export const galleryRemoteUrls = MASTER_IMAGE_URL.slice(45, 54);

export const venueFallbackRemoteUrls = {
  hero: MASTER_IMAGE_URL[54],
  storyMain: MASTER_IMAGE_URL[55],
  storyInset: MASTER_IMAGE_URL[56],
};
