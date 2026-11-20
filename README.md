# PLUM Marketplace — Zamonaviy Internet Do'kon (E-commerce)

O'zbekistondagi **Uzum Marketplace** uslubidagi zamonaviy, ixcham, qulay va mahsulotga boyitilgan production darajasidagi online e-commerce veb-platformasi.

---

## 🎨 1. Dizayn Tizimi va Plum Palitrasi

Ushbu loyiha uchun maxsus ishlab chiqilgan **Plum** rang palitrasi:

- `plum-50`: `#e2c9db` — Eng och fon, kartochkalar foni, hover fonlari
- `plum-100`: `#d8a3c1`
- `plum-200`: `#c77cb3`
- `plum-300`: `#b0579b`
- `plum-400`: `#9e2e76`
- `plum-500`: `#8c1b5e` — **Asosiy brend rangi** (tugmalar, aktiv holatlar, urg'ular)
- `plum-600`: `#6a0c4f` — Hover va bosilgan holatlar
- `plum-700`: `#4c0b3a`
- `plum-800`: `#3a0a28`
- `plum-900`: `#290818` — Asosiy matnlar, to'q fonlar va footer

### UI Qoidalari (Uzum uslubi)
- **Burchaklar**: Kartochkalar `16px` (`rounded-[16px]`), tugmalar va inputlar `12px` (`rounded-btn`, `rounded-input`).
- **Mahsulot kartochkasi**: 4:5 nisbatli rasm, chegirma foizi (`-50%`), sevimlilar yurakchasi, o'zbek so'mida formatlangan narx (`1 250 000 so'm`), muddatli to'lov yorlig'i (`oyiga 104 000 so'mdan`), doira "Savatga" tugmasi.
- **Header**: Sticky navigatsiya, qidiruv avtotakliflari (autocomplete), Mega-menyu (Katalog), savat/sevimlilar badge indikatorlari.
- **Mobil versiya**: Qulay pastki navigatsiya paneli (Bosh sahifa, Katalog, Savat, Sevimlilar, Profil).

---

## 🚀 2. Bosh Sahifa Tuzilishi (Yuklangan maket asosida)

2-rasmdagi struktura aynan quyidagi tartibda amalga oshirildi:
1. **Header & Topbar**: Shahar, til tanlash (UZ/RU/EN), qidiruv, savat, sevimlilar, "Barchasi" va bugungi aksiyalar menyusi.
2. **Hero Slayder**: Katta qalin sarlavha ("KOMPYUTER VA AKSESSUARLAR"), "Batafsil" tugmasi, katta quloqchin rasmi, -50% chegirma nishoni, mini mahsulot kartochkasi va vertikal pagination.
3. **Tezkor Panel (Quick Nav)**: "Salom, Tomas" shaxsiy tavsiyalari, Buyurtmalarim, Elektronika (-30%), Uy va oshxona gorizontal paneli.
4. **Kategoriyalar bo'yicha (Shop by Categories)**: 4 ta asosiy kartochka (Go'zallik, Kompyuter, Video o'yinlar, O'yinchoqlar) va ostida 2 ta keng promo banner.
5. **Katta Promo Banner**: "BUYURTMANGIZ ESHIGINGIZGACHA" 1 kunda yetkazib berish bloki.
6. **"Oxirgi ko'rilganlar"**: 5 ta kartochkali karusel.
7. **"Eng ko'p sotilganlar"**: Bestseller yorliqli 5 ta eng xaridorgir mahsulot karuseli.
8. **Ikki Yonma-yon Banner**: "Ayollar uchun qulay uslub" va "Erkaklar uchun qulay uslub" (lifestyle model va mini mahsulot kartochkalari bilan).
9. **"[Ism], bu sizga kerak"**: Shaxsiy tavsiyalar karuseli.
10. **Pastki Kategoriya Zanjiri**: Changyutgichlar, Konsollar, Portativ karnaylar va Proyektorlar.
11. **Yangiliklarga Obuna Bo'lish**: Email orqali vaucher olish bloki.
12. **Footer**: 4 ustunli batafsil ma'lumotlar, "Ko'proq ma'lumot" ochiluvchi paneli, to'lov tizimlari (Humo, Uzcard, Payme, Click) va mualliflik huquqi.

---

## 🛠️ 3. Texnologik Stek

- **React 18/19 + Vite**: Zamonaviy, chaqqon reaktiv frontend arxitekturasi
- **React Router v6**: Dinamik routing, Suspense va `lazy()` bilan kod bo'lish (code splitting)
- **Tailwind CSS**: Maxsus `plum` tokenlari bilan to'liq semantik dizayn tizimi
- **Zustand + Persist**: Savat (`useCartStore`), Sevimlilar (`useFavoritesStore`), Autentifikatsiya (`useAuthStore`) va UI boshqaruvi
- **TanStack Query**: Kesh va ma'lumotlar sinxronizatsiyasi
- **Lucide React**: Yuqori sifatli SVG piktogrammalar
- **Canvas Confetti**: Xarid muvaffaqiyatli yakunlanganda vizual effektlar

---

## 📁 4. Loyiha Arxitekturasi

```text
src/
├── api/             # API xizmatlari va fetcherlar
├── assets/          # Rasmlar va statik resurslar
├── components/      # Qayta ishlatiladigan UI va layout komponentlari
│   ├── auth/        # AuthModal va kirish formalari
│   ├── home/        # Bosh sahifa bloklari (Hero, Categories, Banners...)
│   ├── layout/      # Header, Footer, MegaMenu, MobileNav, ScrollToTop
│   ├── product/     # ProductCard
│   └── ui/          # Button, Badge, Modal, Rating, Skeleton, ToastContainer
├── data/            # Boyitilgan mock ma'lumotlar (mahsulotlar, toifalar)
├── pages/           # Sahifalar (Home, Catalog, ProductDetail, Cart, Checkout, Favorites, Orders, Profile, Search, 404)
├── store/           # Zustand do'konlari (cart, auth, favorites, ui)
├── types/           # TypeScript interfeyslari (Product, Category, CartItem...)
├── utils/           # formatPrice, cn (tailwind-merge)
├── App.tsx          # Asosiy router va sahifa karkasi
└── main.tsx         # Ilova kirish nuqtasi
```

---

## ⚡ 5. O'rnatish va Ishga Tushirish

### Talablar:
- Node.js (18.x yoki undan yuqori)
- npm yoki yarn / pnpm

### Qadamlar:

1. **Repozitoriyaga o'ting yoki yuklab oling**:
   ```bash
   cd loyiha
   ```

2. **Bog'liqliklarni o'rnatish**:
   ```bash
   npm install
   ```

3. **Lokal dasturchi serverini ishga tushirish (Development)**:
   ```bash
   npm run dev
   ```
   Brauzeringizda oching: `http://localhost:5173`

4. **Production uchun yig'ish (Build)**:
   ```bash
   npm run build
   ```

5. **Production yig'masini oldindan ko'rish (Preview)**:
   ```bash
   npm run preview
   ```

---

## 🔮 6. Keyingi Qadamlar va Haqiqiy Backend Integratsiyasi

Loyiha to'liq modulli qilingan bo'lib, haqiqiy backend bilan ulash juda oson:

1. **REST API yoki GraphQL ulanishi**:
   - `src/api/` ichida `axios` yoki `fetch` bilan haqiqiy backend API nuqtalarini kiritish:
     - `GET /api/v1/products`
     - `GET /api/v1/categories`
     - `POST /api/v1/orders`
   - `src/data/mockData.ts` o'rniga TanStack Query yordamida backenddan server-side pagination va filtratsiya bilan ma'lumot olish.

2. **To'lov Tizimlari (Payment Gateway Integratsiyasi)**:
   - **Payme**: `merchant_id` va `checkout` URL orqali to'lov oynasini ochish yoki Payme Subscribe API.
   - **Click**: Click Shop API yoki Click On-site to'lov formasi.
   - **Uzum Pay**: Uzum Bank ochiq SDK orqali 1-click to'lov tizimini ulash.

3. **SMS Autentifikatsiya (Eskiz / PlayMobile)**:
   - `AuthModal.tsx` ichida O'zbekiston provayderlari (Eskiz.uz yoki PlayMobile) orqali haqiqiy SMS OTP yuborish va JWT tokenlarni saqlash.

4. **Analytics va Metrika**:
   - Google Analytics 4 (GA4) va Yandex Metrika e-commerce hodisalari (`add_to_cart`, `purchase`, `view_item`).
# Plumshop
# Plumshop
