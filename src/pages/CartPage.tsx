import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';
import { formatPrice } from '../utils/formatPrice';
import { Button } from '../components/ui/Button';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, Tag } from 'lucide-react';
import { useUIStore } from '../store/useUIStore';

export const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    items,
    removeFromCart,
    updateQuantity,
    promoCode,
    applyPromoCode,
    getSubtotal,
    getDiscountAmount,
    getTotalPrice,
    clearCart,
  } = useCartStore();

  const { addToast } = useUIStore();
  const [promoInput, setPromoInput] = useState('');

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;

    const success = applyPromoCode(promoInput);
    if (success) {
      addToast(`"${promoInput.toUpperCase()}" promokodi qo'llandi! 10% chegirma berildi.`, 'success');
      setPromoInput('');
    } else {
      addToast('Noto\'g\'ri promokod. Sinab ko\'ring: PLUM2026', 'error');
    }
  };

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="w-20 h-20 rounded-full bg-plum-50 text-plum-500 flex items-center justify-center mx-auto mb-4">
          <ShoppingBag size={36} />
        </div>
        <h2 className="text-2xl font-black text-plum-900 mb-2">Savatingiz hozircha bo'sh</h2>
        <p className="text-sm text-plum-900/60 max-w-sm mx-auto mb-6">
          Bosh sahifadagi to'plamlar yoki qidiruv orqali kerakli mahsulotlarni topib, savatga qo'shishingiz mumkin.
        </p>
        <Link to="/">
          <Button variant="primary" size="lg">
            Xarid qilishni boshlash
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-plum-100">
        <h1 className="text-2xl sm:text-3xl font-black text-plum-900">
          Savat <span className="text-sm text-plum-900/50 font-normal">({items.length} turdagi tovar)</span>
        </h1>
        <button
          onClick={clearCart}
          className="text-xs text-red-600 hover:text-red-700 font-semibold transition-colors"
        >
          Savatni tozalash
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Mahsulotlar ro'yxati (8 ustun) */}
        <div className="lg:col-span-8 space-y-4">
          {items.map((item) => (
            <div
              key={item.product.id}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-[16px] bg-white border border-plum-100 shadow-sm"
            >
              <div className="flex items-center gap-4 min-w-0">
                <Link to={`/product/${item.product.id}`} className="shrink-0">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.title}
                    className="w-20 h-20 object-cover rounded-xl bg-surface-section border border-plum-50"
                  />
                </Link>
                <div className="min-w-0">
                  <Link
                    to={`/product/${item.product.id}`}
                    className="text-sm font-bold text-plum-900 hover:text-plum-500 transition-colors line-clamp-2"
                  >
                    {item.product.title}
                  </Link>
                  <p className="text-xs text-plum-900/60 mt-1">
                    Toifa: {item.product.categoryName}
                  </p>
                  <div className="text-sm font-black text-plum-900 mt-1 sm:hidden">
                    {formatPrice(item.product.price)}
                  </div>
                </div>
              </div>

              {/* Soni va narxi */}
              <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-plum-50">
                <div className="flex items-center border border-plum-200 rounded-btn bg-white">
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    className="w-8 h-8 flex items-center justify-center text-plum-700 hover:bg-plum-50"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-8 text-center text-xs font-bold text-plum-900">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center text-plum-700 hover:bg-plum-50"
                  >
                    <Plus size={14} />
                  </button>
                </div>

                <div className="hidden sm:block text-right min-w-[120px]">
                  <div className="text-base font-black text-plum-900">
                    {formatPrice(item.product.price * item.quantity)}
                  </div>
                  {item.quantity > 1 && (
                    <div className="text-[11px] text-plum-900/50">
                      {formatPrice(item.product.price)} / dona
                    </div>
                  )}
                </div>

                <button
                  onClick={() => removeFromCart(item.product.id)}
                  className="p-2 text-plum-400 hover:text-red-600 transition-colors rounded-lg hover:bg-red-50"
                  title="O'chirish"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Jami hisob va rasmiylashtirish (4 ustun) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-[20px] border border-plum-100 p-6 shadow-soft space-y-5">
            <h3 className="text-lg font-black text-plum-900 pb-3 border-b border-plum-100">
              Buyurtmangiz
            </h3>

            {/* Promokod kiritish */}
            <form onSubmit={handleApplyPromo} className="space-y-2">
              <label className="text-xs font-semibold text-plum-900 flex items-center gap-1">
                <Tag size={14} className="text-plum-500" />
                Promokod bormi?
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Masalan: PLUM2026"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                  className="flex-1 h-10 px-3 rounded-input bg-surface-light border border-plum-200 text-xs text-plum-900 uppercase focus:outline-none focus:border-plum-500"
                />
                <Button type="submit" variant="secondary" size="sm">
                  Qo'llash
                </Button>
              </div>
              {promoCode && (
                <div className="text-xs text-plum-600 font-semibold bg-plum-50 p-2 rounded-lg">
                  Aktiv promokod: <strong>{promoCode}</strong> (10% tejash)
                </div>
              )}
            </form>

            <div className="space-y-2.5 text-xs pt-3 border-t border-plum-100">
              <div className="flex justify-between text-plum-900/70">
                <span>Mahsulotlar qiymati</span>
                <span className="font-bold text-plum-900">{formatPrice(getSubtotal())}</span>
              </div>
              {getDiscountAmount() > 0 && (
                <div className="flex justify-between text-plum-600">
                  <span>Promokod bo'yicha chegirma</span>
                  <span className="font-bold">-{formatPrice(getDiscountAmount())}</span>
                </div>
              )}
              <div className="flex justify-between text-plum-900/70">
                <span>Yetkazib berish</span>
                <span className="font-bold text-green-700">Bepul (1 kunda)</span>
              </div>
            </div>

            <div className="pt-4 border-t border-plum-100 flex items-baseline justify-between">
              <div>
                <span className="text-xs text-plum-900/60 block">Jami to'lov:</span>
                <span className="text-2xl font-black text-plum-900">{formatPrice(getTotalPrice())}</span>
              </div>
            </div>

            <Button
              onClick={() => navigate('/checkout')}
              variant="primary"
              size="lg"
              className="w-full"
            >
              <span>Rasmiylashtirishga o'tish</span>
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
