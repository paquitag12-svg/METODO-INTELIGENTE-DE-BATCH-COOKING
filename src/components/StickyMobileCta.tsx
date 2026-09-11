import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface StickyMobileCtaProps {
  onCtaClick: () => void;
}

export const StickyMobileCta: React.FC<StickyMobileCtaProps> = ({ onCtaClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling past 450px
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md p-3 border-t-2 border-[#073B4C]/15 shadow-2xl transition-all duration-300">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <span className="text-[11px] font-extrabold text-[#073B4C] leading-none">
            Método Inteligente
          </span>
          <span className="text-[10px] text-[#134E39] font-bold flex items-center gap-0.5 mt-0.5">
            <ShieldCheck className="w-3 h-3 text-[#166245]" />
            7 días de garantía [Supuesto]
          </span>
        </div>

        <button
          onClick={onCtaClick}
          className="px-4 py-2.5 bg-[#134E39] hover:bg-[#0E3B2B] text-white text-xs font-black rounded-xl shadow-lg shadow-[#134E39]/30 flex items-center gap-1.5 cursor-pointer whitespace-nowrap active:scale-95 transition-all border border-[#166245]"
        >
          <span>ORGANIZAR COMIDAS</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
