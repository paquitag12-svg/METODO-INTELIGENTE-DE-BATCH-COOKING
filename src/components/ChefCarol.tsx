import React from 'react';
import { Bot, Lightbulb, Calculator, CalendarClock, CheckCheck } from 'lucide-react';

export const ChefCarol: React.FC = () => {
  const features = [
    {
      title: "Generar ideas de comidas",
      description: "Propuestas de platos con los ingredientes que ya tienes en casa sin tener que salir a comprar.",
      icon: Lightbulb,
    },
    {
      title: "Apoyar la planificación culinaria",
      description: "Sugerencias inteligentes para combinar preparaciones y optimizar tu sesión de cocina.",
      icon: CalendarClock,
    },
    {
      title: "Ayudar en la organización de comidas",
      description: "Estructura para distribuir raciones y saber qué consumir cada día sin confusiones.",
      icon: CheckCheck,
    },
    {
      title: "Calcular macros y calorías",
      description: "Estimaciones prácticas de calorías, proteínas, grasas y carbohidratos de tus preparaciones.",
      icon: Calculator,
    },
  ];

  return (
    <section id="chef-carol" className="py-14 md:py-20 bg-white relative">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container with restrained visual weight (complementary tool) */}
        <div className="rounded-3xl bg-[#F7F5EF] p-6 sm:p-10 border border-[#073B4C]/10 shadow-sm">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DCEFE5] text-[#073B4C] text-xs font-bold uppercase mb-3">
              <Bot className="w-3.5 h-3.5 text-[#166245]" />
              Complemento del Método
            </div>
            
            <p className="text-sm sm:text-base font-semibold text-[#166245] mb-1">
              Y cuando necesites una mano…
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#073B4C] tracking-tight mb-4">
              Puedes contar con Chef Carol.
            </h2>

            <p className="text-sm sm:text-base text-[#073B4C]/85 leading-relaxed">
              Chef Carol — Agente de IA es un complemento del método que puede ayudarte a generar ideas de comidas, apoyarte en la planificación culinaria y calcular macros y calorías de tus preparaciones.
            </p>
          </div>

          {/* 4 Functions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {features.map((feat) => {
              const IconComponent = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-[#073B4C]/5 shadow-xs flex items-start gap-3.5"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#DCEFE5] text-[#166245] flex items-center justify-center shrink-0 mt-0.5">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#073B4C] mb-1">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-[#073B4C]/85 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Closing Support Framing */}
          <div className="bg-[#073B4C] rounded-2xl p-4 sm:p-5 text-center text-white">
            <p className="text-sm sm:text-base font-semibold text-[#DCEFE5]">
              "Tú sigues teniendo el control. Chef Carol te ayuda con la parte de pensar y organizar."
            </p>
            <p className="text-[11px] text-white/80 mt-1">
              Herramienta de asistencia digital culinaria incluida como apoyo complementario.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
