import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '../types';
import { MOCK_USER } from '../data/mockData';

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (emailOrPhone: string, code?: string) => Promise<boolean>;
  logout: () => void;
  updateUser: (data: Partial<User>) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      // Boshlang'ich holatda 2-rasmdagi "Tomas" profili mavjud
      user: MOCK_USER,
      token: 'mock-jwt-token-12345',
      isAuthenticated: true,

      login: async (emailOrPhone: string) => {
        // Mock login
        const loggedUser: User = {
          ...MOCK_USER,
          phone: emailOrPhone.startsWith('+') ? emailOrPhone : MOCK_USER.phone,
          email: emailOrPhone.includes('@') ? emailOrPhone : MOCK_USER.email,
        };
        set({
          user: loggedUser,
          token: 'mock-jwt-token-' + Date.now(),
          isAuthenticated: true,
        });
        return true;
      },

      logout: () => {
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        });
      },

      updateUser: (data: Partial<User>) => {
        set((state) => ({
          user: state.user ? { ...state.user, ...data } : null,
        }));
      },
    }),
    {
      name: 'plum-auth-storage',
    }
  )
);
