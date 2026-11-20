import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product } from '../types';

interface CartState {
  items: CartItem[];
  promoCode: string | null;
  discountRate: number; // e.g. 0.1 for 10%
  addToCart: (product: Product, quantity?: number, selectedColor?: string, selectedSize?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  applyPromoCode: (code: string) => boolean;
  clearCart: () => void;
  getTotalItems: () => number;
  getSubtotal: () => number;
  getDiscountAmount: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [
        // Boshlang'ich qulaylik uchun 1 ta mahsulot
        {
          product: {
            id: 'prod-ts-1',
            title: 'Plum Basics Lightning to USB-C Tezkor zaryadlash kabeli',
            slug: 'plum-basics-lightning-usb-c-cable',
            price: 159000,
            oldPrice: 220000,
            discountPercent: 28,
            rating: 4.9,
            reviewsCount: 2450,
            images: ['https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80'],
            categorySlug: 'computers',
            categoryName: 'Kompyuter va aksessuarlar',
            description: 'Mustahkam neylon o\'ramli kabel',
            specs: { 'Uzunlik': '1.8 metr' },
            stock: 120,
            deliveryDays: 1
          },
          quantity: 1,
        }
      ],
      promoCode: null,
      discountRate: 0,

      addToCart: (product, quantity = 1, selectedColor, selectedSize) => {
        set((state) => {
          const existingIndex = state.items.findIndex(
            (item) => item.product.id === product.id &&
              item.selectedColor === selectedColor &&
              item.selectedSize === selectedSize
          );

          if (existingIndex > -1) {
            const updated = [...state.items];
            updated[existingIndex].quantity += quantity;
            return { items: updated };
          }

          return {
            items: [...state.items, { product, quantity, selectedColor, selectedSize }]
          };
        });
      },

      removeFromCart: (productId) => {
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== productId)
        }));
      },

      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(productId);
          return;
        }
        set((state) => ({
          items: state.items.map((item) =>
            item.product.id === productId ? { ...item, quantity } : item
          )
        }));
      },

      applyPromoCode: (code: string) => {
        const clean = code.trim().toUpperCase();
        if (clean === 'PLUM2026' || clean === 'UZUM10' || clean === 'CHORVOQ') {
          set({ promoCode: clean, discountRate: 0.1 });
          return true;
        }
        return false;
      },

      clearCart: () => {
        set({ items: [], promoCode: null, discountRate: 0 });
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getSubtotal: () => {
        return get().items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
      },

      getDiscountAmount: () => {
        const subtotal = get().getSubtotal();
        return Math.round(subtotal * get().discountRate);
      },

      getTotalPrice: () => {
        const subtotal = get().getSubtotal();
        const discount = get().getDiscountAmount();
        return Math.max(0, subtotal - discount);
      }
    }),
    {
      name: 'plum-cart-storage',
    }
  )
);
