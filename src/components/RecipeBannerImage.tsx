import React from 'react';
import { BookOpen, CheckCircle2 } from 'lucide-react';

export const RecipeBannerImage: React.FC = () => {
  const chapters = [
    { num: 'Capítulo 1', title: 'Pollo', desc: 'Recetas jugosas y marinados listos para congelar' },
    { num: 'Capítulo 2', title: 'Carne', desc: 'Cortes y preparaciones que conservan su textura' },
    { num: 'Capítulo 3', title: 'Pescado', desc: 'Técnicas de congelación sin perder frescura' },
    { num: 'Capítulo 4', title: 'Recetas Vegetarianas', desc: 'Platos completos ricos en fibra y proteína vegetal' },
    { num: 'Capítulo 5', title: 'Sopas, granos y guisos', desc: 'Platos reconfortantes listos para calentar y servir' },
    { num: 'Capítulo 6', title: 'Desayunos y snacks saludables', desc: 'Opciones prácticas para arrancar el día sin apuros' },
    { num: 'Capítulo 7', title: 'Salsas, bases y acompañamientos para congelar', desc: 'El secreto para transformar cualquier comida en minutos' },
    { num: 'Capítulo 8', title: 'Cenas de entre semana, almuerzos rápidos, meriendas para los niños', desc: 'Soluciones todoterreno para toda la familia' },
  ];

  return (
    <section id="vista-previa-recetas-banner" className="py-12 md:py-16 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          id="contenedor-foto-recetas-banner"
          className="rounded-3xl border border-[#073B4C]/10 bg-[#F7F5EF] p-6 sm:p-8 md:p-12 shadow-sm"
        >
          {/* Encabezado */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2F8F68]/10 text-[#2F8F68] font-bold text-xs sm:text-sm tracking-wide">
              <BookOpen className="w-4 h-4 text-[#2F8F68]" />
              <span>Contenido completo del libro</span>
            </div>

            <h3 className="font-['Montserrat'] font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#073B4C] leading-tight">
              ¡Todo lo que necesitas, organización al Toque!
            </h3>

            <p className="text-base sm:text-lg text-[#073B4C]/80 leading-relaxed font-medium">
              Este libro, almuerzos rápidos, snacks para toda la familia y postres para consentirte.
            </p>
          </div>

          {/* Grid de Capítulos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {chapters.map((cap, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#073B4C]/10 shadow-xs hover:border-[#2F8F68]/40 hover:shadow-sm transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-xl bg-[#2F8F68]/10 text-[#2F8F68] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  <CheckCircle2 className="w-5 h-5 text-[#2F8F68]" />
                </div>
                <div className="space-y-0.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#118AB2]">
                    {cap.num}
                  </div>
                  <h4 className="font-['Montserrat'] font-bold text-base sm:text-lg text-[#073B4C] leading-snug">
                    {cap.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#073B4C]/70 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

