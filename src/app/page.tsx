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

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <StatsBar />

      {/* WhyChooseUs + OurHoney with shared background */}
      <div
        className="relative bg-no-repeat"
        style={{ backgroundImage: "url('/images/second-page-bg.png')", backgroundSize: "100% 100%" }}
      >
        <WhyChooseUs />
        <OurHoney />
      </div>
      {/* HivesToHome + OurStory with shared background */}
      <div
        className="relative bg-no-repeat"
        style={{ backgroundImage: "url('/images/3rdpage.png')", backgroundSize: "100% 100%" }}
      >
        <HivesToHome />
        <OurStory />
      </div>
      <DeliverySection />
      <HowToOrder />
      <HoneyTips />
      <Footer />
    </>
  );
}
