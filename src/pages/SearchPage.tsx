import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/mockData';
import { ProductCard } from '../components/product/ProductCard';
import { Search, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const results = query.trim()
    ? PRODUCTS.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.categoryName.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6 pb-4 border-b border-plum-100 flex items-center justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-plum-900">
            "{query}" bo'yicha qidiruv natijalari
          </h1>
          <p className="text-xs text-plum-900/60 mt-1">
            {results.length} ta mahsulot topildi
          </p>
        </div>

        <Link to="/" className="text-xs font-bold text-plum-500 hover:text-plum-600 flex items-center gap-1">
          <ArrowLeft size={16} />
          <span>Bosh sahifa</span>
        </Link>
      </div>

      {results.length === 0 ? (
        <div className="max-w-md mx-auto py-16 text-center">
          <div className="w-16 h-16 rounded-full bg-plum-50 text-plum-500 flex items-center justify-center mx-auto mb-4">
            <Search size={32} />
          </div>
          <h3 className="text-lg font-bold text-plum-900 mb-2">Mahsulot topilmadi</h3>
          <p className="text-xs text-plum-900/60 mb-6">
            So'rovni o'zgartirib ko'ring yoki boshqa toifalardagi mahsulotlarni qidiring.
          </p>
          <Link to="/catalog">
            <Button variant="primary" size="md">
              Katalogni ko'rish
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
