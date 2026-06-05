/**
 * Maps CMS icon keys → lucide-react components (keep UI logic out of JSON-like blobs).
 */

import {
  ChefHat,
  Heart,
  Leaf,
  ShieldCheck,
  ShoppingBag,
  Star,
  Truck,
  Users,
} from "lucide-react";

export const CMS_ICONS = {
  ShoppingBag,
  ChefHat,
  Truck,
  Heart,
  ShieldCheck,
  Leaf,
  Users,
  Star,
} as const;

export type CmsIconKey = keyof typeof CMS_ICONS;
