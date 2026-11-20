import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Star } from 'lucide-react';
import { PRODUCTS } from '../../data/mockData';
import { formatPrice } from '../../utils/formatPrice';

export const HeroSlider: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const heroProduct = PRODUCTS[0]; // JBL T460BT

  const slides = [
    {
      title: "KOMPYUTER VA AKSESSUARLAR",
      subtitle: "Noutbuklar, monitorlar, quloqchinlar va o'yin qurilmalari eng maqbul narxlarda",
      badge: "-50%",
      product: heroProduct,
    },
    {
      title: "UYINGIZ UCHUN ZAMONAVIY TEXNIKA",
      subtitle: "Aqlli multivarkalar, robot changyutgichlar va oshxona anjomlari 1 kunda eshigingizda",
      badge: "-30%",
      product: PRODUCTS[6], // Instant Pot
    },
    {
      title: "YANGI AVLOD O'YINLAR VA GADJETLAR",
      subtitle: "PlayStation 5, VR shlemlar va yuqori darajadagi geymer aksessuarlari",
      badge: "-40%",
      product: PRODUCTS[12], // PS5
    }
  ];

  const current = slides[activeSlide];

  return (
    <section className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#faf5f8] via-[#f4e9f0] to-[#e2c9db]/60 border border-plum-100 p-6 md:p-12 my-4 shadow-soft">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Chap vertikal pagination + Kontent */}
        <div className="lg:col-span-7 flex gap-4 md:gap-8 items-center">
          {/* Vertikal Pagination Nuqtalari (2-rasmdagi kabi) */}
          <div className="flex flex-col gap-3 shrink-0">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`w-2.5 rounded-full transition-all duration-300 ${
                  activeSlide === idx
                    ? 'h-8 bg-plum-500 ring-2 ring-plum-300 ring-offset-2 ring-offset-white'
                    : 'h-2.5 bg-plum-300 hover:bg-plum-400'
                }`}
              />
            ))}
          </div>

          {/* Sarlavha, matn va Batafsil tugmasi */}
          <div className="space-y-4 md:space-y-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-plum-100 text-plum-700 border border-plum-200">
              Mavsumiy super chegirmalar
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-plum-900 tracking-tight leading-[1.15]">
              {current.title}
            </h1>
            <p className="text-sm sm:text-base text-plum-900/70 max-w-lg leading-relaxed">
              {current.subtitle}
            </p>
            <div className="pt-2">
              <Link
                to={`/product/${current.product.id}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-btn border-2 border-plum-500 text-plum-900 font-bold hover:bg-plum-500 hover:text-white transition-all shadow-sm group"
              >
                <span>Batafsil ko'rish</span>
                <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* O'ng tomon: Katta mahsulot rasmi, -50% doira badge, mini kartochka va strelka */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          {/* Orqa fon nur effekti */}
          <div className="absolute w-72 h-72 sm:w-80 sm:h-80 bg-plum-300/30 rounded-full blur-3xl pointer-events-none" />

          {/* Katta mahsulot rasmi */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-card border border-white/60 bg-white/70 backdrop-blur-sm p-4 flex items-center justify-center">
            <img
              src={current.product.images[0]}
              alt={current.product.title}
              className="w-full h-full object-contain drop-shadow-xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* -50% Katta doira yorlig'i (2-rasmdagi sariq/doira uslubida, plum-500 da) */}
          <div className="absolute top-2 right-4 sm:right-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-plum-500 text-white font-black text-sm sm:text-base flex flex-col items-center justify-center shadow-lg border-2 border-white transform rotate-12">
            <span>{current.badge}</span>
            <span className="text-[9px] uppercase font-semibold leading-none">Aksiya</span>
          </div>

          {/* Mahsulot mini kartochkasi (2-rasm: Chap pastda kichik quticha) */}
          <div className="absolute -bottom-4 left-0 sm:left-4 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-card border border-plum-100 max-w-[210px] hidden sm:block">
            <div className="text-[10px] text-plum-500 font-bold uppercase tracking-wider mb-0.5">Tavsiya etamiz</div>
            <div className="text-xs font-bold text-plum-900 truncate">{current.product.title}</div>
            <div className="flex items-center gap-1 my-1">
              <Star size={12} className="fill-amber-400 text-amber-400" />
              <span className="text-[11px] font-bold text-plum-900">{current.product.rating}</span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xs font-black text-plum-900">{formatPrice(current.product.price)}</span>
              {current.product.oldPrice && (
                <span className="text-[10px] text-plum-900/40 line-through">{formatPrice(current.product.oldPrice)}</span>
              )}
            </div>
          </div>

          {/* O'ng tomondagi keyingi slayder strelkasi (2-rasmdagi) */}
          <button
            onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
            aria-label="Keyingi slayd"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-card border border-plum-100 text-plum-700 hover:text-plum-900 hover:bg-plum-50 flex items-center justify-center transition-transform hover:scale-110 z-10"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};
