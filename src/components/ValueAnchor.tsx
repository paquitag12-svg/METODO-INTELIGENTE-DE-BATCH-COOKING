import React from 'react';
import { Sparkles, ArrowDown } from 'lucide-react';

export const ValueAnchor: React.FC = () => {
  return (
    <section id="anclaje-valor" className="py-14 md:py-20 bg-gradient-to-b from-white to-[#F7F5EF] relative">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DCEFE5] text-[#073B4C] text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#2F8F68]" />
          Claridad y transparencia
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#073B4C] tracking-tight mb-6">
          Ahora puedes elegir cómo quieres comenzar.
        </h2>

        <div className="space-y-4 text-base sm:text-lg text-[#073B4C]/85 leading-relaxed max-w-2xl mx-auto mb-8">
          <p>
            Hemos diseñado dos alternativas para adaptarnos a tu momento actual en la cocina:
          </p>
          <p>
            La <strong className="text-[#073B4C]">Opción A</strong> te entrega el sistema central con el método completo, las recetas saludables y el apoyo de Chef Carol. La <strong className="text-[#073B4C]">Opción B</strong> incorpora además las herramientas complementarias de organización, etiquetado y menús para todo el mes.
          </p>
        </div>

        {/* Highlight Banner with exact text */}
        <div className="inline-block bg-[#073B4C] text-white px-6 py-4 rounded-2xl shadow-lg border border-[#2F8F68]/30">
          <p className="text-lg sm:text-xl font-black text-[#DCEFE5]">
            La diferencia entre ambas opciones es de solo USD $3.
          </p>
        </div>

        {/* Visual cue to table below */}
        <div className="mt-8 flex justify-center">
          <ArrowDown className="w-6 h-6 text-[#2F8F68] animate-bounce" />
        </div>

      </div>
    </section>
  );
};
