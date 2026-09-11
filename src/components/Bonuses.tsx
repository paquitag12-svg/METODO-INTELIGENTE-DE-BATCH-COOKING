import React from 'react';
import { Tag, CalendarRange, UtensilsCrossed, Gift } from 'lucide-react';

export const Bonuses: React.FC = () => {
  const bonuses = [
    {
      badge: "BONO 01",
      title: "Sistema de Etiquetado e Inventario para el Congelador",
      description: "Ayuda a organizar las preparaciones y encontrar rápidamente las comidas disponibles.",
      details: "Plantillas descargables para rotular fechas de cocción, ingredientes y raciones, asegurando que nunca olvides qué tienes guardado.",
      icon: Tag,
      image: "https://i.imgur.com/dlDqIHQ.jpeg",
      localImage: "/assets/bono-1.jpg",
    },
    {
      badge: "BONO 02",
      title: "Calendario Mensual de Planificación",
      description: "Herramienta para ayudar a organizar las comidas del mes.",
      details: "Estructura visual práctica para coordinar compras semanales, días de preparación y menús familiares sin sobrecargas.",
      icon: CalendarRange,
      image: "https://i.imgur.com/4ugIzbQ.jpeg",
      localImage: "/assets/bono-2.jpg",
    },
    {
      badge: "BONO 03",
      title: "30 Menús Saludables para Todo el Mes",
      description: "Ideas de comidas para ayudar a planificar el mes sin comenzar desde cero.",
      details: "Combinaciones completas balanceadas y testeadas que te ahorran la decisión de qué comer durante 4 semanas seguidas.",
      icon: UtensilsCrossed,
      image: "https://i.imgur.com/C1gU5o4.jpeg",
      localImage: "/assets/bono-3.jpg",
    },
  ];

  return (
    <section id="bonos" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DCEFE5] text-[#073B4C] text-xs font-bold uppercase tracking-wider mb-3">
            <Gift className="w-3.5 h-3.5 text-[#2F8F68]" />
            Herramientas Exclusivas de Organización
          </div>

          <p className="text-xl font-bold text-[#2F8F68] mb-2">
            Y además…
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#073B4C] tracking-tight">
            Compra hoy y recibe 3 bonos para llevar tu organización al siguiente nivel.
          </h2>
        </div>

        {/* 3 Bonuses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {bonuses.map((bono) => {
            const IconComponent = bono.icon;
            return (
              <div
                key={bono.badge}
                className="bg-[#F7F5EF] rounded-3xl p-6 sm:p-7 border-2 border-[#2F8F68]/30 hover:border-[#2F8F68] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#DCEFE5]/50 rounded-bl-full pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black tracking-widest px-3 py-1 rounded-full bg-[#073B4C] text-white">
                      {bono.badge}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white text-[#2F8F68] flex items-center justify-center shadow-xs group-hover:bg-[#2F8F68] group-hover:text-white transition-colors duration-200">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-[#073B4C] tracking-tight mb-2 leading-snug">
                    {bono.title}
                  </h3>

                  {bono.image && (
                    <div className="my-3.5 rounded-2xl overflow-hidden border border-[#2F8F68]/20 bg-white p-2 sm:p-3 flex items-center justify-center shadow-xs">
                      <img
                        src={bono.image}
                        alt={bono.title}
                        width={1024}
                        height={1024}
                        className="w-full h-auto max-h-[220px] sm:max-h-[260px] object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          if (bono.localImage) {
                            const target = e.target as HTMLImageElement;
                            target.src = bono.localImage;
                          }
                        }}
                      />
                    </div>
                  )}

                  <p className="text-sm font-bold text-[#166245] mb-2.5 leading-relaxed">
                    {bono.description}
                  </p>

                  <p className="text-xs sm:text-sm text-[#073B4C]/80 leading-relaxed">
                    {bono.details}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#073B4C]/10 flex items-center justify-between text-xs font-bold text-[#073B4C]">
                  <span>Incluido en Opción B</span>
                  <span className="text-[#166245] flex items-center gap-1">
                    Acceso Total
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
