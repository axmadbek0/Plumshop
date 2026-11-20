import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const DeliveryPromoBanner: React.FC = () => {
  return (
    <section className="my-12 rounded-[24px] bg-gradient-to-r from-plum-500 via-plum-600 to-plum-700 text-white p-8 md:p-12 overflow-hidden shadow-elevated relative">
      {/* Orqa fon naqshlari */}
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
        <div className="md:col-span-7 space-y-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-white/20 text-white border border-white/20">
            Tezkor kuryer xizmati
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            BUYURTMANGIZ ESHIGINGIZGACHA
          </h2>
          <p className="text-sm sm:text-base text-plum-100 max-w-xl leading-relaxed">
            O'zbekistonning barcha viloyatlariga 1 kun ichida xavfsiz va bepul yetkazib berish.
            Kuryer eshigingiz oldida tovarlarni tekshirib olishingizga imkon beradi.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs font-semibold text-plum-100">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-white" />
              <span>1 kunda bepul yetkazish</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-white" />
              <span>Eshik oldida to'lov (Naqd/Karta)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-white" />
              <span>10 kun ichida qaytarish imkoni</span>
            </div>
          </div>

          <div className="pt-4">
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-btn bg-white text-plum-900 font-bold hover:bg-plum-50 transition-all shadow-md group"
            >
              <span>Xarid qilishni boshlash</span>
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 2-rasmdagi: Qutidagi it / lifestyle rasm uslubi */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border-4 border-white/30 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80"
              alt="Tezkor yetkazib berish va xarid quvonchi"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-plum-900/60 via-transparent to-transparent flex items-end p-4">
              <span className="text-xs font-bold text-white bg-plum-900/80 px-2.5 py-1 rounded-md backdrop-blur-sm">
                100% Kafolatlangan yetkazish
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
