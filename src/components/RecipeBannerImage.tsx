import React from 'react';

export const RecipeBannerImage: React.FC = () => {
  return (
    <section id="vista-previa-recetas-banner" className="pt-12 md:pt-16 pb-2 md:pb-4 bg-white relative">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          id="contenedor-foto-recetas-banner"
          className="relative rounded-3xl overflow-hidden border border-[#073B4C]/10 shadow-md hover:shadow-xl transition-all duration-300 bg-[#F7F5EF] p-2 sm:p-3 group"
        >
          <img
            id="foto-recetas-banner"
            src="https://i.imgur.com/9PQZqYT.jpeg"
            alt="Muestrario de recetas y preparaciones del método Batch Cooking"
            className="w-full h-auto object-contain max-h-[750px] mx-auto block rounded-2xl group-hover:scale-[1.01] transition-transform duration-500"
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/assets/recetas-banner-imgur.jpg';
            }}
          />
        </div>
      </div>
    </section>
  );
};
