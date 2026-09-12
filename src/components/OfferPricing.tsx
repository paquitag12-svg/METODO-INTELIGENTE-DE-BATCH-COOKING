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
          <span className="text-xs font-bold uppercase tracking-wider text-[#166245] bg-[#DCEFE5] px-3 py-1 rounded-full inline-block mb-3">
            Elige tu plan de acceso
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#073B4C] tracking-tight mb-4">
            Comienza hoy mismo a organizar tu cocina
          </h2>
          <p className="text-base sm:text-lg text-[#118AB2] font-semibold">
            Acceso digital inmediato para ver en tu teléfono, tablet o computador.
          </p>
        </div>

        {/* Pricing Cards Grid — 2 columnas tanto en celular como en PC */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* OPCIÓN A — Método Esencial ($6 USD) */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-7 lg:p-9 border-2 border-[#073B4C]/20 shadow-md hover:shadow-lg transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 mb-2 sm:mb-4">
                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#073B4C]/85 uppercase">
                  OPCIÓN A
                </span>
                <span className="text-[9px] sm:text-xs font-bold px-2 py-0.5 sm:py-1 bg-[#F7F5EF] text-[#073B4C] border border-[#073B4C]/15 rounded-md sm:rounded-lg self-start sm:self-auto">
                  Sistema Base
                </span>
              </div>

              <h3 className="text-base sm:text-2xl font-black text-[#073B4C] tracking-tight mb-1 sm:mb-2 leading-tight">
                Método Esencial
              </h3>

              <p className="text-xs sm:text-sm text-[#073B4C]/85 mb-3 sm:mb-6 leading-snug">
                El sistema central para aprender a planificar y cocinar por lotes.
              </p>

              {/* Price */}
              <div className="mb-4 sm:mb-8 pb-3 sm:pb-6 border-b border-[#073B4C]/15">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-1">
                  <span className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#073B4C] tracking-tight">USD $6</span>
                  <span className="text-[10px] sm:text-xs text-[#073B4C]/80 font-bold">pago único</span>
                </div>
              </div>

              {/* Includes List */}
              <div className="space-y-2.5 sm:space-y-4 mb-4 sm:mb-8">
                <p className="text-[10px] sm:text-xs uppercase font-extrabold text-[#073B4C]/85 tracking-wider">
                  Incluye:
                </p>

                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-start gap-1.5 sm:gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#DCEFE5] text-[#166245] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#073B4C] leading-snug">Método Inteligente de Batch Cooking</span>
                  </div>

                  <div className="flex items-start gap-1.5 sm:gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#DCEFE5] text-[#166245] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#073B4C] leading-snug">Recetas Saludables de Cocina</span>
                  </div>

                  <div className="flex items-start gap-1.5 sm:gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#DCEFE5] text-[#166245] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#073B4C] leading-snug">Chef Carol — Agente de IA</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2">
              <a
                id="cta-opcion-a"
                href="https://pay.hotmart.com/C107425084U?checkoutMode=10"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 sm:py-4 px-2 sm:px-6 bg-white hover:bg-[#F7F5EF] text-[#073B4C] border-2 border-[#073B4C] hover:border-[#134E39] hover:text-[#134E39] text-xs sm:text-base font-black rounded-xl transition-all duration-200 flex items-center justify-center gap-1 sm:gap-2 cursor-pointer shadow-sm text-center"
              >
                <span>QUIERO EL MÉTODO</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              </a>

              <p className="text-[9px] sm:text-[11px] text-center text-[#073B4C]/85 mt-2 sm:mt-3 flex items-center justify-center gap-1 font-semibold leading-tight">
                <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#166245] shrink-0" />
                <span>Garantía de 7 días [Supuesto]</span>
              </p>
            </div>
          </div>

          {/* OPCIÓN B — Método + Organización Completa ($9 USD) [RECOMENDADA] */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-7 lg:p-9 border-2 sm:border-3 border-[#166245] shadow-2xl relative flex flex-col justify-between transform sm:-translate-y-1 md:-translate-y-2 ring-4 ring-[#166245]/15">
            
            {/* Top Recommended Badge */}
            <div className="absolute -top-3.5 sm:-top-4 left-1/2 -translate-x-1/2 bg-[#134E39] text-white text-[9px] sm:text-xs font-black uppercase px-2.5 sm:px-5 py-1 sm:py-1.5 rounded-full tracking-wider sm:tracking-widest shadow-lg flex items-center gap-1 whitespace-nowrap border border-[#166245]">
              <Star className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-white shrink-0" />
              <span>RECOMENDADA</span>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 mb-2 sm:mb-4 mt-1 sm:mt-2">
                <span className="text-[10px] sm:text-xs font-extrabold tracking-wider text-[#134E39] uppercase">
                  OPCIÓN B
                </span>
                <span className="text-[9px] sm:text-xs font-black px-2 py-0.5 sm:py-1 bg-[#DCEFE5] text-[#134E39] border border-[#166245]/20 rounded-md sm:rounded-lg self-start sm:self-auto">
                  Organización Total
                </span>
              </div>

              <h3 className="text-base sm:text-2xl font-black text-[#073B4C] tracking-tight mb-1 sm:mb-2 leading-tight">
                Método + Organización Completa
              </h3>

              <p className="text-xs sm:text-sm text-[#073B4C]/85 mb-3 sm:mb-6 font-medium leading-snug">
                La experiencia integral con herramientas de planificación, menús y etiquetado.
              </p>

              {/* Price with Callout */}
              <div className="mb-3 sm:mb-6 pb-3 sm:pb-6 border-b border-[#073B4C]/15">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2 mb-1.5 sm:mb-2">
                  <span className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#073B4C] tracking-tight">USD $9</span>
                  <span className="text-[10px] sm:text-xs text-[#073B4C]/80 font-bold">pago único</span>
                </div>
                
                {/* Specific highlight required by prompt */}
                <div className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-3 sm:py-1 rounded-md bg-[#DCEFE5] text-[#134E39] text-[10px] sm:text-xs font-black border border-[#166245]/20 leading-tight">
                  <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#134E39] shrink-0" />
                  <span>Solo $3 más que la Opción A</span>
                </div>
              </div>

              {/* Includes List */}
              <div className="space-y-2.5 sm:space-y-4 mb-4 sm:mb-8">
                <p className="text-[10px] sm:text-xs uppercase font-extrabold text-[#073B4C] tracking-wider">
                  Incluye todo de la Opción A:
                </p>

                <div className="space-y-1.5 sm:space-y-2.5">
                  <div className="flex items-start gap-1.5 sm:gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#DCEFE5] text-[#166245] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm text-[#073B4C] font-bold leading-snug">Método Inteligente de Batch Cooking</span>
                  </div>

                  <div className="flex items-start gap-1.5 sm:gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#DCEFE5] text-[#166245] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm text-[#073B4C] font-bold leading-snug">Recetas Saludables de Cocina</span>
                  </div>

                  <div className="flex items-start gap-1.5 sm:gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#DCEFE5] text-[#166245] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm text-[#073B4C] font-bold leading-snug">Chef Carol — Agente de IA</span>
                  </div>
                </div>

                <div className="pt-2 sm:pt-3 border-t border-[#073B4C]/15">
                  <p className="text-[10px] sm:text-xs uppercase font-extrabold text-[#134E39] tracking-wider mb-1.5 sm:mb-2">
                    MÁS LOS 3 BONOS:
                  </p>

                  <div className="space-y-1.5 sm:space-y-2.5">
                    <div className="flex items-start gap-1.5 sm:gap-3 bg-[#F7F5EF] p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl border border-[#166245]/25">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#134E39] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm text-[#073B4C] font-black leading-snug">Sistema de Etiquetado e Inventario</span>
                    </div>

                    <div className="flex items-start gap-1.5 sm:gap-3 bg-[#F7F5EF] p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl border border-[#166245]/25">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#134E39] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm text-[#073B4C] font-black leading-snug">Calendario Mensual de Planificación</span>
                    </div>

                    <div className="flex items-start gap-1.5 sm:gap-3 bg-[#F7F5EF] p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl border border-[#166245]/25">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#134E39] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm text-[#073B4C] font-black leading-snug">30 Menús Saludables para Todo el Mes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2">
              <a
                id="cta-opcion-b"
                href="https://pay.hotmart.com/N107179380E?checkoutMode=10"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 sm:py-4 px-2 sm:px-6 bg-[#134E39] hover:bg-[#0E3B2B] text-white text-xs sm:text-base font-black rounded-xl transition-all duration-200 shadow-xl shadow-[#134E39]/30 flex items-center justify-center gap-1 sm:gap-2 cursor-pointer group transform hover:-translate-y-0.5 text-center border border-[#166245]"
              >
                <span className="hidden sm:inline">QUIERO EL MÉTODO + LOS 3 BONOS</span>
                <span className="sm:hidden">MÉTODO + 3 BONOS</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1 shrink-0" />
              </a>

              <p className="text-[9px] sm:text-[11px] text-center text-[#073B4C]/85 mt-2 sm:mt-3 flex items-center justify-center gap-1 font-semibold leading-tight">
                <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#166245] shrink-0" />
                <span>Garantía de 7 días [Supuesto]</span>
              </p>
            </div>
          </div>

        </div>

        {/* Minimalist Trust & Payment Gateways Bar */}
        <div className="mt-12 text-center border-t border-[#073B4C]/10 pt-6 max-w-md mx-auto">
          <p className="text-xs text-[#073B4C]/75 italic mb-3">
            Pago seguro cifrado · Acceso digital inmediato · Garantía de satisfacción de 7 días
          </p>
          <div className="flex items-center justify-center gap-5 opacity-70 grayscale">
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
