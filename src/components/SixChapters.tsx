import React from 'react';
import { CHAPTERS } from '../data/content';

export const SixChapters: React.FC = () => {
  return (
    <section id="capitulos" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#166245] bg-[#DCEFE5] px-3.5 py-1 rounded-full inline-block mb-3">
            Estructura Completa del Libro
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#073B4C] tracking-tight mb-4">
            Un recorrido práctico en 6 etapas
          </h2>
          <p className="text-base sm:text-lg text-[#073B4C]/85 leading-relaxed">
            Paso a paso, desde los fundamentos de la congelación hasta menús completos y el uso óptimo de tu asistente culinario:
          </p>
        </div>

        {/* 6 Chapters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CHAPTERS.map((chapter) => (
            <div
              key={chapter.number}
              className="bg-[#F7F5EF] rounded-3xl p-6 sm:p-8 border border-[#073B4C]/10 flex flex-col justify-between hover:border-[#2F8F68]/30 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-black tracking-widest text-[#166245] uppercase bg-white px-3 py-1 rounded-full border border-[#073B4C]/5">
                    {chapter.number}
                  </span>
                  <span className="text-xs font-semibold text-[#073B4C]/80">
                    Etapa {chapter.number}
                  </span>
                </div>

                <h3 className="text-xl font-black text-[#073B4C] mb-2 leading-snug">
                  {chapter.title}
                </h3>

                <p className="text-sm font-bold text-[#166245] mb-3">
                  {chapter.benefit}
                </p>

                <p className="text-xs sm:text-sm text-[#073B4C]/85 leading-relaxed">
                  {chapter.detail}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#073B4C]/10 flex items-center justify-between text-xs text-[#073B4C]/80">
                <span>Contenido guiado</span>
                <span className="font-semibold text-[#166245]">100% práctico</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-[#073B4C]/80 font-medium">
            Formato digital descargable (PDF de alta resolución) para leer en tu teléfono, tablet, computador o imprimir.
          </p>
        </div>

      </div>
    </section>
  );
};
