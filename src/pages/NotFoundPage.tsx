import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="max-w-md mx-auto px-4 py-20 text-center">
      <div className="text-7xl font-black text-plum-500 mb-2">404</div>
      <h2 className="text-2xl font-black text-plum-900 mb-2">Sahifa topilmadi</h2>
      <p className="text-xs text-plum-900/60 mb-6">
        Siz qidirayotgan sahifa o'chirilgan, nomi o'zgartirilgan yoki vaqtincha mavjud emas bo'lishi mumkin.
      </p>
      <Link to="/">
        <Button variant="primary" size="md">
          <Home size={16} />
          <span>Bosh sahifaga qaytish</span>
        </Button>
      </Link>
    </div>
  );
};
