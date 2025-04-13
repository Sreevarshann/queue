
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeOffer from "@/components/WhatWeOffer";
import CoreServices from "@/components/CoreServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import LiveDemos from "@/components/LiveDemos";
import BlogPreview from "@/components/BlogPreview";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WhatWeOffer />
      <CoreServices />
      <WhyChooseUs />
      <IndustriesWeServe />
      <LiveDemos />
      <Testimonials />
      <BlogPreview />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
