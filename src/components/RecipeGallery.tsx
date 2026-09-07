import React from 'react';
import { RECIPE_PHOTOS } from '../data/content';

export const RecipeGallery: React.FC = () => {
  return (
    <section id="galeria" className="py-16 md:py-24 bg-[#F7F5EF] relative border-y border-[#073B4C]/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#073B4C] tracking-tight mb-4">
            Mira un adelanto de lo que vas a encontrar.
          </h2>
          <p className="text-base sm:text-lg text-[#073B4C]/75">
            Recetas saludables, prácticas y pensadas para ayudarte a organizar tus comidas.
          </p>
        </div>

        {/* Recipe Photos Grid: 2 columnas en celular, 3 columnas en PC */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {RECIPE_PHOTOS.map((recipe, index) => (
            <div
              key={recipe.placeholderId || index}
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 border border-[#073B4C]/10 group"
            >
              {/* Clean Photo without overlays or descriptions */}
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                <img
                  src={recipe.imageUrl}
                  alt={`Receta saludable ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    if (recipe.fallbackUrl) {
                      (e.target as HTMLImageElement).src = recipe.fallbackUrl;
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

