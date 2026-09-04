import React from 'react';
import { Check, ArrowRight, Star, ShieldCheck, Zap } from 'lucide-react';

interface OfferPricingProps {
  onSelectOption: (optionName: string, price: string) => void;
}

export const OfferPricing: React.FC<OfferPricingProps> = ({ onSelectOption }) => {
  return (
    <section id="oferta" className="py-16 md:py-24 bg-[#F7F5EF] relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2F8F68] bg-[#DCEFE5] px-3 py-1 rounded-full inline-block mb-3">
            Elige tu plan de acceso
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#073B4C] tracking-tight mb-4">
            Comienza hoy mismo a organizar tu cocina
          </h2>
          <p className="text-base sm:text-lg text-[#073B4C]/80">
            Acceso digital inmediato para ver en tu teléfono, tablet o computador.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          
          {/* OPCIÓN A — Método Esencial ($6 USD) */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#073B4C]/15 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold tracking-wider text-[#073B4C]/70 uppercase">
                  OPCIÓN A
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 bg-[#F7F5EF] text-[#073B4C] rounded-lg">
                  Sistema Base
                </span>
              </div>

              <h3 className="text-2xl font-black text-[#073B4C] tracking-tight mb-2">
                Método Esencial
              </h3>

              <p className="text-sm text-[#073B4C]/70 mb-6">
                El sistema central para aprender a planificar y cocinar por lotes.
              </p>

              {/* Price */}
              <div className="mb-8 pb-6 border-b border-[#073B4C]/10">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-black text-[#073B4C] tracking-tight">USD $6</span>
                  <span className="text-xs text-[#073B4C]/60 font-semibold">pago único</span>
                </div>
              </div>

              {/* Includes List */}
              <div className="space-y-4 mb-8">
                <p className="text-xs uppercase font-bold text-[#073B4C]/50 tracking-wider">
                  Incluye:
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#DCEFE5] text-[#2F8F68] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm font-semibold text-[#073B4C]">Método Inteligente de Batch Cooking</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#DCEFE5] text-[#2F8F68] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm font-semibold text-[#073B4C]">Recetas Saludables de Cocina</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#DCEFE5] text-[#2F8F68] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm font-semibold text-[#073B4C]">Chef Carol — Agente de IA</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <a
                id="cta-opcion-a"
                href="https://pay.hotmart.com/C107425084U?checkoutMode=10"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-white hover:bg-[#F7F5EF] text-[#073B4C] border-2 border-[#073B4C] hover:border-[#2F8F68] hover:text-[#2F8F68] text-base font-extrabold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-xs text-center"
              >
                <span>QUIERO EL MÉTODO</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className="text-[11px] text-center text-[#073B4C]/60 mt-3 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2F8F68]" />
                Garantía de satisfacción de 7 días [Supuesto]
              </p>
            </div>
          </div>

          {/* OPCIÓN B — Método + Organización Completa ($9 USD) [RECOMENDADA] */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border-3 border-[#2F8F68] shadow-2xl relative flex flex-col justify-between transform lg:-translate-y-2">
            
            {/* Top Recommended Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2F8F68] text-white text-xs font-black uppercase px-5 py-1.5 rounded-full tracking-widest shadow-md flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 fill-white" />
              <span>RECOMENDADA</span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 mt-2">
                <span className="text-xs font-bold tracking-wider text-[#2F8F68] uppercase">
                  OPCIÓN B
                </span>
                <span className="text-xs font-bold px-3 py-1 bg-[#DCEFE5] text-[#073B4C] rounded-lg">
                  Organización Total
                </span>
              </div>

              <h3 className="text-2xl font-black text-[#073B4C] tracking-tight mb-2">
                Método + Organización Completa
              </h3>

              <p className="text-sm text-[#073B4C]/80 mb-6 font-medium">
                La experiencia integral con herramientas de planificación, menús y etiquetado.
              </p>

              {/* Price with Callout */}
              <div className="mb-6 pb-6 border-b border-[#073B4C]/10">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl sm:text-5xl font-black text-[#073B4C] tracking-tight">USD $9</span>
                  <span className="text-xs text-[#073B4C]/60 font-semibold">pago único</span>
                </div>
                
                {/* Specific highlight required by prompt */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#DCEFE5] text-[#073B4C] text-xs font-bold">
                  <Zap className="w-3.5 h-3.5 text-[#2F8F68]" />
                  <span>Solo USD $3 más que la Opción A.</span>
                </div>
              </div>

              {/* Includes List */}
              <div className="space-y-4 mb-8">
                <p className="text-xs uppercase font-bold text-[#073B4C]/70 tracking-wider">
                  Incluye todo lo de la Opción A:
                </p>

                <div className="space-y-2.5">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#DCEFE5] text-[#2F8F68] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm text-[#073B4C] font-semibold">Método Inteligente de Batch Cooking</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#DCEFE5] text-[#2F8F68] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm text-[#073B4C] font-semibold">Recetas Saludables de Cocina</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#DCEFE5] text-[#2F8F68] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm text-[#073B4C] font-semibold">Chef Carol — Agente de IA</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#073B4C]/10">
                  <p className="text-xs uppercase font-bold text-[#2F8F68] tracking-wider mb-2">
                    MÁS LOS 3 BONOS EXCLUSIVOS:
                  </p>

                  <div className="space-y-2.5">
                    <div className="flex items-start gap-3 bg-[#F7F5EF] p-2.5 rounded-xl border border-[#2F8F68]/20">
                      <div className="w-5 h-5 rounded-full bg-[#2F8F68] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-sm text-[#073B4C] font-bold">Sistema de Etiquetado e Inventario para el Congelador</span>
                    </div>

                    <div className="flex items-start gap-3 bg-[#F7F5EF] p-2.5 rounded-xl border border-[#2F8F68]/20">
                      <div className="w-5 h-5 rounded-full bg-[#2F8F68] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-sm text-[#073B4C] font-bold">Calendario Mensual de Planificación</span>
                    </div>

                    <div className="flex items-start gap-3 bg-[#F7F5EF] p-2.5 rounded-xl border border-[#2F8F68]/20">
                      <div className="w-5 h-5 rounded-full bg-[#2F8F68] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-sm text-[#073B4C] font-bold">30 Menús Saludables para Todo el Mes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <a
                id="cta-opcion-b"
                href="https://pay.hotmart.com/N107179380E?checkoutMode=10"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-[#2F8F68] hover:bg-[#257353] text-white text-base font-extrabold rounded-xl transition-all duration-200 shadow-lg shadow-[#2F8F68]/30 flex items-center justify-center gap-2 cursor-pointer group transform hover:-translate-y-0.5 text-center"
              >
                <span>QUIERO EL MÉTODO + LOS 3 BONOS</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <p className="text-[11px] text-center text-[#073B4C]/70 mt-3 flex items-center justify-center gap-1 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2F8F68]" />
                Garantía de satisfacción de 7 días [Supuesto]
              </p>
            </div>
          </div>

        </div>

        {/* Minimalist Trust & Payment Gateways Bar */}
        <div className="mt-12 text-center border-t border-[#073B4C]/10 pt-6 max-w-md mx-auto">
          <p className="text-xs text-[#073B4C]/60 italic mb-3">
            Pago seguro cifrado · Acceso digital inmediato · Garantía de satisfacción de 7 días
          </p>
          <div className="flex items-center justify-center gap-5 opacity-45 grayscale">
            <span className="text-[10px] font-black tracking-wider text-[#073B4C] border border-[#073B4C]/30 px-2 py-0.5 rounded">VISA</span>
            <span className="text-[10px] font-black tracking-wider text-[#073B4C] border border-[#073B4C]/30 px-2 py-0.5 rounded">MASTERCARD</span>
            <span className="text-[10px] font-black tracking-wider text-[#073B4C] border border-[#073B4C]/30 px-2 py-0.5 rounded">STRIPE</span>
            <span className="text-[10px] font-black tracking-wider text-[#073B4C] border border-[#073B4C]/30 px-2 py-0.5 rounded">PAYPAL</span>
          </div>
        </div>

      </div>
    </section>
  );
};
