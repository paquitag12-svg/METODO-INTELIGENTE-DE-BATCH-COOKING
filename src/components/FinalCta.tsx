import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface FinalCtaProps {
  onCtaClick: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onCtaClick }) => {
  return (
    <section id="cta-final" className="py-20 md:py-28 bg-[#073B4C] text-white relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#2F8F68]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-[#DCEFE5]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#DCEFE5] text-xs sm:text-sm font-semibold mb-6 border border-white/10">
          <Sparkles className="w-3.5 h-3.5 text-[#2F8F68]" />
          <span>El momento de cambiar la rutina es hoy</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
          Comidas saludables, organizadas y listas para tu familia.
        </h2>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl font-bold text-[#DCEFE5] mb-8">
          Deja de comenzar desde cero todos los días.
        </p>

        {/* 4 Pillars Mantra Text */}
        <div className="max-w-md mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 text-center space-y-1.5">
          <p className="text-lg font-bold text-white tracking-wide">Planifica.</p>
          <p className="text-lg font-bold text-white tracking-wide">Prepara por lotes.</p>
          <p className="text-lg font-bold text-white tracking-wide">Organiza.</p>
          <p className="text-base sm:text-lg font-medium text-[#DCEFE5] pt-2 border-t border-white/10">
            Y disfruta de la tranquilidad de saber qué vas a comer.
          </p>
        </div>

        {/* Headline Final */}
        <div className="mb-10 max-w-xl mx-auto">
          <p className="text-xl sm:text-2xl font-medium text-white/90 leading-snug">
            Tu cocina no necesita más complicaciones.
          </p>
          <p className="text-2xl sm:text-3xl font-black text-[#2F8F68] tracking-tight mt-1">
            Necesita un sistema.
          </p>
        </div>

        {/* Main Final CTA Button */}
        <div className="flex flex-col items-center gap-4">
          <button
            id="final-cta-btn"
            onClick={onCtaClick}
            className="w-full sm:w-auto px-10 py-5 bg-[#134E39] hover:bg-[#0E3B2B] text-white text-lg sm:text-xl font-black rounded-2xl shadow-2xl shadow-black/40 transition-all duration-200 transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3 cursor-pointer group border-2 border-[#166245]"
          >
            <span>QUIERO ORGANIZAR MIS COMIDAS AHORA</span>
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Guarantee Indicator */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#DCEFE5]/80 mt-1">
            <ShieldCheck className="w-4 h-4 text-[#2F8F68]" />
            <span>Garantía de satisfacción de 7 días [Supuesto]</span>
          </div>
        </div>

        {/* Image at the end of the section */}
        <div className="mt-10 sm:mt-12 max-w-2xl mx-auto rounded-3xl overflow-hidden border border-white/15 bg-white/5 p-2 sm:p-3 shadow-2xl">
          <img
            id="foto-cta-final"
            src="https://i.imgur.com/ipjj0BV.jpeg"
            width={890}
            height={667}
            alt="Batch Cooking - Comidas organizadas para tu familia"
            className="w-full h-auto object-cover rounded-2xl"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/assets/cta-final.jpg';
            }}
          />
        </div>

      </div>
    </section>
  );
};
