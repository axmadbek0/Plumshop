import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Check } from 'lucide-react';
import type { Product } from '../../types';
import { formatPrice, formatInstallment } from '../../utils/formatPrice';
import { Rating } from '../ui/Rating';
import { Badge } from '../ui/Badge';
import { useCartStore } from '../../store/useCartStore';
import { useFavoritesStore } from '../../store/useFavoritesStore';
import { useUIStore } from '../../store/useUIStore';
import { cn } from '../../utils/cn';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  const { addToCart, items } = useCartStore();
  const { toggleFavorite, isFavorite } = useFavoritesStore();
  const { addToast } = useUIStore();

  const isLiked = isFavorite(product.id);
  const inCart = items.some((item) => item.product.id === product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    addToast(`${product.title.slice(0, 25)}... savatga qo'shildi`, 'success');
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(product);
    if (!isLiked) {
      addToast('Sevimlilarga qo\'shildi', 'info');
    }
  };

  return (
    <div
      className={cn(
        'group relative flex flex-col bg-white rounded-[16px] border border-plum-100 overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:border-plum-200',
        className
      )}
    >
      {/* Rasm qismi */}
      <Link to={`/product/${product.id}`} className="relative aspect-[4/5] bg-surface-section overflow-hidden block">
        <img
          src={product.images[0]}
          alt={product.title}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Chegirma va Bestseller badge-lari */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 items-start z-10">
          {product.discountPercent && (
            <Badge variant="discount">
              -{product.discountPercent}%
            </Badge>
          )}
          {product.isBestseller && (
            <Badge variant="bestseller">
              Bestseller
            </Badge>
          )}
        </div>

        {/* Sevimlilar (Yurakcha) tugmasi */}
        <button
          onClick={handleToggleFavorite}
          aria-label="Sevimlilarga qo'shish"
          className={cn(
            'absolute top-2.5 right-2.5 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 z-10',
            isLiked
              ? 'bg-plum-500 text-white shadow-md'
              : 'bg-white/80 backdrop-blur-sm text-plum-700 hover:text-plum-500 hover:bg-white shadow-sm'
          )}
        >
          <Heart size={18} className={cn(isLiked && 'fill-white')} />
        </button>

        {/* 1 kunda yetkazish yorlig'i */}
        <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-white/90 backdrop-blur-sm rounded-md text-[10px] font-medium text-plum-900 border border-plum-100">
          1 kunda yetkazamiz
        </div>
      </Link>

      {/* Mahsulot ma'lumotlari */}
      <div className="p-3.5 flex flex-col flex-1 justify-between">
        <div>
          {/* Nomi */}
          <Link
            to={`/product/${product.id}`}
            className="block text-xs sm:text-sm font-medium text-plum-900 line-clamp-2 hover:text-plum-500 transition-colors mb-1.5 leading-snug"
            title={product.title}
          >
            {product.title}
          </Link>

          {/* Reyting va sharhlar */}
          <div className="mb-2">
            <Rating value={product.rating} reviewsCount={product.reviewsCount} size="sm" />
          </div>

          {/* Bo'lib to'lash yorlig'i (Uzum uslubi) */}
          <div className="inline-block bg-plum-50 text-plum-800 text-[11px] font-semibold px-2 py-0.5 rounded-md mb-2 border border-plum-100">
            {formatInstallment(product.price)}
          </div>
        </div>

        {/* Narx va Savatga tugmasi */}
        <div className="pt-2 border-t border-plum-50 flex items-end justify-between gap-2 mt-auto">
          <div>
            {product.oldPrice && (
              <span className="block text-[11px] text-plum-900/40 line-through leading-none mb-0.5">
                {formatPrice(product.oldPrice)}
              </span>
            )}
            <span className="text-sm sm:text-base font-bold text-plum-900 leading-tight block">
              {formatPrice(product.price)}
            </span>
          </div>

          <button
            onClick={handleAddToCart}
            aria-label="Savatga qo'shish"
            className={cn(
              'w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 active:scale-95 shadow-sm',
              inCart
                ? 'bg-plum-700 text-white hover:bg-plum-800'
                : 'bg-plum-500 text-white hover:bg-plum-600 shadow-plum-500/25'
            )}
          >
            {inCart ? <Check size={18} /> : <ShoppingBag size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
};
