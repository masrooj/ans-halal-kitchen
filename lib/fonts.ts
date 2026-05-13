import { Cormorant_Garamond, Inter } from "next/font/google";

export const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
