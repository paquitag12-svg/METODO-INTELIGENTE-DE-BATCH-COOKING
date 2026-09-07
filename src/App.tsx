import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SixChapters } from './components/SixChapters';
import { RecipeGallery } from './components/RecipeGallery';
import { RecipeBannerImage } from './components/RecipeBannerImage';
import { Deliverables } from './components/Deliverables';
import { Bonuses } from './components/Bonuses';
import { Testimonials } from './components/Testimonials';
import { OfferPricing } from './components/OfferPricing';
import { Guarantee } from './components/Guarantee';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { StickyMobileCta } from './components/StickyMobileCta';
import { CheckoutModal } from './components/CheckoutModal';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{ name: string; price: string }>({
    name: 'Opción B — Método + Organización Completa',
    price: 'USD $9',
  });

  const scrollToOffer = () => {
    const offerElement = document.getElementById('oferta');
    if (offerElement) {
      const navOffset = 70;
      const elementPosition = offerElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToGallery = () => {
    const galleryElement = document.getElementById('galeria');
    if (galleryElement) {
      const navOffset = 70;
      const elementPosition = galleryElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSelectPlan = (name: string, price: string) => {
    setSelectedPlan({ name, price });
    setIsCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F5EF] text-[#073B4C] flex flex-col selection:bg-[#2F8F68]/20 selection:text-[#073B4C]">
      {/* Top Notice Header */}
      <Navbar onGalleryClick={scrollToGallery} onCtaClick={scrollToOffer} />

      <main className="flex-1 w-full">
        {/* 1. HERO */}
        <Hero onCtaClick={scrollToOffer} />

        {/* 2. SEIS ETAPAS */}
        <SixChapters />

        {/* 6. GALERÍA DE FOTOS DE RECETAS */}
        <RecipeGallery />

        {/* VISTA PREVIA RECETAS */}
        <RecipeBannerImage />

        {/* 8. ENTREGABLES */}
        <Deliverables />

        {/* 9. BONOS */}
        <Bonuses />

        {/* 10. TESTIMONIOS */}
        <Testimonials />

        {/* 13. OFERTA */}
        <OfferPricing onSelectOption={handleSelectPlan} />

        {/* 14. GARANTÍA */}
        <Guarantee />

        {/* 15. FAQ */}
        <FaqSection />

        {/* 16. CTA FINAL */}
        <FinalCta onCtaClick={scrollToOffer} />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* Sticky Mobile CTA */}
      <StickyMobileCta onCtaClick={scrollToOffer} />

      {/* Checkout Transition Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        selectedPlan={selectedPlan}
      />
    </div>
  );
}

