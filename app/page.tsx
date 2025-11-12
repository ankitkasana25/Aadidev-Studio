"use client";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import GallerySection from "@/components/gallery-section";
import ServicesSection from "@/components/services-section";
import ContactSection from "@/components/contact-section";
import FloatingWhatsApp from "@/components/floating-whatsapp";
import BackToTop from "@/components/back-to-top";
import Footer from "@/components/footer";
import CategoriesGrid from "@/components/categories-grid";
import WhatWeSell from "@/components/WhatWeSell";
import ClientScroller from "@/components/ClientLogos";
import BlogSection from "@/components/BlogSection";
import WhatOurClientsSay from "@/components/WhatOurClientsSay";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhatWeSell />
      <CategoriesGrid />
      <GallerySection />
      <ServicesSection />
      <ClientScroller />
      <BlogSection />
      <WhatOurClientsSay />
      <ContactSection />
      <FloatingWhatsApp />
      <BackToTop />
    </main>
  );
}
