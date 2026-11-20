import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MobileNavigation } from './components/layout/MobileNavigation';
import { ToastContainer } from './components/ui/ToastContainer';
import { AuthModal } from './components/auth/AuthModal';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { Skeleton } from './components/ui/Skeleton';

// Lazy loading sahifalar
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const CatalogPage = lazy(() => import('./pages/CatalogPage').then(m => ({ default: m.CatalogPage })));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage').then(m => ({ default: m.ProductDetailPage })));
const CartPage = lazy(() => import('./pages/CartPage').then(m => ({ default: m.CartPage })));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage').then(m => ({ default: m.CheckoutPage })));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage').then(m => ({ default: m.FavoritesPage })));
const SearchPage = lazy(() => import('./pages/SearchPage').then(m => ({ default: m.SearchPage })));
const OrdersPage = lazy(() => import('./pages/OrdersPage').then(m => ({ default: m.OrdersPage })));
const ProfilePage = lazy(() => import('./pages/ProfilePage').then(m => ({ default: m.ProfilePage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

// Sahifa yuklanish skelet indikatori
const PageFallback: React.FC = () => (
  <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
    <Skeleton className="h-48 w-full rounded-2xl" />
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Skeleton className="h-64 rounded-xl" />
      <Skeleton className="h-64 rounded-xl" />
      <Skeleton className="h-64 rounded-xl" />
      <Skeleton className="h-64 rounded-xl" />
    </div>
  </div>
);

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-surface-light text-plum-900">
      <ScrollToTop />
      {/* Asosiy Header */}
      <Header />

      {/* Asosiy sahifa kontenti */}
      <main className="flex-1">
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/category/:slug" element={<CatalogPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobil qurilmalar uchun pastki navigatsiya */}
      <MobileNavigation />

      {/* Global Modallar va Toast bildirishnomalari */}
      <AuthModal />
      <ToastContainer />
    </div>
  );
};

export default App;
