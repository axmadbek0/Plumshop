import { create } from 'zustand';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
}

interface UIState {
  isCatalogOpen: boolean;
  isAuthModalOpen: boolean;
  searchQuery: string;
  toasts: ToastMessage[];
  setCatalogOpen: (open: boolean) => void;
  toggleCatalog: () => void;
  setAuthModalOpen: (open: boolean) => void;
  setSearchQuery: (query: string) => void;
  addToast: (message: string, type?: 'success' | 'error' | 'info') => void;
  removeToast: (id: string) => void;
}

export const useUIStore = create<UIState>((set) => ({
  isCatalogOpen: false,
  isAuthModalOpen: false,
  searchQuery: '',
  toasts: [],

  setCatalogOpen: (open) => set({ isCatalogOpen: open }),
  toggleCatalog: () => set((state) => ({ isCatalogOpen: !state.isCatalogOpen })),
  setAuthModalOpen: (open) => set({ isAuthModalOpen: open }),
  setSearchQuery: (query) => set({ searchQuery: query }),

  addToast: (message, type = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    set((state) => ({
      toasts: [...state.toasts, { id, message, type }]
    }));
    setTimeout(() => {
      set((state) => ({
        toasts: state.toasts.filter((t) => t.id !== id)
      }));
    }, 3500);
  },

  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id)
    })),
}));
