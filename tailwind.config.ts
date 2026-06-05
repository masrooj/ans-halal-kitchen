import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./cms/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ans: {
          emerald: "#0F2D1F",
          "emerald-mid": "#1A4A2E",
          gold: "#C9A84C",
          "gold-light": "#E8C97A",
          cream: "#FAF6EE",
          "cream-dark": "#F0E9DA",
          crimson: "#8B1A1A",
          charcoal: "#1C1C1C",
          muted: "#6B6663",
          white: "#FEFEFE",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
