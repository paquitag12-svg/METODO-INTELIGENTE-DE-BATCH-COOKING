import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Lock, ArrowRight, Copy, Check } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: {
    name: string;
    price: string;
    checkoutUrl?: string;
  };
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  selectedPlan,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const checkoutUrlPlaceholder = selectedPlan.checkoutUrl || 
    (selectedPlan.price.includes('6') 
      ? 'https://pay.hotmart.com/C107425084U?checkoutMode=10' 
      : selectedPlan.price.includes('9')
        ? 'https://pay.hotmart.com/N107179380E?checkoutMode=10'
        : '[CHECKOUT_URL]');

  const handleCopyLink = () => {
    navigator.clipboard.writeText(checkoutUrlPlaceholder);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#073B4C]/10 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-800 transition-colors"
          aria-label="Cerrar ventana"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#DCEFE5] text-[#2F8F68] flex items-center justify-center mx-auto mb-3">
            <Lock className="w-6 h-6" />
          </div>
          <span className="text-xs uppercase font-bold text-[#2F8F68] tracking-wider bg-[#DCEFE5] px-3 py-1 rounded-full">
            Pasarela de Pago Segura
          </span>
          <h3 className="text-2xl font-black text-[#073B4C] mt-3">
            Preparando tu acceso digital
          </h3>
          <p className="text-xs sm:text-sm text-[#073B4C]/70 mt-1">
            Estás a un paso de comenzar a organizar tus comidas familiares.
          </p>
        </div>

        {/* Plan Summary Card */}
        <div className="bg-[#F7F5EF] rounded-2xl p-5 border border-[#073B4C]/10 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-[#073B4C]/70 uppercase">Plan Seleccionado:</span>
            <span className="text-xs font-bold px-2 py-0.5 bg-[#2F8F68] text-white rounded">Pago único</span>
          </div>
          <div className="flex items-baseline justify-between">
            <p className="text-base sm:text-lg font-black text-[#073B4C]">{selectedPlan.name}</p>
            <p className="text-2xl font-black text-[#2F8F68]">{selectedPlan.price}</p>
          </div>
          
          <div className="mt-4 pt-3 border-t border-[#073B4C]/10 text-xs text-[#073B4C]/70 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#2F8F68] shrink-0" />
            <span>Acceso digital inmediato tras confirmar la orden.</span>
          </div>
        </div>

        {/* Checkout URL Integration Info */}
        <div className="bg-blue-50/70 border border-blue-200/60 rounded-xl p-4 mb-6 text-xs text-blue-900 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-bold">Enlace de Checkout Configurado:</span>
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1 text-[11px] font-bold text-[#2F8F68] hover:underline"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Copiado</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copiar enlace</span>
                </>
              )}
            </button>
          </div>
          <div className="font-mono bg-white p-2 rounded border border-blue-200 text-[#073B4C] font-semibold text-center select-all">
            {checkoutUrlPlaceholder}
          </div>
          <p className="text-[11px] text-blue-800/80 leading-relaxed">
            * En producción este botón conecta con tu checkout de Hotmart, Stripe, Mercado Pago o plataforma de ventas digitales preferida.
          </p>
        </div>

        {/* Action Button */}
        <a
          href={checkoutUrlPlaceholder}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            // Keep user informed if clicking the placeholder
            if (checkoutUrlPlaceholder === '[CHECKOUT_URL]') {
              e.preventDefault();
              alert(`Redirección de checkout configurada hacia: ${checkoutUrlPlaceholder}\n\nPlan: ${selectedPlan.name} (${selectedPlan.price})`);
            }
          }}
          className="w-full py-4 px-6 bg-[#2F8F68] hover:bg-[#257353] text-white text-base font-extrabold rounded-xl transition-all duration-200 shadow-lg shadow-[#2F8F68]/30 flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>CONTINUAR AL CHECKOUT SEGURO</span>
          <ArrowRight className="w-4 h-4" />
        </a>

        {/* Guarantee Badge */}
        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#073B4C]/70">
          <ShieldCheck className="w-4 h-4 text-[#2F8F68]" />
          <span>Garantía de satisfacción de 7 días [Supuesto]</span>
        </div>
      </div>
    </div>
  );
};
