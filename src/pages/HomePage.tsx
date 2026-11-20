import React from 'react';
import { HeroSlider } from '../components/home/HeroSlider';
import { QuickNavPanel } from '../components/home/QuickNavPanel';
import { CategoriesGrid } from '../components/home/CategoriesGrid';
import { DeliveryPromoBanner } from '../components/home/DeliveryPromoBanner';
import { ProductCarouselSection } from '../components/home/ProductCarouselSection';
import { LifestyleDuoBanners } from '../components/home/LifestyleDuoBanners';
import { CategoryChainScroll } from '../components/home/CategoryChainScroll';
import { NewsletterSection } from '../components/home/NewsletterSection';
import { PRODUCTS } from '../data/mockData';
import { useAuthStore } from '../store/useAuthStore';

export const HomePage: React.FC = () => {
  const { user } = useAuthStore();
  const userName = user?.name || 'Tomas';

  // 2-rasmdagi bo'limlarga mos mahsulotlar:
  // f) Oxirgi ko'rilganlar (5 ta kartochka)
  const recentlyViewed = PRODUCTS.slice(1, 6);

  // g) Eng ko'p sotilganlar (Bestseller)
  const bestsellers = PRODUCTS.slice(6, 11);

  // i) [Ism], bu sizga kerak (Shaxsiy tavsiyalar)
  const personalRecommendations = PRODUCTS.slice(11, 16);

  return (
    <div className="max-w-7xl mx-auto px-4 py-2">
      {/* b) Hero slayder */}
      <HeroSlider />

      {/* c) Tezkor panel */}
      <QuickNavPanel />

      {/* d) Kategoriyalar bo'yicha */}
      <CategoriesGrid />

      {/* e) Katta promo banner */}
      <DeliveryPromoBanner />

      {/* f) Oxirgi ko'rilganlar karuseli (5 ta kartochka) */}
      <ProductCarouselSection
        title="Oxirgi ko'rilganlar"
        subtitle="Siz qiziqqan va yaqinda ko'zdan kechirgan mahsulotlar"
        products={recentlyViewed}
        viewAllLink="/catalog?filter=recent"
      />

      {/* g) Eng ko'p sotilganlar karuseli ("Bestseller" yorlig'i bilan) */}
      <ProductCarouselSection
        title="Eng ko'p sotilganlar"
        subtitle="Haftaning eng xaridorgir va ommabop mahsulotlari"
        badge="Bestseller"
        products={bestsellers}
        viewAllLink="/catalog?filter=bestsellers"
      />

      {/* h) Ikki yonma-yon banner: Ayollar va Erkaklar uslubi */}
      <LifestyleDuoBanners />

      {/* i) [Ism], bu sizga kerak shaxsiy tavsiyalar karuseli */}
      <div id="recommendations">
        <ProductCarouselSection
          title={`${userName}, bu sizga kerak`}
          subtitle="Sizning qiziqishlaringiz va qidiruvlaringiz asosida tanlangan"
          products={personalRecommendations}
          viewAllLink="/catalog?filter=recommended"
        />
      </div>

      {/* j) Pastki kategoriya zanjiri */}
      <CategoryChainScroll />

      {/* k) YANGILIKLARGA OBUNA BO'LING */}
      <NewsletterSection />
    </div>
  );
};
