import React from 'react';
import { Check, Sparkles } from 'lucide-react';

export const ChaptersBannerImage: React.FC = () => {
  const recipeHighlights = [
    'Verduras al wok',
    'Hamburguesas vegetarianas',
    'Postres fit',
    'Deliciosas las alas',
    'Prácticos wraps',
    'Carne en salsa de champiñones',
  ];

  return (
    <section id="banner-capitulos-intro" className="py-10 sm:py-14 bg-[#F7F5EF] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          id="contenedor-foto-capitulos-intro"
          className="bg-white rounded-3xl border border-[#073B4C]/10 shadow-sm p-6 sm:p-8 md:p-10 transition-all duration-300 hover:shadow-md"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Texto y contenido */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#118AB2]/10 text-[#118AB2] font-bold text-xs sm:text-sm tracking-wide">
                <Sparkles className="w-4 h-4 text-[#FFD166]" />
                <span>Método Inteligente: comidas congeladas</span>
              </div>

              <h3 className="font-['Montserrat'] font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#073B4C] leading-tight">
                Las Comidas Congeladas no tienen por qué ser aburridas
              </h3>

              <p className="text-base sm:text-lg text-[#073B4C]/85 leading-relaxed">
                Con los trucos correctos tu comida sale del congelador como si la acabaras de hacer. Las mamás que ya entraron están cocinando por ejemplo:
              </p>

              {/* Lista destacada de recetas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-2">
                {recipeHighlights.map((recipe, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-[#F7F5EF]/80 border border-[#073B4C]/5 text-sm sm:text-base font-semibold text-[#073B4C]"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#2F8F68] text-white flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>{recipe}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Imagen acompañante optimizada */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#073B4C]/10 shadow-sm bg-[#F7F5EF] p-2">
                <img
                  id="foto-capitulos-intro"
                  src="https://i.imgur.com/asDay2s.jpeg"
                  width={1097}
                  height={736}
                  alt="Comidas congeladas deliciosas preparadas con el Método Inteligente"
                  className="w-full h-auto object-cover rounded-xl shadow-xs transition-transform duration-500 hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

