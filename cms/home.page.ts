/**
 * FILE-BASED CMS — Marketing copy for the home page (no database).
 * Change text here; keep layout / motion in `components/sections/*`.
 */

import type { CmsIconKey } from "./cms.icons";

export const HOME_PAGE = {
  hero: {
    imageAltStock: "Aromatic Pakistani biryani bowl — golden rice and spices",
    imageAltMaps: "A&N's Halal Kitchen — venue photo from the Google Maps listing",
    headlineLines: ["Taste of", "Karachi,", "In Sugar Land."] as const,
    sublineGold: "We only serve Zabiha Handcut Halal Food",
    lead:
      "Authentic Zabiha Halal Pakistani cuisine — from our family kitchen to your table. Biryani, Nihari, Kabab Rolls & more, crafted from Karachi recipes.",
    ctaOrder: "Order Online",
    ctaMenu: "View Full Menu →",
    ratingDisplay: "⭐ 4.9",
    ratingSub: "Google · 1,146+ verified reviews",
    ratingTagline: "Sugar Land's #1 Halal Kitchen",
    scrollCue: "SCROLL",
    /** Emoji / title / tag / stagger — scatter positions live in `components/sections/Hero.tsx` as `HERO_FLOAT_CARD_LAYOUT` (Tailwind). */
    floatCards: [
      {
        emoji: "🍛",
        title: "Chicken Biryani",
        tag: "Best Seller",
        delay: 0,
      },
      {
        emoji: "🥩",
        title: "Beef Nihari",
        tag: "Karachi Recipe",
        delay: 0.15,
      },
      {
        emoji: "🌯",
        title: "Bihari Kabab Roll",
        tag: "Fan Favorite",
        delay: 0.3,
      },
      {
        emoji: "🍗",
        title: "Halwa Poori",
        tag: "Weekends Only",
        delay: 0.45,
      },
      {
        emoji: "🔥",
        title: "Hot Wings",
        tag: "6pc $13.95",
        delay: 0.6,
      },
    ],
  },

  marquee: {
    row1:
      "Zabiha Halal · Hand Cut · Karachi Recipes · Fresh Daily · Pakistani Cuisine · Family Owned · Sugar Land TX · Authentic Spices · ",
    row2:
      "BIRYANI · NIHARI · KABAB ROLLS · KARAHI · HALWA POORI · ZINGER BURGER · WINGS · MUTTON · BEEF · CHICKEN · FISH · NAAN · ",
  },

  menuSection: {
    eyebrow: "Menu",
    headline: "Everything on our menu.",
    sub: "Scroll through — or jump to your craving.",
    expandLess: "Show less ↑",
    expandMorePrefix: "See all ",
  },

  story: {
    eyebrow: "Our Story",
    headline: "A little piece of Karachi, right here in Sugar Land.",
    paragraphs: [
      "A&N's Halal Kitchen was born from a simple belief — that the bold, soulful flavors of Karachi's street food culture deserved a home in Texas. Our recipes aren't created; they're inherited. Passed down through family kitchens, tested in the streets of Pakistan, and brought to your table with love.",
      "Every dish we serve is Zabiha Halal — hand cut, never frozen, and made fresh daily. From our slow-cooked Nihari to our smoky Bihari Kabab Rolls, you'll taste the difference that real ingredients and real technique make.",
    ] as const,
    stats: [
      { n: "4.9★", l: "Google Rating" },
      { n: "1,146+", l: "Happy Reviews" },
      { n: "100%", l: "Zabiha Halal" },
    ] as const,
    followCta: "Follow us @theanshalalkitchen →",
    mainAltStock: "Chef preparing Pakistani cuisine in the kitchen",
    mainAltMaps: "Inside A&N's Halal Kitchen — Google Maps contributor photo",
    insetAltStock: "Halwa poori breakfast spread",
    insetAltMaps: "A&N's Halal Kitchen dish — venue photo via Google Maps",
    badgeFloating: "Est. in Sugar Land",
    ribbon: [
      "🏆 #1 Halal Kitchen · Sugar Land",
      "📍 12925 W Bellfort Blvd",
      "⏰ Open 7 Days",
    ] as const,
  },

  howItWorks: {
    headline: "Fresh to you — every single time.",
    steps: [
      {
        iconKey: "ShoppingBag" as CmsIconKey,
        title: "Choose Your Order",
        body: "Browse our full menu online or walk in.",
      },
      {
        iconKey: "ChefHat" as CmsIconKey,
        title: "We Prep Fresh",
        body: "Every dish is made to order — never pre-cooked or frozen.",
      },
      {
        iconKey: "Truck" as CmsIconKey,
        title: "Pickup or Delivery",
        body: "Grab it yourself or get it delivered via DoorDash & Uber Eats.",
      },
      {
        iconKey: "Heart" as CmsIconKey,
        title: "Taste Karachi",
        body: "Experience authentic flavors that keep 1,146+ customers coming back.",
      },
    ],
    doorDashLabel: "Order on DoorDash",
    uberEatsLabel: "Order on Uber Eats",
  },

  halalCommitment: {
    eyebrow: "Our Commitment",
    headline: "100% Zabiha Halal. No exceptions. No compromises.",
    body: `Every protein we serve is hand-cut Zabiha Halal. We never source from non-halal suppliers, never use alcohol-based marinades, and never compromise on what our community deserves. Our kitchen, our standards.`,
    pills: [
      "✓ Hand Cut Zabiha",
      "✓ No Pork · No Alcohol",
      "✓ Fresh Never Frozen",
    ] as const,
    cards: [
      {
        iconKey: "ShieldCheck" as CmsIconKey,
        title: "Zabiha Certified",
        body: "Every meat purchase verified from certified halal slaughterhouses.",
      },
      {
        iconKey: "Leaf" as CmsIconKey,
        title: "Fresh Ingredients",
        body: `Sourced fresh daily. We refuse to serve what we wouldn't eat ourselves.`,
      },
      {
        iconKey: "Users" as CmsIconKey,
        title: "Family Owned",
        body: `A&N's is operated by a Pakistani family who grew up on these recipes.`,
      },
      {
        iconKey: "Star" as CmsIconKey,
        title: "4.9 Google Rating",
        body: "Rated by over 1,146 customers across Sugar Land and greater Houston.",
      },
    ],
  },

  weekendSpecials: {
    badge: "⏰ Weekends Only",
    headline: "Halwa Poori — every Saturday & Sunday morning.",
    body:
      "Our legendary weekend breakfast special: warm semolina halwa, crispy poori, chickpea cholay, and optional qeema. Served 10AM until it runs out — and it always runs out.",
    hoursChip: "Saturdays & Sundays · 10:00 AM – until sold out",
    linkLabel: "Order Weekend Breakfast",
  },

  reviews: {
    eyebrow: "Reviews",
    headline: "What Sugar Land is saying.",
    ratingEmoji: "⭐ 4.9",
    outOf: "out of 5",
    googleLine: "1,146 reviews on Google",
    facebookLine: "★★★★ 4.0 on Facebook",
    rankingLine: "#59 of 830 restaurants in Sugar Land",
    carouselHint: "Showing 5 most recent reviews",
    readAllCta: "Read all reviews on Google",
  },

  instagramGallery: {
    headline: "Fresh food. Real photos.",
    handleLinkLabel: "@theanshalalkitchen on Instagram",
    followCta: "Follow us on Instagram →",
    galleryAlts: [
      "Chicken biryani bowl overhead — golden rice and spices",
      "Naan bread fresh from the tandoor",
      "Beef nihari in a steaming bowl",
      "Bihari kebab rolled in paratha",
      "Halwa poori breakfast plate",
      "Chicken karahi in a wok",
      "Pakistani restaurant table setting",
      "Spiced crispy fried chicken",
      "Desi chai in a cup",
    ] as const,
    mapsAltFirstTile: "A&N's Halal Kitchen — venue photo shared on Google Maps",
    fallbackAlt: "Pakistani halal cuisine",
  },

  reservations: {
    eyebrow: "Dine in & catering",
    headline: "Book a table or place a catering order.",
    intro:
      "Whether it's a family dinner, a group gathering, or a catering event, A&N's Halal Kitchen is ready to serve you. Our 20–25 seat dine-in space is cozy, clean and welcoming.",
    locationTitle: "Location",
    directionsCta: "Get Directions →",
    phoneTitle: "Call Us",
    phoneHint: "tap to call",
    clockTitle: "Hours",
  },

  contact: {
    headline: "Find us. Feed yourself.",
    formTitle: "Send us a message",
    labels: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
    },
    submit: "Send message",
    visitTitle: "Visit Us",
    directionsLink: "Open in Google Maps →",
    phoneTitle: "Call Us",
    emailTitle: "Email",
    socialTitle: "Follow Us",
    mapLoading: "Loading map…",
  },

  newsletter: {
    eyebrow: "Newsletter",
    headline: "Get weekly specials & menu updates.",
    sub: "Weekend Halwa Poori alerts. Seasonal dishes. Catering deals.",
    emailPlaceholder: "Your email",
    join: "Join",
    disclaimer: "No spam. Unsubscribe anytime.",
    or: "Or",
    ready: "Ready to order now?",
    doorDash: "DoorDash",
    uberEats: "Uber Eats",
  },

  footer: {
    sublineKicker: "Zabiha Halal · Sugar Land, TX",
    taglineItalic: "Straight from Karachi. Served with love.",
    columnMenu: "Menu",
    columnHours: "Hours",
    columnOrder: "Order Online",
    hourLines: [
      "Mon – Fri: 11:00 AM – 10:00 PM",
      "Sat – Sun: 10:00 AM – 10:00 PM",
    ] as const,
    halwaHoursNote: "Halwa Poori: Weekends only — until sold out",
    doorDashLabel: "DoorDash",
    uberEatsLabel: "Uber Eats",
    copyrightYear: "2026",
    copyrightRestaurant: "A&N's Halal Kitchen",
    copyrightRights: "All rights reserved.",
    legalLinks: "Privacy Policy · Halal Certification · Accessibility",
    halalStripe: "🟢 100% Zabiha Handcut Halal — Certified & Family Owned",
    mapsAttributionLead: "Some venue photos come from the",
    mapsAttributionMapsWord: "Google Maps",
    mapsAttributionTrail: "listing. Contributor credits:",
    mapsAttributionFile: "ATTRIBUTION.txt",
  },
} as const;
