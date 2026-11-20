import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../../data/mockData';
import { ChevronRight } from 'lucide-react';
import { useUIStore } from '../../store/useUIStore';

export const MegaMenu: React.FC = () => {
  const { isCatalogOpen, setCatalogOpen } = useUIStore();
  const [activeCategory, setActiveCategory] = React.useState(CATEGORIES[0]);

  if (!isCatalogOpen) return null;

  return (
    <div className="fixed inset-0 top-[116px] md:top-[128px] z-40 bg-plum-900/40 backdrop-blur-xs flex justify-center">
      <div
        className="w-full max-w-7xl mx-4 my-2 bg-white rounded-2xl shadow-elevated border border-plum-100 overflow-hidden flex flex-col md:flex-row h-[520px] animate-in fade-in slide-in-from-top-2 duration-200"
        onMouseLeave={() => setCatalogOpen(false)}
      >
        {/* Chap ustun: Toifalar ro'yxati */}
        <div className="w-full md:w-72 bg-surface-light border-r border-plum-100 p-3 overflow-y-auto">
          <div className="text-xs font-bold text-plum-900/60 uppercase tracking-wider px-3 py-2">
            Barcha toifalar
          </div>
          <div className="flex flex-col gap-1">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory.id === cat.id;
              return (
                <button
                  key={cat.id}
                  onMouseEnter={() => setActiveCategory(cat)}
                  onClick={() => setCatalogOpen(false)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-white text-plum-500 shadow-sm border border-plum-100'
                      : 'text-plum-900 hover:bg-plum-50 hover:text-plum-600'
                  }`}
                >
                  <span className="truncate">{cat.name}</span>
                  <ChevronRight size={16} className={`shrink-0 ${isActive ? 'text-plum-500' : 'text-plum-300'}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* O'ng ustun: Faol toifaning ichki bo'limlari va banner */}
        <div className="flex-1 p-6 overflow-y-auto bg-white flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-plum-100">
              <Link
                to={`/category/${activeCategory.slug}`}
                onClick={() => setCatalogOpen(false)}
                className="text-xl font-bold text-plum-900 hover:text-plum-500 transition-colors flex items-center gap-2"
              >
                {activeCategory.name}
                <ChevronRight size={20} className="text-plum-500" />
              </Link>
              <span className="text-xs text-plum-900/60">{activeCategory.itemCount} ta mahsulot</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {activeCategory.subcategories?.map((sub) => (
                <Link
                  key={sub.id}
                  to={`/category/${activeCategory.slug}?sub=${sub.slug}`}
                  onClick={() => setCatalogOpen(false)}
                  className="p-3 rounded-xl border border-plum-50 hover:border-plum-200 hover:bg-surface-light transition-all text-sm font-medium text-plum-800 hover:text-plum-500 block"
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Toifa mini banneri */}
          <div className="mt-6 rounded-xl bg-gradient-to-r from-plum-500 to-plum-700 p-5 text-white flex items-center justify-between">
            <div>
              <span className="text-xs uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-full font-semibold">
                Maxsus taklif
              </span>
              <h4 className="text-base font-bold mt-1">Ushbu toifadagi barcha mahsulotlarga bepul yetkazish</h4>
              <p className="text-xs text-plum-100 mt-0.5">1 kun ichida buyurtmangiz eshigingizda!</p>
            </div>
            <Link
              to={`/category/${activeCategory.slug}`}
              onClick={() => setCatalogOpen(false)}
              className="bg-white text-plum-900 text-xs font-bold px-4 py-2 rounded-btn hover:bg-plum-50 transition-colors shrink-0"
            >
              Ko'rish
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
