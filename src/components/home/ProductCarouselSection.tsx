import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Product } from '../../types';
import { ProductCard } from '../product/ProductCard';

interface ProductCarouselSectionProps {
  title: string;
  subtitle?: string;
  products: Product[];
  viewAllLink?: string;
  badge?: string;
}

export const ProductCarouselSection: React.FC<ProductCarouselSectionProps> = ({
  title,
  subtitle,
  products,
  viewAllLink = '/catalog',
  badge,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="my-10">
      {/* Sarlavha va Navigatsiya strelkalari */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-black text-plum-900 tracking-tight">
                {title}
              </h2>
              {badge && (
                <span className="bg-plum-500 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                  {badge}
                </span>
              )}
            </div>
            {subtitle && (
              <p className="text-xs text-plum-900/60 mt-0.5">{subtitle}</p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {viewAllLink && (
            <Link
              to={viewAllLink}
              className="text-xs sm:text-sm font-bold text-plum-500 hover:text-plum-600 flex items-center gap-1 mr-2 group"
            >
              <span>Barchasi</span>
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          )}

          {/* Strelkalar */}
          <button
            onClick={() => scroll('left')}
            aria-label="Oldingi mahsulotlar"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-plum-200 bg-white hover:bg-plum-50 text-plum-800 flex items-center justify-center transition-colors shadow-sm"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll('right')}
            aria-label="Keyingi mahsulotlar"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-plum-200 bg-white hover:bg-plum-50 text-plum-800 flex items-center justify-center transition-colors shadow-sm"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Gorizontal Scroll/Karusel (2-rasmdagi 5 ta kartochka uslubida) */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto pb-4 pt-1 px-1 no-scrollbar scroll-smooth snap-x snap-mandatory"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[210px] sm:w-[230px] md:w-[245px] shrink-0 snap-start"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};
