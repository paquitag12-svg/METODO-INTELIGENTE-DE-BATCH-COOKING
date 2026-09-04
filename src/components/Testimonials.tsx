import React from 'react';
import { TESTIMONIALS } from '../data/content';
import { Star, MapPin, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#DCEFE5] text-[#073B4C] text-xs font-bold uppercase tracking-wider mb-3">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400 stroke-amber-400" />
              ))}
            </div>
            <span className="ml-1">Experiencias en LATAM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#073B4C] tracking-tight mb-4">
            Lo que dicen quienes ya organizan sus comidas
          </h2>

          <p className="text-base sm:text-lg text-[#073B4C]/80">
            Historias reales de personas que dejaron de improvisar y aplicaron el método en su cocina.
          </p>
        </div>

        {/* 3 Columns Desktop, 1 Column Mobile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((testimonio) => (
            <div
              key={testimonio.id}
              className="bg-[#F7F5EF] rounded-3xl p-6 sm:p-7 border border-[#073B4C]/10 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-[#2F8F68]/30 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#2F8F68]/30" />
                </div>

                <p className="text-sm sm:text-base text-[#073B4C] font-medium leading-relaxed italic mb-6">
                  "{testimonio.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#073B4C]/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-black text-[#073B4C]">
                    {testimonio.name}
                  </h4>
                  <p className="text-xs text-[#073B4C]/70 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#2F8F68]" />
                    <span>{testimonio.location}</span>
                  </p>
                </div>

                <span className="text-[10px] font-bold text-[#2F8F68] bg-[#DCEFE5] px-2 py-0.5 rounded">
                  Verificado
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer for Testimonials (CRO & Compliance) */}
        <div className="mt-10 text-center max-w-2xl mx-auto">
          <p className="text-xs text-[#073B4C]/60 italic leading-relaxed">
            * Los testimonios presentados corresponden a experiencias personales de usuarios. No constituyen una promesa, afirmación médica ni garantía de resultados típicos de pérdida de peso o ahorro. Cada hogar y rutina es diferente.
          </p>
        </div>

      </div>
    </section>
  );
};
