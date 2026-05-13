import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileOrderBar } from "@/components/layout/MobileOrderBar";
import { Hero } from "@/components/sections/Hero";
import { MarqueeTrustBar } from "@/components/sections/MarqueeTrustBar";
import { OurStory } from "@/components/sections/OurStory";
import { MenuSection } from "@/components/sections/MenuSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { HalalCommitment } from "@/components/sections/HalalCommitment";
import { WeekendSpecials } from "@/components/sections/WeekendSpecials";
import { Reviews } from "@/components/sections/Reviews";
import { InstagramGallery } from "@/components/sections/InstagramGallery";
import { Reservations } from "@/components/sections/Reservations";
import { ContactUs } from "@/components/sections/ContactUs";
import { NewsletterCTA } from "@/components/sections/NewsletterCTA";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pb-[5.5rem] md:pb-0">
        <Hero />
        <MarqueeTrustBar />
        <OurStory />
        <MenuSection />
        <HowItWorks />
        <HalalCommitment />
        <WeekendSpecials />
        <Reviews />
        <InstagramGallery />
        <Reservations />
        <ContactUs />
        <NewsletterCTA />
      </main>
      <Footer />
      <MobileOrderBar />
    </>
  );
}
