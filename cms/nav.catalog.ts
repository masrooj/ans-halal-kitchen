/**
 * FILE-BASED CMS — Navigation labels & hrefs (no database).
 */

export const NAVBAR_ORDER_CTA = "Order Now";

export const NAVBAR_MOBILE_ORDER_CTA = "Order Now";

export const NAVBAR_PRIMARY_LINKS = [
  { href: "#story", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#story", label: "Our Story" },
  { href: "#reviews", label: "Reviews" },
  { href: "#order", label: "Order Online" },
  { href: "#contact", label: "Contact" },
] as const;

/** Header logo lines (styled separately in Navbar) */
export const NAVBAR_WORDMARK = {
  line1: "A&N's",
  line2: "Halal Kitchen",
} as const;

export const FOOTER_QUICK_LINKS = [
  { href: "#story", label: "About" },
  { href: "#menu", label: "Full Menu" },
  { href: "#weekend-deals", label: "Weekend Specials" },
  { href: "#menu", label: "Biryani" },
  { href: "#menu", label: "Kabab Rolls" },
  { href: "#menu", label: "Burgers" },
  { href: "#menu", label: "Wings" },
  { href: "#menu", label: "Desserts" },
] as const;
