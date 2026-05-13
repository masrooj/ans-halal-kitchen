import type { Metadata } from "next";
import Script from "next/script";
import { Toaster } from "sonner";
import { display, sans } from "@/lib/fonts";
import { LenisProvider } from "@/components/layout/LenisProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "A&N's Halal Kitchen | Authentic Pakistani Halal Food — Sugar Land, TX",
  description:
    "Sugar Land's #1 Halal restaurant. Authentic Zabiha Halal Pakistani cuisine — Biryani, Nihari, Bihari Kabab Rolls, Halwa Poori & more. Dine-in, takeout & delivery via DoorDash & Uber Eats. Open 7 days at 12925 W Bellfort Blvd.",
  keywords: [
    "halal restaurant sugar land",
    "pakistani restaurant texas",
    "zabiha halal sugar land",
    "biryani houston",
    "halwa poori sugar land",
    "ANs halal kitchen",
  ],
  openGraph: {
    title: "A&N's Halal Kitchen — Karachi Recipes in Sugar Land, TX",
    description:
      "4.9 ⭐ on Google · Zabiha Halal · Biryani · Kabab Rolls · Halwa Poori",
    type: "website",
    locale: "en_US",
  },
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "A&N's Halal Kitchen",
  address: {
    "@type": "PostalAddress",
    streetAddress: "12925 W Bellfort Blvd",
    addressLocality: "Sugar Land",
    addressRegion: "TX",
    postalCode: "77478",
  },
  telephone: "+12817415033",
  servesCuisine: ["Pakistani", "Halal", "South Asian"],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1146",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "11:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "10:00",
      closes: "22:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="bg-ans-cream font-sans text-ans-charcoal antialiased">
        <Script
          id="restaurant-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
        <LenisProvider>
          {children}
          <Toaster position="top-center" richColors closeButton />
        </LenisProvider>
      </body>
    </html>
  );
}
