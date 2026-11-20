import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../../data/mockData';

export const CategoriesGrid: React.FC = () => {
  // 2-rasmdagi birinchi 4 ta katta kartochka:
  // 1. Go'zallik (Beauty picks)
  // 2. Kompyuter va aksessuarlar (Computer & Accessories)
  // 3. Video o'yinlar (Video games)
  // 4. O'yinchoqlar (Toys & Games)
  const mainCategories = CATEGORIES.slice(0, 4);

  return (
    <section className="my-10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-plum-900 tracking-tight">
            Kategoriyalar bo'yicha
          </h2>
          <p className="text-xs sm:text-sm text-plum-900/60 mt-0.5">
            Eng sara va ommabop yo'nalishlar
          </p>
        </div>
        <Link
          to="/catalog"
          className="text-xs sm:text-sm font-bold text-plum-500 hover:text-plum-600 flex items-center gap-1 group"
        >
          <span>Barcha toifalar</span>
          <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* 4 ta katta kartochka (2-rasmdagi aniq tuzilma) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {mainCategories.map((cat) => (
          <Link
            key={cat.id}
            to={`/category/${cat.slug}`}
            className="group flex flex-col bg-white rounded-[16px] border border-plum-100 overflow-hidden shadow-sm hover:shadow-card-hover hover:border-plum-200 transition-all duration-300"
          >
            <div className="aspect-[4/3] overflow-hidden bg-surface-section relative p-3">
              <img
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
              />
              {cat.discountBadge && (
                <span className="absolute top-4 right-4 bg-plum-500 text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                  {cat.discountBadge}
                </span>
              )}
            </div>
            <div className="p-4 flex items-center justify-between bg-white">
              <div>
                <h3 className="font-bold text-sm sm:text-base text-plum-900 group-hover:text-plum-500 transition-colors">
                  {cat.name}
                </h3>
                <span className="text-xs text-plum-900/50">{cat.itemCount}+ mahsulot</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-plum-50 flex items-center justify-center text-plum-500 group-hover:bg-plum-500 group-hover:text-white transition-colors shrink-0">
                <ArrowRight size={16} />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* 2 ta keng banner (2-rasm: Plum Basics & Deals and Promotions) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6">
        {/* Banner 1: Plum Basics */}
        <div className="relative rounded-[20px] bg-gradient-to-r from-plum-800 to-plum-900 text-white p-6 sm:p-8 overflow-hidden flex items-center justify-between">
          <div className="relative z-10 max-w-xs space-y-2">
            <span className="text-[11px] uppercase font-bold tracking-wider text-plum-200">Plum Essentials</span>
            <h3 className="text-xl sm:text-2xl font-black leading-snug">Asosiy mahsulotlar va kundalik ehtiyojlar</h3>
            <p className="text-xs text-plum-100/70">Kafolatlangan sifat va eng past narxlar kafolati bilan</p>
            <Link
              to="/catalog?filter=basics"
              className="inline-block mt-2 px-4 py-2 bg-white text-plum-900 font-bold text-xs rounded-btn hover:bg-plum-50 transition-colors shadow-sm"
            >
              Katalogni ko'rish
            </Link>
          </div>
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 shrink-0">
            <img
              src="https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=400&q=80"
              alt="Plum Basics"
              className="w-full h-full object-contain filter drop-shadow-lg"
            />
          </div>
        </div>

        {/* Banner 2: Chegirmalar va aksiyalar */}
        <div className="relative rounded-[20px] bg-gradient-to-r from-plum-600 to-plum-700 text-white p-6 sm:p-8 overflow-hidden flex items-center justify-between">
          <div className="relative z-10 max-w-xs space-y-2">
            <span className="text-[11px] uppercase font-bold tracking-wider text-plum-100">Super Chegirma</span>
            <h3 className="text-xl sm:text-2xl font-black leading-snug">Aksiyalar va chegirmalar haftaligi</h3>
            <p className="text-xs text-plum-100/80">Elektronika va uy jihozlariga 50% gacha tejab qoling</p>
            <Link
              to="/catalog?filter=deals"
              className="inline-block mt-2 px-4 py-2 bg-plum-900 text-white font-bold text-xs rounded-btn hover:bg-plum-950 transition-colors shadow-sm"
            >
              Aksiyalarga o'tish
            </Link>
          </div>
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 shrink-0">
            <img
              src="https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?auto=format&fit=crop&w=400&q=80"
              alt="Geymer kontroller"
              className="w-full h-full object-contain filter drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
