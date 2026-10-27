import JsonLd from "@/components/seo/JsonLd";
import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/hero/Hero";
import BrandIntro from "@/components/sections/BrandIntro";
import ServicesSection from "@/components/services/ServicesSection";
import PuritySection from "@/components/sections/PuritySection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ServiceArea from "@/components/sections/ServiceArea";
import HowItWorks from "@/components/sections/HowItWorks";
import ConversionCta from "@/components/sections/ConversionCta";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main className="flex-1 w-full overflow-x-hidden">
        <Hero />
        <BrandIntro />
        <ServicesSection />
        <PuritySection />
        <WhyChooseUs />
        <ServiceArea />
        <HowItWorks />
        <ConversionCta />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
