import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onCtaClick?: () => void;
  onGalleryClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCtaClick, onGalleryClick }) => {
  const handleClick = () => {
    if (onGalleryClick) {
      onGalleryClick();
    } else if (onCtaClick) {
      onCtaClick();
    } else {
      const el = document.getElementById('galeria');
      if (el) {
        const navOffset = 70;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <header className="w-full bg-white/70 backdrop-blur-md border-b border-[#073B4C]/10 sticky top-0 z-40 transition-all">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#2F8F68]" />
          <span className="text-base sm:text-lg lg:text-xl font-black tracking-tight text-[#2F8F68]">
            MÉTODO INTELIGENTE
          </span>
          <span className="hidden lg:inline text-[#073B4C]/30 text-sm">|</span>
          <span className="hidden lg:inline text-xs font-medium text-[#073B4C]/70">
            Batch Cooking Familiar
          </span>
        </div>
        
        {/* Right side trust & action */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden lg:flex items-center gap-1.5 text-xs font-medium text-[#073B4C]/80">
            <ShieldCheck className="w-4 h-4 text-[#2F8F68]" />
            <span>Garantía de 7 días [Supuesto]</span>
          </div>

          <div className="hidden sm:flex items-center bg-[#DCEFE5] text-[#2F8F68] px-2.5 py-1 rounded-full text-xs font-extrabold tracking-tight">
            Solo $6 USD
          </div>

          <button
            onClick={handleClick}
            className="px-3.5 sm:px-5 py-2 bg-[#2F8F68] hover:bg-[#257353] text-white text-xs font-bold rounded-full transition-all shadow-xs flex items-center gap-1.5 cursor-pointer group whitespace-nowrap shrink-0"
          >
            <span className="hidden sm:inline">QUIERO ORGANIZAR MIS COMIDAS — $6</span>
            <span className="sm:hidden">ORGANIZAR — $6</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
