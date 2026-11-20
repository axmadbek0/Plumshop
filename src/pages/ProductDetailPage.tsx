import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data/mockData';
import { formatPrice, formatInstallment } from '../utils/formatPrice';
import { Rating } from '../components/ui/Rating';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { useCartStore } from '../store/useCartStore';
import { useFavoritesStore } from '../store/useFavoritesStore';
import { useUIStore } from '../store/useUIStore';
import { ProductCard } from '../components/product/ProductCard';
import {
  Heart,
  ShoppingBag,
  Truck,
  ShieldCheck,
  RotateCcw,
  ChevronRight,
  Share2,
  Check,
} from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
  const { addToCart } = useCartStore();
  const { toggleFavorite, isFavorite } = useFavoritesStore();
  const { addToast } = useUIStore();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]?.name || '');
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || '');
  const [quantity, setQuantity] = useState(1);

  const isLiked = isFavorite(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
    addToast(`${product.title.slice(0, 30)}... savatga qo'shildi!`, 'success');
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
    navigate('/checkout');
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    addToast('Havola nusxalandi!', 'info');
  };

  // O'xshash mahsulotlar
  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && p.categorySlug === product.categorySlug
  ).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-plum-900/60 mb-6 flex-wrap">
        <Link to="/" className="hover:text-plum-500 transition-colors">Bosh sahifa</Link>
        <ChevronRight size={14} />
        <Link to={`/category/${product.categorySlug}`} className="hover:text-plum-500 transition-colors">
          {product.categoryName}
        </Link>
        <ChevronRight size={14} />
        <span className="text-plum-900 font-semibold truncate max-w-xs">{product.title}</span>
      </nav>

      {/* Mahsulot asosiy qismi */}
      <div className="bg-white rounded-[24px] border border-plum-100 p-6 lg:p-8 shadow-soft">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* 1. Galereya (5 ustun) */}
          <div className="lg:col-span-6 flex flex-col-reverse sm:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-auto shrink-0 no-scrollbar">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all p-1 bg-surface-section ${
                    selectedImage === idx
                      ? 'border-plum-500 ring-2 ring-plum-100'
                      : 'border-transparent hover:border-plum-200'
                  }`}
                >
                  <img src={img} alt={`Ko'rinish ${idx + 1}`} className="w-full h-full object-cover rounded-lg" />
                </button>
              ))}
            </div>

            {/* Asosiy katta rasm */}
            <div className="flex-1 relative aspect-square bg-surface-section rounded-2xl overflow-hidden border border-plum-100 flex items-center justify-center p-4">
              <img
                src={product.images[selectedImage] || product.images[0]}
                alt={product.title}
                className="w-full h-full object-contain"
              />
              {product.discountPercent && (
                <div className="absolute top-4 left-4">
                  <Badge variant="discount">-{product.discountPercent}%</Badge>
                </div>
              )}
            </div>
          </div>

          {/* 2. Mahsulot tafsilotlari va harakatlar (6 ustun) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Reyting, sharhlar va ulashish */}
              <div className="flex items-center justify-between gap-4 mb-3">
                <Rating value={product.rating} reviewsCount={product.reviewsCount} size="md" />
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleShare}
                    className="p-2 rounded-full border border-plum-100 text-plum-700 hover:bg-plum-50 transition-colors"
                    title="Ulashish"
                  >
                    <Share2 size={18} />
                  </button>
                  <button
                    onClick={() => toggleFavorite(product)}
                    className={`p-2 rounded-full border transition-colors ${
                      isLiked
                        ? 'border-plum-500 bg-plum-500 text-white'
                        : 'border-plum-100 text-plum-700 hover:bg-plum-50'
                    }`}
                    title="Sevimlilarga qo'shish"
                  >
                    <Heart size={18} className={isLiked ? 'fill-white' : ''} />
                  </button>
                </div>
              </div>

              {/* Sarlavha */}
              <h1 className="text-xl sm:text-2xl font-black text-plum-900 leading-tight mb-4">
                {product.title}
              </h1>

              {/* Narx bloki */}
              <div className="bg-surface-section p-4 rounded-xl border border-plum-100 mb-6">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-2xl sm:text-3xl font-black text-plum-900">
                    {formatPrice(product.price)}
                  </span>
                  {product.oldPrice && (
                    <span className="text-sm text-plum-900/40 line-through">
                      {formatPrice(product.oldPrice)}
                    </span>
                  )}
                </div>
                {/* Uzum uslubidagi muddatli to'lov */}
                <div className="inline-block bg-white text-plum-800 text-xs font-bold px-3 py-1 rounded-md border border-plum-200 shadow-xs">
                  {formatInstallment(product.price)}
                </div>
              </div>

              {/* Rang tanlash */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                  <div className="text-xs font-bold text-plum-900 mb-2">
                    Rang: <span className="font-semibold text-plum-600">{selectedColor}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    {product.colors.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColor(c.name)}
                        className={`w-9 h-9 rounded-full flex items-center justify-center border-2 transition-all ${
                          selectedColor === c.name
                            ? 'border-plum-500 ring-2 ring-plum-200'
                            : 'border-white hover:border-plum-300'
                        }`}
                        style={{ backgroundColor: c.hex }}
                        title={c.name}
                      >
                        {selectedColor === c.name && (
                          <Check size={14} className={c.hex === '#faf5f8' ? 'text-plum-900' : 'text-white'} />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* O'lcham tanlash */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <div className="text-xs font-bold text-plum-900 mb-2">O'lcham:</div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSize(s)}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                          selectedSize === s
                            ? 'bg-plum-500 text-white border-plum-500'
                            : 'bg-white text-plum-900 border-plum-200 hover:border-plum-400'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Miqdor va tugmalar */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-plum-200 rounded-btn bg-white">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="w-10 h-11 flex items-center justify-center text-plum-800 hover:bg-plum-50 font-bold"
                    >
                      -
                    </button>
                    <span className="w-10 text-center font-bold text-sm text-plum-900">{quantity}</span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="w-10 h-11 flex items-center justify-center text-plum-800 hover:bg-plum-50 font-bold"
                    >
                      +
                    </button>
                  </div>

                  <Button
                    onClick={handleAddToCart}
                    variant="primary"
                    size="lg"
                    className="flex-1"
                  >
                    <ShoppingBag size={18} />
                    <span>Savatga qo'shish</span>
                  </Button>
                </div>

                <Button
                  onClick={handleBuyNow}
                  variant="outline"
                  size="lg"
                  className="w-full"
                >
                  1 marta bosishda sotib olish
                </Button>
              </div>

              {/* Afzalliklar */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-plum-100 text-[11px] text-plum-900/80">
                <div className="flex items-center gap-2">
                  <Truck size={16} className="text-plum-500 shrink-0" />
                  <span>1 kunda bepul yetkazish</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-plum-500 shrink-0" />
                  <span>12 oy rasmiy kafolat</span>
                </div>
                <div className="flex items-center gap-2">
                  <RotateCcw size={16} className="text-plum-500 shrink-0" />
                  <span>10 kunda qaytarish</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Tavsif va xususiyatlar jadvali */}
        <div className="mt-12 pt-8 border-t border-plum-100 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-lg font-black text-plum-900">Mahsulot tavsifi</h3>
            <p className="text-sm text-plum-900/80 leading-relaxed whitespace-pre-line">
              {product.description}
            </p>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-black text-plum-900">Asosiy xususiyatlar</h3>
            <div className="space-y-2">
              {Object.entries(product.specs).map(([key, val]) => (
                <div key={key} className="flex justify-between text-xs py-2 border-b border-plum-50">
                  <span className="text-plum-900/60">{key}</span>
                  <span className="font-bold text-plum-900">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* O'xshash mahsulotlar */}
      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xl sm:text-2xl font-black text-plum-900 mb-6">
            O'xshash mahsulotlar
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
