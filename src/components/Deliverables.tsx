import React from 'react';
import { ChefHat, BookOpen, Bot, Check, Sparkles } from 'lucide-react';

export const Deliverables: React.FC = () => {
  return (
    <section id="entregables" className="py-16 md:py-24 bg-[#F7F5EF] relative border-t border-[#073B4C]/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2F8F68] bg-[#DCEFE5] px-3 py-1 rounded-full inline-block mb-3">
            Todo lo que recibes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#073B4C] tracking-tight mb-4">
            Componentes Incluidos en el Sistema
          </h2>
          <p className="text-base sm:text-lg text-[#073B4C]/80">
            Un conjunto estructurado y articulado para transformar tu cocina en un espacio eficiente y relajado.
          </p>
        </div>

        {/* 3 Deliverables Grid - Homogeneous 3-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* Deliverable 1: MÉTODO INTELIGENTE */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#2F8F68] shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 bg-[#2F8F68] text-white text-xs font-black uppercase px-4 py-1.5 rounded-bl-2xl tracking-wider">
              SISTEMA PRINCIPAL
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#DCEFE5] text-[#2F8F68] flex items-center justify-center shadow-xs shrink-0">
                  <ChefHat className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold tracking-wider text-[#2F8F68] uppercase block">
                    Entregable 01
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#073B4C] tracking-tight">
                    Método Inteligente de Batch Cooking
                  </h3>
                </div>
              </div>

              {/* Imagen del Entregable 1 */}
              <div className="my-4 rounded-2xl overflow-hidden border border-[#2F8F68]/20 bg-[#F7F5EF] p-2 sm:p-3 flex items-center justify-center group shadow-xs">
                <img
                  src="https://i.imgur.com/laxAuvB.jpeg"
                  alt="Entregable 01: Método Inteligente de Batch Cooking"
                  className="w-full h-auto max-h-[280px] sm:max-h-[320px] object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/assets/entregable-1.jpg';
                  }}
                />
              </div>

              <p className="text-sm sm:text-base text-[#073B4C]/85 leading-relaxed mb-5">
                El sistema principal para aprender a planificar y preparar comidas por lotes, reduciendo la necesidad de cocinar desde cero todos los días.
              </p>

              <div className="space-y-2.5 pt-2 border-t border-[#073B4C]/10">
                <div className="flex items-center gap-2 text-sm text-[#073B4C] font-medium">
                  <Check className="w-4 h-4 text-[#2F8F68] shrink-0" />
                  <span>Metodología probada de preparación por lotes</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#073B4C] font-medium">
                  <Check className="w-4 h-4 text-[#2F8F68] shrink-0" />
                  <span>Guías de almacenamiento en frío y descongelado</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#073B4C] font-medium">
                  <Check className="w-4 h-4 text-[#2F8F68] shrink-0" />
                  <span>Estrategia de cocina simultánea en una sola sesión</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#DCEFE5] flex items-center justify-between text-xs font-bold text-[#2F8F68]">
              <span>Eje central del producto</span>
              <span className="bg-[#DCEFE5] px-2.5 py-1 rounded-md text-[#073B4C]">Acceso Inmediato</span>
            </div>
          </div>

          {/* Deliverable 2: RECETAS SALUDABLES */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#073B4C]/10 shadow-sm flex flex-col justify-between hover:border-[#2F8F68]/30 transition-all">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F7F5EF] text-[#073B4C] flex items-center justify-center shrink-0">
                  <BookOpen className="w-6 h-6 text-[#2F8F68]" />
                </div>
                <div>
                  <span className="text-xs font-bold tracking-wider text-[#073B4C]/60 uppercase block">
                    Entregable 02
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#073B4C] tracking-tight">
                    Recetas Saludables de Cocina
                  </h3>
                </div>
              </div>

              {/* Imagen del Entregable 2 */}
              <div className="my-4 rounded-2xl overflow-hidden border border-[#073B4C]/10 bg-[#F7F5EF] p-2 sm:p-3 flex items-center justify-center group shadow-xs">
                <img
                  src="https://i.imgur.com/aCLvdm2.jpeg"
                  alt="Entregable 02: Recetas Saludables de Cocina"
                  className="w-full h-auto max-h-[280px] sm:max-h-[320px] object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/assets/entregable-2.jpg';
                  }}
                />
              </div>

              <p className="text-sm sm:text-base text-[#073B4C]/85 leading-relaxed mb-5">
                Recetas estructuradas para preparar comidas variadas, deliciosas y optimizadas para conservación.
              </p>

              <div className="space-y-2.5 pt-2 border-t border-[#073B4C]/10">
                <div className="flex items-center gap-2 text-sm text-[#073B4C] font-medium">
                  <Check className="w-4 h-4 text-[#2F8F68] shrink-0" />
                  <span>Platos familiares variados y balanceados</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#073B4C] font-medium">
                  <Check className="w-4 h-4 text-[#2F8F68] shrink-0" />
                  <span>Ingredientes cotidianos y accesibles</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#073B4C] font-medium">
                  <Check className="w-4 h-4 text-[#2F8F68] shrink-0" />
                  <span>Optimizadas para conservación en frío</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#073B4C]/10 flex items-center justify-between text-xs font-semibold text-[#073B4C]/70">
              <span>Guía culinaria práctica</span>
              <span className="bg-[#F7F5EF] px-2.5 py-1 rounded-md text-[#073B4C]">Recetario Completo</span>
            </div>
          </div>

          {/* Deliverable 3: CHEF CAROL */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#073B4C]/10 shadow-sm flex flex-col justify-between hover:border-[#2F8F68]/30 transition-all">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F7F5EF] text-[#073B4C] flex items-center justify-center shrink-0">
                  <Bot className="w-6 h-6 text-[#2F8F68]" />
                </div>
                <div>
                  <span className="text-xs font-bold tracking-wider text-[#073B4C]/60 uppercase block">
                    Entregable 03
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#073B4C] tracking-tight">
                    Chef Carol — Agente de IA
                  </h3>
                </div>
              </div>

              {/* Imagen del Entregable 3 */}
              <div className="my-4 rounded-2xl overflow-hidden border border-[#073B4C]/10 bg-[#F7F5EF] p-2 sm:p-3 flex items-center justify-center group shadow-xs">
                <img
                  src="https://i.imgur.com/4rMPIki.jpeg"
                  alt="Entregable 03: Chef Carol — Agente de IA"
                  className="w-full h-auto max-h-[280px] sm:max-h-[320px] object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/assets/entregable-3.jpg';
                  }}
                />
              </div>

              <p className="text-sm sm:text-base text-[#073B4C]/85 leading-relaxed mb-5">
                Apoyo culinario interactivo para ideas instantáneas, planificación y cálculo de macros y calorías.
              </p>

              <div className="space-y-2.5 pt-2 border-t border-[#073B4C]/10">
                <div className="flex items-center gap-2 text-sm text-[#073B4C] font-medium">
                  <Check className="w-4 h-4 text-[#2F8F68] shrink-0" />
                  <span>Generador de combinaciones inteligentes</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#073B4C] font-medium">
                  <Check className="w-4 h-4 text-[#2F8F68] shrink-0" />
                  <span>Cálculo de macros y porciones estimado</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#073B4C] font-medium">
                  <Check className="w-4 h-4 text-[#2F8F68] shrink-0" />
                  <span>Soporte personalizado en planificación</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#073B4C]/10 flex items-center justify-between text-xs font-semibold text-[#2F8F68]">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Herramienta de asistencia</span>
              </div>
              <span className="bg-[#DCEFE5] px-2.5 py-1 rounded-md text-[#2F8F68] font-bold">Incluido</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
