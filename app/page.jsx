import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductShowcase from "@/components/ProductShowcase";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import WhatWeOffer from "@/components/WhatWeOffer";
import WhoBuysFromUs from "@/components/WhoBuysFromUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import PartnerSection from "@/components/PartnerSection";
import OEMBrandsSection from "@/components/OEMBrands";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />

      <About />

      <ProductShowcase />
         <PartnerSection/>
          <WhyChooseUs />
      <Process />
      <WhatWeOffer />
      <WhoBuysFromUs />
      <OEMBrandsSection/>

      <Testimonials />
      <FAQ />
      <ContactCTA />
      <Footer />
    </main>
  );
}
