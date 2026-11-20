import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { formatPrice } from '../../utils/formatPrice';

export const LifestyleDuoBanners: React.FC = () => {
  return (
    <section className="my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 1. Ayollar uchun qulay uslub (Comfy styles for her) */}
        <div className="relative rounded-[24px] bg-gradient-to-br from-[#faf5f8] to-[#f4e9f0] border border-plum-100 p-6 sm:p-8 overflow-hidden shadow-soft flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-plum-500 bg-plum-50 px-2.5 py-1 rounded-md border border-plum-100">
              Ayollar kolleksiyasi
            </span>
            <h3 className="text-2xl font-black text-plum-900 mt-2 mb-1">
              Ayollar uchun qulay uslub
            </h3>
            <p className="text-xs sm:text-sm text-plum-900/60 max-w-xs">
              Kiyimlar, poyabzallar, zargarlik buyumlari, sumkalar va nafis aksessuarlar
            </p>
            <Link
              to="/catalog?category=women-fashion"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-plum-500 hover:text-plum-600 mt-3 group"
            >
              <span>To'plamni ko'rish</span>
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="mt-6 flex items-end justify-between gap-4">
            {/* Mini mahsulot kartochkasi (2-rasmdagi: sumka kartochkasi) */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 border border-plum-100 shadow-card max-w-[200px]">
              <div className="flex items-center gap-2">
                <img
                  src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=160&q=80"
                  alt="Nafis charm sumka"
                  className="w-12 h-12 object-cover rounded-lg bg-plum-50"
                />
                <div>
                  <h4 className="text-xs font-bold text-plum-900 truncate">Nafis charm sumka</h4>
                  <p className="text-[10px] text-plum-500 font-bold">{formatPrice(349000)}</p>
                </div>
              </div>
            </div>

            {/* Model rasmi */}
            <div className="w-36 h-48 sm:w-44 sm:h-56 relative shrink-0">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80"
                alt="Ayollar moda uslubi"
                className="w-full h-full object-cover object-top rounded-2xl shadow-card"
              />
            </div>
          </div>
        </div>

        {/* 2. Erkaklar uchun qulay uslub (Comfy styles for him) */}
        <div className="relative rounded-[24px] bg-gradient-to-br from-[#faf5f8] to-[#f4e9f0] border border-plum-100 p-6 sm:p-8 overflow-hidden shadow-soft flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-plum-500 bg-plum-50 px-2.5 py-1 rounded-md border border-plum-100">
              Erkaklar kolleksiyasi
            </span>
            <h3 className="text-2xl font-black text-plum-900 mt-2 mb-1">
              Erkaklar uchun qulay uslub
            </h3>
            <p className="text-xs sm:text-sm text-plum-900/60 max-w-xs">
              Ko'ylaklar, soatlar, jinsi shimlar, sport poyabzallari va kundalik kiyimlar
            </p>
            <Link
              to="/catalog?category=men-fashion"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-plum-500 hover:text-plum-600 mt-3 group"
            >
              <span>To'plamni ko'rish</span>
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="mt-6 flex items-end justify-between gap-4">
            {/* Mini mahsulot kartochkasi (2-rasmdagi: katakli ko'ylak) */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 border border-plum-100 shadow-card max-w-[200px]">
              <div className="flex items-center gap-2">
                <img
                  src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=160&q=80"
                  alt="Katakli paxta ko'ylak"
                  className="w-12 h-12 object-cover rounded-lg bg-plum-50"
                />
                <div>
                  <h4 className="text-xs font-bold text-plum-900 truncate">Katakli paxta ko'ylak</h4>
                  <p className="text-[10px] text-plum-500 font-bold">{formatPrice(199000)}</p>
                </div>
              </div>
            </div>

            {/* Model rasmi */}
            <div className="w-36 h-48 sm:w-44 sm:h-56 relative shrink-0">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80"
                alt="Erkaklar moda uslubi"
                className="w-full h-full object-cover object-top rounded-2xl shadow-card"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
