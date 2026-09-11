import React from 'react';
import { Lock, ShieldCheck, Laptop } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-white text-[#073B4C] py-10 px-4 sm:px-8 border-t border-[#073B4C]/10">
      <div className="max-w-[1200px] mx-auto space-y-6">
        
        {/* Brand Name & Tagline */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-[#073B4C]/10">
          <div>
            <p className="text-lg sm:text-xl font-extrabold tracking-tight text-[#166245]">
              MÉTODO INTELIGENTE DE BATCH COOKING
            </p>
            <p className="text-xs sm:text-sm text-[#073B4C]/80 mt-0.5">
              Organiza tus comidas. Cocina por lotes. Disfruta más de tu tiempo.
            </p>
          </div>

          {/* Trust Badges Bar */}
          <div className="flex items-center gap-4 text-xs font-semibold text-[#073B4C]/80">
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-[#166245]" />
              Pago seguro
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Laptop className="w-3.5 h-3.5 text-[#166245]" />
              Acceso digital
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#166245]" />
              Garantía de 7 días [Supuesto]
            </span>
          </div>
        </div>

        {/* Copyright & Meta */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-medium text-[#073B4C]/75">
          <p>© {new Date().getFullYear()} MÉTODO INTELIGENTE DE BATCH COOKING. TODOS LOS DERECHOS RESERVADOS.</p>
          <p className="text-[10px] text-[#073B4C]/70">PAGO SEGURO · ACCESO DIGITAL INMEDIATO</p>
        </div>

      </div>
    </footer>
  );
};
