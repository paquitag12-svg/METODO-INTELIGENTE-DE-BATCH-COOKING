import React from 'react';

export const ChaptersBannerImage: React.FC = () => {
  return (
    <section id="banner-capitulos-intro" className="pt-2 sm:pt-4 pb-10 sm:pb-14 bg-[#F7F5EF] relative">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          id="contenedor-foto-capitulos-intro"
          className="relative rounded-3xl overflow-hidden border border-[#073B4C]/10 shadow-md hover:shadow-xl transition-all duration-300 bg-white p-2 sm:p-3 group"
        >
          <img
            id="foto-capitulos-intro"
            src="https://i.imgur.com/bvQwLvI.jpeg"
            width={1175}
            height={912}
            alt="Muestrario visual del contenido del libro y recetas"
            className="w-full h-auto object-contain max-h-[750px] mx-auto block rounded-2xl group-hover:scale-[1.01] transition-transform duration-500"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
};
