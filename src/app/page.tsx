import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurHoney from "@/components/OurHoney";
import HivesToHome from "@/components/HivesToHome";
import OurStory from "@/components/OurStory";
import DeliverySection from "@/components/DeliverySection";
import HowToOrder from "@/components/HowToOrder";
import HoneyTips from "@/components/HoneyTips";
import Footer from "@/components/Footer";

/* Mobile-only full-width image banner between sections */
function MobileBanner({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="md:hidden relative w-full h-44 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/50" />
    </div>
  );
}

/* Thin honey accent line divider — mobile only */
function MobileDivider() {
  return (
    <div className="md:hidden flex items-center justify-center py-3">
      <div className="w-12 h-0.5 rounded-full bg-honey/40" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <StatsBar />

      {/* WhyChooseUs + OurHoney with shared background */}
      <div className="relative bg-no-repeat section-bg-2">
        <WhyChooseUs />
        <MobileDivider />
        <OurHoney />
      </div>

      {/* Mobile banner: multiflora honey between sections */}
      <MobileBanner src="/images/mobile/multiflora-mobile.webp" alt="Multiflora honey" />

      {/* HivesToHome + OurStory with shared background */}
      <div className="relative bg-no-repeat section-bg-3">
        <HivesToHome />
        <MobileDivider />
        <OurStory />
      </div>

      {/* Mobile banner: litchi honey image */}
      <MobileBanner src="/images/mobile/litchi-mobile.webp" alt="Litchi honey" />

      <DeliverySection />

      {/* Mobile banner: forest honey image */}
      <MobileBanner src="/images/mobile/forest-mobile.webp" alt="Forest honey" />

      <HowToOrder />
      <HoneyTips />
      <Footer />
    </>
  );
}
