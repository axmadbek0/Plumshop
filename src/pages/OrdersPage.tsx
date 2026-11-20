import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Truck, CheckCircle2, ChevronRight, Clock } from 'lucide-react';
import { formatPrice } from '../utils/formatPrice';
import { PRODUCTS } from '../data/mockData';
import { Button } from '../components/ui/Button';

export const OrdersPage: React.FC = () => {
  const mockOrders = [
    {
      id: 'PLUM-98421',
      date: '20-noyabr, 2026',
      status: 'shipping',
      statusText: 'Yetkazilmoqda (Kuryer yo\'lda)',
      total: 658000,
      deliveryDate: 'Ertaga, 10:00 - 18:00',
      pickupCode: '428-19',
      items: [
        { product: PRODUCTS[0], quantity: 1 },
        { product: PRODUCTS[5], quantity: 1 }
      ]
    },
    {
      id: 'PLUM-87234',
      date: '14-noyabr, 2026',
      status: 'delivered',
      statusText: 'Yetkazib berildi',
      total: 1290000,
      deliveryDate: '15-noyabr, 2026',
      pickupCode: '—',
      items: [
        { product: PRODUCTS[6], quantity: 1 }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-plum-100">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-plum-900">
            Mening buyurtmalarim
          </h1>
          <p className="text-xs text-plum-900/60 mt-0.5">
            Barcha faol va o'tgan buyurtmalaringiz tarixi
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {mockOrders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-[20px] border border-plum-100 p-6 shadow-sm space-y-4"
          >
            {/* Buyurtma yuqori sarlavhasi */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-plum-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-plum-50 text-plum-600 flex items-center justify-center shrink-0">
                  <Package size={20} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-plum-900">№ {order.id}</span>
                    <span className="text-xs text-plum-900/50">({order.date})</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-plum-600 mt-0.5">
                    {order.status === 'shipping' ? (
                      <Truck size={14} className="text-plum-500 animate-pulse" />
                    ) : (
                      <CheckCircle2 size={14} className="text-green-600" />
                    )}
                    <span>{order.statusText}</span>
                  </div>
                </div>
              </div>

              <div className="flex sm:flex-col items-baseline sm:items-end justify-between sm:justify-center">
                <span className="text-xs text-plum-900/50">Jami to'lov:</span>
                <span className="text-base font-black text-plum-900">{formatPrice(order.total)}</span>
              </div>
            </div>

            {/* Qabul qilish kodi bloki */}
            {order.status === 'shipping' && (
              <div className="bg-plum-50 p-3 rounded-xl border border-plum-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-plum-900">
                  <Clock size={16} className="text-plum-500" />
                  <span>Kutilayotgan yetkazish: <strong>{order.deliveryDate}</strong></span>
                </div>
                <div className="text-xs font-bold text-plum-700">
                  Olish kodi: <span className="font-mono text-sm bg-white px-2 py-0.5 rounded border border-plum-200">{order.pickupCode}</span>
                </div>
              </div>
            )}

            {/* Buyurtma tovarlari */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {order.items.map(({ product, quantity }) => (
                <div key={product.id} className="flex items-center gap-3 p-2 rounded-xl bg-surface-section">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-14 h-14 object-cover rounded-lg bg-white shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-plum-900 truncate">{product.title}</p>
                    <p className="text-[11px] text-plum-900/60 mt-0.5">
                      {quantity} dona x {formatPrice(product.price)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
