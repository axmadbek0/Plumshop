import React, { useState, useMemo } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../data/mockData';
import { ProductCard } from '../components/product/ProductCard';
import { Filter, SlidersHorizontal, Grid3X3, List, ChevronRight, X } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const CatalogPage: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>();
  const [searchParams] = useSearchParams();
  const filterParam = searchParams.get('filter');

  // Holatlar
  const [selectedCategory, setSelectedCategory] = useState<string>(slug || 'all');
  const [sortBy, setSortBy] = useState<'popular' | 'price-asc' | 'price-desc' | 'rating'>('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000000]);
  const [onlyDiscounted, setOnlyDiscounted] = useState<boolean>(filterParam === 'deals');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Kategoriya o'zgarganda yangilash
  React.useEffect(() => {
    if (slug) {
      setSelectedCategory(slug);
    }
  }, [slug]);

  // Saralash va filtrlash mantiqi
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Kategoriya
      if (selectedCategory !== 'all' && product.categorySlug !== selectedCategory) {
        return false;
      }
      // Narx oralig'i
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false;
      }
      // Chegirmali
      if (onlyDiscounted && (!product.discountPercent || product.discountPercent <= 0)) {
        return false;
      }
      // Bestseller
      if (filterParam === 'bestsellers' && !product.isBestseller) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.salesCount || 0) - (a.salesCount || 0); // popular
    });
  }, [selectedCategory, priceRange, onlyDiscounted, sortBy, filterParam]);

  const activeCategoryObj = CATEGORIES.find((c) => c.slug === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Breadcrumb navigatsiya */}
      <nav className="flex items-center gap-2 text-xs text-plum-900/60 mb-6">
        <Link to="/" className="hover:text-plum-500 transition-colors">Bosh sahifa</Link>
        <ChevronRight size={14} />
        <Link to="/catalog" className="hover:text-plum-500 transition-colors">Katalog</Link>
        {activeCategoryObj && (
          <>
            <ChevronRight size={14} />
            <span className="text-plum-900 font-semibold">{activeCategoryObj.name}</span>
          </>
        )}
      </nav>

      {/* Sarlavha va boshqaruv paneli */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-plum-100">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-plum-900">
            {activeCategoryObj ? activeCategoryObj.name : 'Barcha mahsulotlar'}
          </h1>
          <p className="text-xs text-plum-900/60 mt-1">
            {filteredProducts.length} ta mahsulot topildi
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Mobil filter tugmasi */}
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="md:hidden flex items-center gap-2 px-3 py-2 rounded-btn border border-plum-200 bg-white text-xs font-semibold text-plum-900"
          >
            <Filter size={16} className="text-plum-500" />
            <span>Filtrlar</span>
          </button>

          {/* Saralash select */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-plum-900/60 hidden sm:inline">Saralash:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="text-xs font-semibold text-plum-900 bg-white border border-plum-200 rounded-btn px-3 py-2 focus:outline-none focus:border-plum-500"
            >
              <option value="popular">Ommabopligi bo'yicha</option>
              <option value="price-asc">Avval arzonlari</option>
              <option value="price-desc">Avval qimmatlari</option>
              <option value="rating">Yuqori reytingli</option>
            </select>
          </div>

          {/* Grid / List ko'rinish */}
          <div className="hidden sm:flex items-center gap-1 bg-surface-section p-1 rounded-lg border border-plum-100">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-md transition-colors ${
                viewMode === 'grid' ? 'bg-white text-plum-500 shadow-sm' : 'text-plum-400 hover:text-plum-900'
              }`}
            >
              <Grid3X3 size={18} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-md transition-colors ${
                viewMode === 'list' ? 'bg-white text-plum-500 shadow-sm' : 'text-plum-400 hover:text-plum-900'
              }`}
            >
              <List size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Chap panel: Filtrlar (Desktop) */}
        <aside className="hidden md:block space-y-6">
          {/* Toifalar */}
          <div className="bg-white p-5 rounded-[16px] border border-plum-100 shadow-sm">
            <h3 className="font-bold text-sm text-plum-900 mb-3 pb-2 border-b border-plum-50">
              Toifalar
            </h3>
            <div className="space-y-1">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`w-full text-left text-xs py-2 px-2.5 rounded-lg transition-colors flex items-center justify-between ${
                  selectedCategory === 'all'
                    ? 'bg-plum-50 text-plum-500 font-bold'
                    : 'text-plum-800 hover:bg-plum-50/50'
                }`}
              >
                <span>Barchasi</span>
                <span className="text-[10px] text-plum-400">({PRODUCTS.length})</span>
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`w-full text-left text-xs py-2 px-2.5 rounded-lg transition-colors flex items-center justify-between ${
                    selectedCategory === cat.slug
                      ? 'bg-plum-50 text-plum-500 font-bold'
                      : 'text-plum-800 hover:bg-plum-50/50'
                  }`}
                >
                  <span className="truncate">{cat.name}</span>
                  <span className="text-[10px] text-plum-400">({cat.itemCount})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Chegirmalar filtri */}
          <div className="bg-white p-5 rounded-[16px] border border-plum-100 shadow-sm space-y-3">
            <h3 className="font-bold text-sm text-plum-900">Takliflar va Chegirmalar</h3>
            <label className="flex items-center gap-2 text-xs text-plum-900 cursor-pointer">
              <input
                type="checkbox"
                checked={onlyDiscounted}
                onChange={(e) => setOnlyDiscounted(e.target.checked)}
                className="w-4 h-4 rounded text-plum-500 focus:ring-plum-400 accent-plum-500"
              />
              <span>Faqat chegirmali tovarlar</span>
            </label>
          </div>
        </aside>

        {/* O'ng panel: Mahsulotlar to'ri */}
        <div className="md:col-span-3">
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-2xl border border-plum-100 p-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-plum-50 text-plum-500 flex items-center justify-center mx-auto">
                <SlidersHorizontal size={32} />
              </div>
              <h3 className="text-lg font-bold text-plum-900">Mahsulotlar topilmadi</h3>
              <p className="text-xs text-plum-900/60 max-w-sm mx-auto">
                Tanlangan filtrlar bo'yicha hech qanday tovar topilmadi. Filtr parametrlarini o'zgartirib ko'ring.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSelectedCategory('all');
                  setOnlyDiscounted(false);
                }}
              >
                Filtrlarni tozalash
              </Button>
            </div>
          ) : (
            <div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-5'
                  : 'flex flex-col gap-4'
              }
            >
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
