import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search,
  ShoppingBag,
  Heart,
  User as UserIcon,
  Menu,
  X,
  MapPin,
  Globe,
  Sparkles,
  Gift,
  Flame,
  ChevronDown,
} from 'lucide-react';
import { useCartStore } from '../../store/useCartStore';
import { useFavoritesStore } from '../../store/useFavoritesStore';
import { useAuthStore } from '../../store/useAuthStore';
import { useUIStore } from '../../store/useUIStore';
import { PRODUCTS } from '../../data/mockData';
import { formatPrice } from '../../utils/formatPrice';
import { MegaMenu } from './MegaMenu';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const { getTotalItems, getTotalPrice } = useCartStore();
  const { favorites } = useFavoritesStore();
  const { user, isAuthenticated, logout } = useAuthStore();
  const { isCatalogOpen, toggleCatalog, setShowSuggestions, searchQuery, setSearchQuery, setAuthModalOpen } = useUIStore() as any;

  const [searchVal, setSearchVal] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<'UZ' | 'RU' | 'EN'>('UZ');

  const searchRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  // Qidiruv avtotakliflari
  const filteredSuggestions = searchVal.trim()
    ? PRODUCTS.filter((p) =>
        p.title.toLowerCase().includes(searchVal.toLowerCase()) ||
        p.categoryName.toLowerCase().includes(searchVal.toLowerCase())
      ).slice(0, 5)
    : [];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchVal.trim()) {
      setIsDropdownOpen(false);
      navigate(`/search?q=${encodeURIComponent(searchVal.trim())}`);
    }
  };

  return (
    <>
      {/* 1. Ingichka yuqori yordamchi panel */}
      <div className="bg-surface-section border-b border-plum-100 text-xs text-plum-900/80 py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-plum-800">
              <MapPin size={14} className="text-plum-500" />
              <span>Shahar:</span>
              <span className="font-semibold text-plum-900 underline cursor-pointer hover:text-plum-500">
                Toshkent
              </span>
            </div>
            <span className="text-plum-200">|</span>
            <span className="text-plum-700">Topshirish punktlari: 1 kunda bepul yetkazib beramiz!</span>
          </div>

          <div className="flex items-center gap-5">
            <Link to="/orders" className="hover:text-plum-500 transition-colors">
              Buyurtmalarim
            </Link>
            <div className="relative flex items-center gap-1 cursor-pointer">
              <Globe size={13} className="text-plum-500" />
              <select
                aria-label="Tilni tanlash"
                value={selectedLang}
                onChange={(e) => setSelectedLang(e.target.value as any)}
                className="bg-transparent border-none text-xs font-semibold text-plum-900 focus:outline-none cursor-pointer"
              >
                <option value="UZ">O'zbekcha (UZ)</option>
                <option value="RU">Русский (RU)</option>
                <option value="EN">English (EN)</option>
              </select>
            </div>
            <span className="font-medium text-plum-900">UZS (so'm)</span>
          </div>
        </div>
      </div>

      {/* 2. Asosiy Header (Sticky) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-plum-100 transition-shadow">
        <div className="max-w-7xl mx-auto px-4 py-2.5 sm:py-3 flex items-center justify-between gap-3 md:gap-6">
          {/* Logo va Katalog tugmasi */}
          <div className="flex items-center gap-3 md:gap-4 shrink-0">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-plum-500 to-plum-700 flex items-center justify-center text-white shadow-md shadow-plum-500/25 group-hover:scale-105 transition-transform">
                <span className="font-black text-xl tracking-tighter">P</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-plum-900 group-hover:text-plum-500 transition-colors">
                  PLUM
                </span>
              </div>
            </Link>

            {/* Katalog (Mega menyu) tugmasi */}
            <button
              onClick={toggleCatalog}
              className={`flex items-center gap-2 px-3.5 py-2.5 rounded-btn font-semibold text-sm transition-all duration-200 ${
                isCatalogOpen
                  ? 'bg-plum-600 text-white shadow-sm'
                  : 'bg-plum-50 text-plum-900 hover:bg-plum-100 hover:text-plum-950 border border-plum-200'
              }`}
            >
              {isCatalogOpen ? <X size={18} /> : <Menu size={18} className="text-plum-500" />}
              <span className="hidden sm:inline">Katalog</span>
            </button>
          </div>

          {/* Katta qidiruv inputi (avtotaklif bilan) */}
          <div ref={searchRef} className="flex-1 max-w-2xl relative">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center">
              <input
                type="text"
                placeholder="Mahsulotlar va toifalardan qidirish..."
                value={searchVal}
                onChange={(e) => {
                  setSearchVal(e.target.value);
                  setIsDropdownOpen(true);
                }}
                onFocus={() => setIsDropdownOpen(true)}
                className="w-full h-11 pl-4 pr-12 rounded-input bg-surface-light border border-plum-200 text-sm text-plum-900 placeholder:text-plum-900/40 focus:outline-none focus:border-plum-500 focus:bg-white focus:ring-2 focus:ring-plum-100 transition-all"
              />
              <button
                type="submit"
                aria-label="Qidirish"
                className="absolute right-1 top-1 w-9 h-9 rounded-lg bg-plum-500 hover:bg-plum-600 text-white flex items-center justify-center transition-colors shadow-sm"
              >
                <Search size={18} />
              </button>
            </form>

            {/* Avtotaklif dropdown */}
            {isDropdownOpen && filteredSuggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-elevated border border-plum-100 overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="p-2 text-xs font-semibold text-plum-900/60 uppercase border-b border-plum-50">
                  Mahsulotlar
                </div>
                {filteredSuggestions.map((prod) => (
                  <Link
                    key={prod.id}
                    to={`/product/${prod.id}`}
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center gap-3 p-2.5 hover:bg-plum-50 transition-colors"
                  >
                    <img
                      src={prod.images[0]}
                      alt={prod.title}
                      className="w-10 h-10 object-cover rounded-lg bg-plum-50"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs sm:text-sm font-medium text-plum-900 truncate">
                        {prod.title}
                      </div>
                      <div className="text-xs text-plum-500 font-bold">
                        {formatPrice(prod.price)}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* O'ng tomon: Profil, Sevimlilar, Savat */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            {/* Profil */}
            <div ref={userMenuRef} className="relative">
              {isAuthenticated && user ? (
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-2 p-2 rounded-btn hover:bg-plum-50 transition-colors text-sm font-medium text-plum-900"
                >
                  <div className="w-8 h-8 rounded-full bg-plum-100 border border-plum-300 flex items-center justify-center overflow-hidden">
                    {user.avatar ? (
                      <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                    ) : (
                      <UserIcon size={16} className="text-plum-700" />
                    )}
                  </div>
                  <span className="hidden lg:inline">{user.name}</span>
                  <ChevronDown size={14} className="hidden lg:inline text-plum-400" />
                </button>
              ) : (
                <button
                  onClick={() => setAuthModalOpen(true)}
                  className="flex items-center gap-2 px-3 py-2 rounded-btn hover:bg-plum-50 transition-colors text-sm font-medium text-plum-900"
                >
                  <UserIcon size={20} className="text-plum-700" />
                  <span className="hidden sm:inline">Kirish</span>
                </button>
              )}

              {/* User dropdown menyusi */}
              {isUserMenuOpen && isAuthenticated && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-elevated border border-plum-100 py-1.5 z-50 animate-in fade-in duration-150">
                  <div className="px-3 py-2 border-b border-plum-100">
                    <p className="text-sm font-bold text-plum-900">{user?.name}</p>
                    <p className="text-xs text-plum-900/60 truncate">{user?.phone}</p>
                  </div>
                  <Link
                    to="/profile"
                    onClick={() => setIsUserMenuOpen(false)}
                    className="block px-3 py-2 text-sm text-plum-900 hover:bg-plum-50 transition-colors"
                  >
                    Mening profilim
                  </Link>
                  <Link
                    to="/orders"
                    onClick={() => setIsUserMenuOpen(false)}
                    className="block px-3 py-2 text-sm text-plum-900 hover:bg-plum-50 transition-colors"
                  >
                    Buyurtmalarim
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsUserMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                  >
                    Chiqish
                  </button>
                </div>
              )}
            </div>

            {/* Sevimlilar */}
            <Link
              to="/favorites"
              aria-label="Sevimlilar ro'yxati"
              className="relative p-2 sm:px-3 sm:py-2 rounded-btn hover:bg-plum-50 transition-colors flex items-center gap-2 text-sm font-medium text-plum-900"
            >
              <Heart size={20} className="text-plum-700" />
              <span className="hidden xl:inline">Sevimlilar</span>
              {favorites.length > 0 && (
                <span className="absolute top-1 right-1 sm:top-1.5 sm:right-2 min-w-4 h-4 px-1 rounded-full bg-plum-500 text-white text-[10px] font-bold flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </Link>

            {/* Savat */}
            <Link
              to="/cart"
              aria-label="Savatga o'tish"
              className="relative p-2 sm:px-3 sm:py-2 rounded-btn bg-plum-50 hover:bg-plum-100 border border-plum-200 transition-colors flex items-center gap-2.5 text-sm font-medium text-plum-900"
            >
              <div className="relative">
                <ShoppingBag size={20} className="text-plum-500" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 min-w-4 h-4 px-1 rounded-full bg-plum-500 text-white text-[10px] font-bold flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </div>
              <div className="hidden md:flex flex-col text-left">
                <span className="text-[11px] text-plum-700 leading-none">Savat</span>
                <span className="text-xs font-bold text-plum-900 leading-tight">
                  {formatPrice(getTotalPrice())}
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* 3. Sub-header linklari */}
        <div className="border-t border-plum-100 bg-white hidden sm:block">
          <div className="max-w-7xl mx-auto px-4 flex items-center gap-6 overflow-x-auto no-scrollbar text-xs font-medium text-plum-800 py-2">
            <button
              onClick={toggleCatalog}
              className="flex items-center gap-1.5 text-plum-900 font-bold hover:text-plum-500 transition-colors shrink-0"
            >
              <Menu size={14} className="text-plum-500" />
              Barchasi
            </button>
            <Link
              to="/catalog?filter=deals"
              className="flex items-center gap-1 text-plum-900 font-semibold hover:text-plum-500 transition-colors shrink-0"
            >
              <Flame size={14} className="text-plum-500" />
              Bugungi aksiyalar
            </Link>
            <Link
              to="/catalog?category=gift-cards"
              className="flex items-center gap-1 hover:text-plum-500 transition-colors shrink-0"
            >
              <Gift size={14} className="text-plum-500" />
              Sovg'a kartalari
            </Link>
            <Link
              to="/catalog?filter=installment"
              className="flex items-center gap-1 hover:text-plum-500 transition-colors shrink-0 text-plum-500 font-semibold"
            >
              <Sparkles size={14} />
              Muddatli to'lov 0%
            </Link>
            <Link to="/category/beauty" className="hover:text-plum-500 transition-colors shrink-0">
              Go'zallik va parvarish
            </Link>
            <Link to="/category/computers" className="hover:text-plum-500 transition-colors shrink-0">
              Kompyuterlar
            </Link>
            <Link to="/category/gaming" className="hover:text-plum-500 transition-colors shrink-0">
              Video o'yinlar
            </Link>
            <Link to="/category/home-appliances" className="hover:text-plum-500 transition-colors shrink-0">
              Maishiy texnika
            </Link>
          </div>
        </div>
      </header>

      {/* Mega Menyu */}
      <MegaMenu />
    </>
  );
};
