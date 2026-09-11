import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section id="hero" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-[#F7F5EF] border-b border-[#073B4C]/10">
      <div className="max-w-[850px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* System Eyebrow in Clean Minimalism style */}
        <span className="text-xs sm:text-sm font-bold text-[#166245] uppercase tracking-[0.2em] mb-4 inline-block">
          ¿Qué voy a cocinar hoy?
        </span>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#073B4C] leading-[1.02] tracking-tighter mb-4">
          Organiza tus comidas hoy.
        </h1>

        {/* Subheadline */}
        <p className="text-2xl sm:text-3xl font-bold text-[#166245] tracking-tight mb-6">
          Disfruta de más tiempo todo el mes.
        </p>

        {/* Main Body Copy */}
        <div className="text-base sm:text-lg text-[#073B4C]/85 leading-relaxed mb-6 max-w-2xl">
          <p className="font-semibold text-[#073B4C]">
            Porque cuando tienes un sistema para organizar tus comidas, sabes qué preparar, qué comprar y cuándo cocinar.
          </p>
        </div>

        {/* Hero Image */}
        <div className="w-full max-w-2xl mb-8 overflow-hidden rounded-2xl sm:rounded-3xl border border-[#073B4C]/10 shadow-sm bg-white p-2 sm:p-2.5">
          <img
            id="foto-hero"
            src="https://i.imgur.com/karl0fx.jpeg"
            width={1536}
            height={1024}
            fetchPriority="high"
            loading="eager"
            decoding="async"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/hero-batch-cooking.jpg';
            }}
            alt="Método Inteligente de Batch Cooking - Planificación y preparación de comidas"
            className="w-full h-auto rounded-xl sm:rounded-2xl object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Clean Minimalism Micro Testimonial Card */}
        <div className="w-full max-w-xl mb-8 p-4 sm:p-5 bg-white border border-[#073B4C]/10 rounded-2xl shadow-xs text-left">
          <div className="flex gap-3 items-start">
            <div className="w-6 h-6 bg-[#DCEFE5] text-[#2F8F68] rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-black">
              ✓
            </div>
            <div>
              <p className="text-sm italic text-[#073B4C]/85 leading-snug">
                "Llego del trabajo y la comida ya está lista en el refrigerador. Cero estrés para alimentar a la familia."
              </p>
              <p className="text-xs font-bold text-[#073B4C] mt-1.5 not-italic">
                — Paula Santos, Mamá trabajadora (Bogotá)
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
          <button
            id="hero-cta-btn"
            onClick={onCtaClick}
            className="w-full sm:w-auto px-10 py-4 bg-[#134E39] hover:bg-[#0E3B2B] text-white text-base sm:text-lg font-extrabold rounded-full shadow-lg shadow-[#134E39]/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 cursor-pointer group border border-[#166245]"
          >
            <span>QUIERO ORGANIZAR MIS COMIDAS</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Guarantee / Security Indicator */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-[#073B4C]/85">
          <ShieldCheck className="w-4 h-4 text-[#166245]" />
          <span>Garantía de satisfacción de 7 días [Supuesto]</span>
        </div>

      </div>
    </section>
  );
};
