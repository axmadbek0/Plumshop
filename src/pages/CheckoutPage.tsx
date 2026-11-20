import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';
import { useAuthStore } from '../store/useAuthStore';
import { useUIStore } from '../store/useUIStore';
import { formatPrice } from '../utils/formatPrice';
import { Button } from '../components/ui/Button';
import { CheckCircle2, CreditCard, Banknote, MapPin, Truck, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCartStore();
  const { user } = useAuthStore();
  const { addToast } = useUIStore();

  const [deliveryType, setDeliveryType] = useState<'courier' | 'pickup'>('courier');
  const [paymentMethod, setPaymentMethod] = useState<'payme' | 'click' | 'uzumpay' | 'cash'>('click');
  const [address, setAddress] = useState(user?.addresses?.[0]?.street || 'Amir Temur ko\'chasi, 14-uy');
  const [city, setCity] = useState('Toshkent');
  const [phone, setPhone] = useState(user?.phone || '+998 (90) 123-45-67');
  const [fullName, setFullName] = useState(user?.name || 'Tomas');
  const [isSuccess, setIsSuccess] = useState(false);

  const total = getTotalPrice();

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
    addToast('Buyurtmangiz muvaffaqiyatli qabul qilindi!', 'success');
    clearCart();
  };

  if (isSuccess) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={42} />
        </div>
        <h2 className="text-3xl font-black text-plum-900 mb-2">Buyurtmangiz qabul qilindi!</h2>
        <p className="text-sm text-plum-900/70 max-w-md mx-auto mb-6">
          Buyurtma raqami: <strong className="text-plum-900 font-mono">#PLUM-98421</strong>.
          Kuryerimiz ertaga soat 10:00 dan 18:00 gacha eshigingizga yetkazadi.
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="primary" onClick={() => navigate('/orders')}>
            Buyurtmalarimga o'tish
          </Button>
          <Button variant="outline" onClick={() => navigate('/')}>
            Bosh sahifa
          </Button>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-md mx-auto px-4 py-16 text-center">
        <h2 className="text-xl font-bold text-plum-900 mb-4">Rasmiylashtirish uchun savatingiz bo'sh</h2>
        <Button variant="primary" onClick={() => navigate('/')}>Bosh sahifaga o'tish</Button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl font-black text-plum-900 mb-8 pb-4 border-b border-plum-100">
        Buyurtmani rasmiylashtirish
      </h1>

      <form onSubmit={handleCompleteOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Chap qism: Yetkazib berish va To'lov usullari (8 ustun) */}
        <div className="lg:col-span-8 space-y-8">
          {/* 1. Yetkazib berish usuli */}
          <div className="bg-white rounded-[20px] border border-plum-100 p-6 shadow-sm space-y-4">
            <h3 className="text-base font-black text-plum-900 flex items-center gap-2">
              <Truck size={18} className="text-plum-500" />
              1. Yetkazib berish usuli
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                onClick={() => setDeliveryType('courier')}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  deliveryType === 'courier'
                    ? 'border-plum-500 bg-plum-50/40 ring-2 ring-plum-100'
                    : 'border-plum-100 hover:border-plum-200'
                }`}
              >
                <div className="font-bold text-sm text-plum-900 mb-1">Eshikkacha kuryer</div>
                <div className="text-xs text-plum-900/60">1 kunda to'g'ridan-to'g'ri eshigingizga (Bepul)</div>
              </div>

              <div
                onClick={() => setDeliveryType('pickup')}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  deliveryType === 'pickup'
                    ? 'border-plum-500 bg-plum-50/40 ring-2 ring-plum-100'
                    : 'border-plum-100 hover:border-plum-200'
                }`}
              >
                <div className="font-bold text-sm text-plum-900 mb-1">Topshirish punkti</div>
                <div className="text-xs text-plum-900/60">Sizga yaqin PLUM punktidan o'zingiz olib ketasiz</div>
              </div>
            </div>

            {/* Manzil va Qabul qiluvchi ma'lumotlari */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-plum-50">
              <div>
                <label className="text-xs font-semibold text-plum-900 block mb-1.5">F.I.SH</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-input bg-surface-light border border-plum-200 text-sm text-plum-900 focus:outline-none focus:border-plum-500"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-plum-900 block mb-1.5">Telefon raqam</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-input bg-surface-light border border-plum-200 text-sm text-plum-900 focus:outline-none focus:border-plum-500"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-plum-900 block mb-1.5">Shahar / Viloyat</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-input bg-surface-light border border-plum-200 text-sm text-plum-900 focus:outline-none focus:border-plum-500"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-plum-900 block mb-1.5">Yetkazib berish manzili</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-input bg-surface-light border border-plum-200 text-sm text-plum-900 focus:outline-none focus:border-plum-500"
                  placeholder="Ko'cha, uy, xonadon raqami"
                  required
                />
              </div>
            </div>
          </div>

          {/* 2. To'lov usuli */}
          <div className="bg-white rounded-[20px] border border-plum-100 p-6 shadow-sm space-y-4">
            <h3 className="text-base font-black text-plum-900 flex items-center gap-2">
              <CreditCard size={18} className="text-plum-500" />
              2. To'lov usuli
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { id: 'payme', name: 'Payme', desc: 'Karta orqali' },
                { id: 'click', name: 'Click', desc: 'Karta orqali' },
                { id: 'uzumpay', name: 'Uzum Pay', desc: 'Tezkor to\'lov' },
                { id: 'cash', name: 'Naqd pul', desc: 'Yetkazilganda' },
              ].map((p) => (
                <div
                  key={p.id}
                  onClick={() => setPaymentMethod(p.id as any)}
                  className={`p-3.5 rounded-xl border-2 cursor-pointer transition-all text-center ${
                    paymentMethod === p.id
                      ? 'border-plum-500 bg-plum-50/50 ring-2 ring-plum-100 font-bold'
                      : 'border-plum-100 hover:border-plum-200'
                  }`}
                >
                  <div className="text-sm font-bold text-plum-900">{p.name}</div>
                  <div className="text-[10px] text-plum-900/60 mt-0.5">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* O'ng qism: Buyurtma qisqacha ma'lumoti (4 ustun) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-[20px] border border-plum-100 p-6 shadow-soft space-y-4 sticky top-28">
            <h3 className="text-base font-black text-plum-900 pb-3 border-b border-plum-100">
              Buyurtma xulosasi
            </h3>

            <div className="max-h-48 overflow-y-auto space-y-3 no-scrollbar">
              {items.map((i) => (
                <div key={i.product.id} className="flex items-center gap-3 text-xs">
                  <img
                    src={i.product.images[0]}
                    alt={i.product.title}
                    className="w-10 h-10 object-cover rounded-lg bg-surface-section shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-plum-900 truncate">{i.product.title}</p>
                    <p className="text-[11px] text-plum-900/50">{i.quantity} x {formatPrice(i.product.price)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-plum-100 space-y-2 text-xs">
              <div className="flex justify-between text-plum-900/70">
                <span>Yetkazib berish</span>
                <span className="font-bold text-green-700">Bepul</span>
              </div>
              <div className="flex justify-between items-baseline pt-2 border-t border-plum-50">
                <span className="text-sm font-bold text-plum-900">Jami:</span>
                <span className="text-2xl font-black text-plum-900">{formatPrice(total)}</span>
              </div>
            </div>

            <Button type="submit" variant="primary" size="lg" className="w-full">
              Buyurtmani tasdiqlash
            </Button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-plum-900/60 pt-2">
              <ShieldCheck size={14} className="text-plum-500" />
              <span>To'lovingiz xavfsiz himoyalangan</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
