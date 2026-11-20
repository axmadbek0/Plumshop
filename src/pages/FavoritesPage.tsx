import React from 'react';
import { Link } from 'react-router-dom';
import { useFavoritesStore } from '../store/useFavoritesStore';
import { useCartStore } from '../store/useCartStore';
import { useUIStore } from '../store/useUIStore';
import { ProductCard } from '../components/product/ProductCard';
import { Button } from '../components/ui/Button';
import { Heart, ShoppingBag } from 'lucide-react';

export const FavoritesPage: React.FC = () => {
  const { favorites, clearFavorites } = useFavoritesStore();
  const { addToCart } = useCartStore();
  const { addToast } = useUIStore();

  const handleAddAllToCart = () => {
    favorites.forEach((product) => {
      addToCart(product, 1);
    });
    addToast('Barcha sevimlilar savatga qo\'shildi!', 'success');
  };

  if (favorites.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="w-20 h-20 rounded-full bg-plum-50 text-plum-500 flex items-center justify-center mx-auto mb-4">
          <Heart size={36} />
        </div>
        <h2 className="text-2xl font-black text-plum-900 mb-2">Sevimlilar ro'yxatingiz bo'sh</h2>
        <p className="text-sm text-plum-900/60 max-w-sm mx-auto mb-6">
          Sizga yoqqan mahsulotlarning yurakcha tugmasini bosing va keyinroq xarid qilish uchun shu yerda saqlang.
        </p>
        <Link to="/">
          <Button variant="primary" size="lg">
            Mahsulotlarni ko'rish
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-6 border-b border-plum-100">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-plum-900">
            Sevimlilar <span className="text-sm font-normal text-plum-900/50">({favorites.length} ta mahsulot)</span>
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" onClick={clearFavorites}>
            Tozalash
          </Button>
          <Button variant="primary" size="sm" onClick={handleAddAllToCart}>
            <ShoppingBag size={16} />
            <span>Hammasini savatga qo'shish</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {favorites.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
