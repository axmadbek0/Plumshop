import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Grid, ShoppingBag, Heart, User } from 'lucide-react';
import { useCartStore } from '../../store/useCartStore';
import { useFavoritesStore } from '../../store/useFavoritesStore';
import { useUIStore } from '../../store/useUIStore';

export const MobileNavigation: React.FC = () => {
  const { getTotalItems } = useCartStore();
  const { favorites } = useFavoritesStore();
  const { toggleCatalog } = useUIStore();

  const totalCartCount = getTotalItems();
  const favoritesCount = favorites.length;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-plum-100 md:hidden py-1.5 px-2">
      <div className="flex items-center justify-around">
        {/* Bosh sahifa */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center py-1 px-2 rounded-lg text-[10px] font-medium transition-colors ${
              isActive ? 'text-plum-500 font-bold' : 'text-plum-900/70 hover:text-plum-900'
            }`
          }
        >
          <Home size={20} className="mb-0.5" />
          <span>Bosh</span>
        </NavLink>

        {/* Katalog */}
        <button
          onClick={toggleCatalog}
          className="flex flex-col items-center justify-center py-1 px-2 rounded-lg text-[10px] font-medium text-plum-900/70 hover:text-plum-900 transition-colors"
        >
          <Grid size={20} className="mb-0.5 text-plum-500" />
          <span>Katalog</span>
        </button>

        {/* Savat */}
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `relative flex flex-col items-center justify-center py-1 px-2 rounded-lg text-[10px] font-medium transition-colors ${
              isActive ? 'text-plum-500 font-bold' : 'text-plum-900/70 hover:text-plum-900'
            }`
          }
        >
          <div className="relative">
            <ShoppingBag size={20} className="mb-0.5" />
            {totalCartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-plum-500 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {totalCartCount}
              </span>
            )}
          </div>
          <span>Savat</span>
        </NavLink>

        {/* Sevimlilar */}
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            `relative flex flex-col items-center justify-center py-1 px-2 rounded-lg text-[10px] font-medium transition-colors ${
              isActive ? 'text-plum-500 font-bold' : 'text-plum-900/70 hover:text-plum-900'
            }`
          }
        >
          <div className="relative">
            <Heart size={20} className="mb-0.5" />
            {favoritesCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-plum-500 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {favoritesCount}
              </span>
            )}
          </div>
          <span>Sevimli</span>
        </NavLink>

        {/* Profil */}
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center py-1 px-2 rounded-lg text-[10px] font-medium transition-colors ${
              isActive ? 'text-plum-500 font-bold' : 'text-plum-900/70 hover:text-plum-900'
            }`
          }
        >
          <User size={20} className="mb-0.5" />
          <span>Profil</span>
        </NavLink>
      </div>
    </nav>
  );
};
