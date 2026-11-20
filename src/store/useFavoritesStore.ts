import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '../types';

interface FavoritesState {
  favorites: Product[];
  toggleFavorite: (product: Product) => void;
  isFavorite: (productId: string) => boolean;
  clearFavorites: () => void;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],

      toggleFavorite: (product: Product) => {
        set((state) => {
          const exists = state.favorites.some((item) => item.id === product.id);
          if (exists) {
            return { favorites: state.favorites.filter((item) => item.id !== product.id) };
          }
          return { favorites: [...state.favorites, product] };
        });
      },

      isFavorite: (productId: string) => {
        return get().favorites.some((item) => item.id === productId);
      },

      clearFavorites: () => {
        set({ favorites: [] });
      }
    }),
    {
      name: 'plum-favorites-storage',
    }
  )
);
