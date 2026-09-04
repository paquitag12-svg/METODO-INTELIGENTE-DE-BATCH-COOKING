import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section id="garantia" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-[850px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Guarantee Box */}
        <div className="rounded-3xl bg-[#F7F5EF] p-8 sm:p-12 border-2 border-[#2F8F68]/30 shadow-md relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            
            {/* Guarantee Badge / Seal */}
            <div className="shrink-0">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#073B4C] text-[#DCEFE5] flex flex-col items-center justify-center p-3 shadow-xl border-4 border-[#2F8F68]">
                <ShieldCheck className="w-10 h-10 text-[#2F8F68] mb-0.5" />
                <span className="text-xl sm:text-2xl font-black text-white leading-none">7 DÍAS</span>
                <span className="text-[10px] font-bold tracking-wider text-[#DCEFE5] uppercase mt-0.5">GARANTÍA</span>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2F8F68] bg-[#DCEFE5] px-3 py-1 rounded-full inline-block">
                Compra protegida
              </span>

              <h2 className="text-2xl sm:text-3xl font-black text-[#073B4C] tracking-tight">
                Empieza con tranquilidad.
              </h2>

              <p className="text-base sm:text-lg font-bold text-[#073B4C]">
                Tienes 7 días para conocer el método.
              </p>

              <p className="text-sm text-[#073B4C]/80 leading-relaxed">
                La compra incluye una garantía de satisfacción de 7 días [Supuesto].
              </p>

              <p className="text-sm text-[#073B4C]/85 leading-relaxed bg-white p-4 rounded-xl border border-[#073B4C]/10">
                Si durante los primeros 7 días consideras que el método no cumple con tus expectativas, podrás solicitar el reembolso siguiendo el procedimiento establecido por la plataforma de compra.
              </p>

              <div className="flex items-center justify-center md:justify-start gap-2 pt-1 text-xs text-[#073B4C]/60 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#2F8F68]" />
                <span>Sin preguntas complicadas ni trámites engorrosos</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
