import { Product, Category } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'cat-1',
    slug: 'beauty',
    name: "Go'zallik va parvarish",
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80',
    itemCount: 1420,
    discountBadge: '-25%',
    subcategories: [
      { id: 'sub-1', name: 'Yuz parvarishi', slug: 'face-care' },
      { id: 'sub-2', name: 'Soch parvarishi', slug: 'hair-care' },
      { id: 'sub-3', name: 'Parfyumeriya', slug: 'perfume' },
    ]
  },
  {
    id: 'cat-2',
    slug: 'computers',
    name: 'Kompyuter va aksessuarlar',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80',
    itemCount: 890,
    discountBadge: '-35%',
    subcategories: [
      { id: 'sub-4', name: 'Noutbuklar', slug: 'laptops' },
      { id: 'sub-5', name: 'Monitorlar', slug: 'monitors' },
      { id: 'sub-6', name: 'Klaviatura va sichqonchalar', slug: 'keyboards' },
    ]
  },
  {
    id: 'cat-3',
    slug: 'gaming',
    name: "Video o'yinlar va VR",
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?auto=format&fit=crop&w=600&q=80',
    itemCount: 650,
    discountBadge: '-40%',
    subcategories: [
      { id: 'sub-7', name: 'O\'yin konsollari', slug: 'consoles' },
      { id: 'sub-8', name: 'VR shlemlar', slug: 'vr-headsets' },
      { id: 'sub-9', name: 'O\'yin aksessuarlari', slug: 'gamepads' },
    ]
  },
  {
    id: 'cat-4',
    slug: 'toys',
    name: "O'yinchoqlar va bolalar",
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=600&q=80',
    itemCount: 1100,
    discountBadge: '-20%',
    subcategories: [
      { id: 'sub-10', name: 'Yumshoq o\'yinchoqlar', slug: 'soft-toys' },
      { id: 'sub-11', name: 'Konstruktorlar', slug: 'lego' },
      { id: 'sub-12', name: 'Rivojlantiruvchi o\'yinlar', slug: 'educational' },
    ]
  },
  {
    id: 'cat-5',
    slug: 'home-appliances',
    name: 'Maishiy texnika va uy',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
    itemCount: 2300,
    discountBadge: '-30%',
    subcategories: [
      { id: 'sub-13', name: 'Changyutgichlar', slug: 'vacuums' },
      { id: 'sub-14', name: 'Oshxona texnikasi', slug: 'kitchen' },
    ]
  },
  {
    id: 'cat-6',
    slug: 'audio',
    name: 'Audio va akustika',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
    itemCount: 780,
    discountBadge: '-50%',
    subcategories: [
      { id: 'sub-15', name: 'Simsiz quloqchinlar', slug: 'wireless-headphones' },
      { id: 'sub-16', name: 'Portativ karnaylar', slug: 'portable-speakers' },
    ]
  }
];

export const PRODUCTS: Product[] = [
  // 1. Hero Spotlight mahsuloti
  {
    id: 'prod-hero-1',
    title: 'JBL T460BT Black Wireless Bluetooth Quloqchini',
    slug: 'jbl-t460bt-black-wireless-headphones',
    price: 499000,
    oldPrice: 999000,
    discountPercent: 50,
    rating: 4.8,
    reviewsCount: 1420,
    salesCount: 4500,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80'
    ],
    categorySlug: 'audio',
    categoryName: 'Audio va akustika',
    isBestseller: true,
    isNew: false,
    description: 'JBL Pure Bass ovoz sifatiga ega zamonaviy simsiz quloqchin. 11 soatgacha to\'xtovsiz musiqa tinglash, yengil va ixcham dizayn, yuqori sifatli mikrofon va tezkor ulanish imkoniyati.',
    specs: {
      'Brend': 'JBL',
      'Turi': 'Simsiz quloqchin (Over-ear)',
      'Ulanish': 'Bluetooth 5.0',
      'Ishlash vaqti': '11 soatgacha',
      'Og\'irligi': '300 g',
      'Kafolat': '12 oy'
    },
    colors: [
      { name: 'Qora', hex: '#1f1f1f', inStock: true },
      { name: 'Plum Oq', hex: '#faf5f8', inStock: true },
      { name: 'To\'q Ko\'k', hex: '#1e3a8a', inStock: true }
    ],
    stock: 45,
    deliveryDays: 1
  },

  // 2. Oxirgi ko'rilganlar (Recently Viewed)
  {
    id: 'prod-rv-1',
    title: 'Zamonaviy qishki charm botinka PLUM Winter Comfort',
    slug: 'plum-winter-comfort-leather-boots',
    price: 680000,
    oldPrice: 850000,
    discountPercent: 20,
    rating: 4.9,
    reviewsCount: 320,
    salesCount: 890,
    images: [
      'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80'
    ],
    categorySlug: 'fashion',
    categoryName: 'Kiyim va poyabzal',
    description: 'Haqiqiy charm va issiq tabiiy astarli, sirpanmaydigan qalin taglikka ega ergonimik botinka.',
    specs: { 'Material': 'Tabiiy charm', 'Taglik': 'Poliuretan', 'Fasl': 'Qish' },
    sizes: ['40', '41', '42', '43', '44'],
    stock: 22,
    deliveryDays: 1
  },
  {
    id: 'prod-rv-2',
    title: 'Nike Air Max Light Red Series Sport krossovkasi',
    slug: 'nike-air-max-light-red-series',
    price: 840000,
    oldPrice: 1100000,
    discountPercent: 24,
    rating: 4.7,
    reviewsCount: 512,
    salesCount: 1400,
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80'
    ],
    categorySlug: 'fashion',
    categoryName: 'Kiyim va poyabzal',
    description: 'Yengil yugurish va kundalik sayr uchun qulay havo yostiqchali original krossovka.',
    specs: { 'Brend': 'Nike', 'Model': 'Air Max Light', 'Fasl': 'Bahor/Yoz' },
    sizes: ['39', '40', '41', '42', '43'],
    stock: 18,
    deliveryDays: 1
  },
  {
    id: 'prod-rv-3',
    title: 'Adidas Fusion Retro Runner Retro uslubdagi krossovka',
    slug: 'adidas-fusion-retro-runner',
    price: 790000,
    oldPrice: 950000,
    discountPercent: 17,
    rating: 4.8,
    reviewsCount: 210,
    salesCount: 650,
    images: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80'
    ],
    categorySlug: 'fashion',
    categoryName: 'Kiyim va poyabzal',
    description: 'Retro va futuristik dizayn uyg\'unligi, yumshoq taglik va nafas oluvchi to\'rli mato.',
    specs: { 'Brend': 'Adidas', 'Model': 'Fusion Retro', 'Rang': 'Kulrang/Qora' },
    sizes: ['41', '42', '43', '44'],
    stock: 14,
    deliveryDays: 1
  },
  {
    id: 'prod-rv-4',
    title: 'Nike Downshifter Pure Running Shoes Sport poyabzali',
    slug: 'nike-downshifter-pure-running',
    price: 690000,
    oldPrice: 890000,
    discountPercent: 22,
    rating: 4.6,
    reviewsCount: 430,
    salesCount: 1100,
    images: [
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80'
    ],
    categorySlug: 'fashion',
    categoryName: 'Kiyim va poyabzal',
    description: 'Sport zali va ertalabki yugurish uchun maxsus ishlab chiqilgan, oyoqni mukammal ushlab turadi.',
    specs: { 'Brend': 'Nike', 'Og\'irlik': '280g', 'Fasl': 'Hamma fasl' },
    sizes: ['40', '41', '42', '43'],
    stock: 30,
    deliveryDays: 1
  },
  {
    id: 'prod-rv-5',
    title: 'Adidas Alpha Bounce Sneaker Qora model',
    slug: 'adidas-alpha-bounce-sneaker',
    price: 740000,
    oldPrice: 920000,
    discountPercent: 19,
    rating: 4.7,
    reviewsCount: 190,
    salesCount: 780,
    images: [
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80'
    ],
    categorySlug: 'fashion',
    categoryName: 'Kiyim va poyabzal',
    description: 'Bounce texnologiyasi bilan jihozlangan qadamni yengillashtiruvchi poyabzal.',
    specs: { 'Brend': 'Adidas', 'Model': 'Alpha Bounce', 'Rang': 'Total Black' },
    sizes: ['41', '42', '43'],
    stock: 16,
    deliveryDays: 1
  },

  // 3. Eng ko'p sotilganlar (Top Sellers / Bestsellers)
  {
    id: 'prod-ts-1',
    title: 'Plum Basics Lightning to USB-C Tezkor zaryadlash kabeli',
    slug: 'plum-basics-lightning-usb-c-cable',
    price: 159000,
    oldPrice: 220000,
    discountPercent: 28,
    rating: 4.9,
    reviewsCount: 2450,
    salesCount: 12000,
    images: [
      'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80'
    ],
    categorySlug: 'computers',
    categoryName: 'Kompyuter va aksessuarlar',
    isBestseller: true,
    description: 'Mustahkam neylon o\'ramli, chidamliligi yuqori bo\'lgan MFi sertifikatli zaryadlash kabeli.',
    specs: { 'Uzunlik': '1.8 metr', 'Quvvat': '60W gacha', 'Kafolat': '6 oy' },
    stock: 120,
    deliveryDays: 1
  },
  {
    id: 'prod-ts-2',
    title: 'Smart TV Plum Crystal 43 dyuymli 4K UHD Smart Televizor',
    slug: 'smart-tv-plum-crystal-43-inch-4k',
    price: 2890000,
    oldPrice: 3500000,
    discountPercent: 17,
    rating: 4.8,
    reviewsCount: 890,
    salesCount: 1300,
    images: [
      'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80'
    ],
    categorySlug: 'electronics',
    categoryName: 'Elektronika',
    isBestseller: true,
    description: 'Yorqin ranglar, HDR10+ texnologiyasi va ovozli boshqaruvli aqlli televizor.',
    specs: { 'Diagonal': '43 dyuym', 'Rezolyutsiya': '3840x2160 (4K)', 'Operatsion tizim': 'Android TV 12' },
    stock: 25,
    deliveryDays: 1
  },
  {
    id: 'prod-ts-3',
    title: 'Instant Pot Duo 7-in-1 Ko\'p funksiyali elektron multivarka',
    slug: 'instant-pot-duo-7-in-1-electric-cooker',
    price: 790000,
    oldPrice: 1100000,
    discountPercent: 28,
    rating: 4.9,
    reviewsCount: 1650,
    salesCount: 3400,
    images: [
      'https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?auto=format&fit=crop&w=800&q=80'
    ],
    categorySlug: 'home-appliances',
    categoryName: 'Maishiy texnika va uy',
    isBestseller: true,
    description: 'Qisqa vaqtda sog\'lom va mazali taomlar tayyorlovchi 7 ta dasturli multivarka va bosimli pishirgich.',
    specs: { 'Hajmi': '5.7 litr', 'Quvvati': '1000W', 'Dasturlar': 'Sho\'rva, Bo\'tqa, Bug\'da pishirish va b.' },
    stock: 35,
    deliveryDays: 1
  },
  {
    id: 'prod-ts-4',
    title: 'Philips Pro Ionic Professional Soch quritgich feni',
    slug: 'philips-pro-ionic-hair-dryer',
    price: 349000,
    oldPrice: 480000,
    discountPercent: 27,
    rating: 4.7,
    reviewsCount: 1200,
    salesCount: 2900,
    images: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80'
    ],
    categorySlug: 'beauty',
    categoryName: "Go'zallik va parvarish",
    isBestseller: true,
    description: 'Ionlash funksiyasi sochlar jilosini saqlaydi va zararlanishdan himoyalaydi.',
    specs: { 'Quvvat': '2200W', 'Tezlik': '3 xil', 'Harorat rejimlari': '3 xil' },
    stock: 60,
    deliveryDays: 1
  },
  {
    id: 'prod-ts-5',
    title: 'Granit qoplamali qalin yopishmaydigan tova 28 sm',
    slug: 'granite-non-stick-frying-pan-28cm',
    price: 199000,
    oldPrice: 280000,
    discountPercent: 29,
    rating: 4.8,
    reviewsCount: 940,
    salesCount: 4100,
    images: [
      'https://images.unsplash.com/photo-1584990347449-3a131b26938a?auto=format&fit=crop&w=800&q=80'
    ],
    categorySlug: 'home-appliances',
    categoryName: 'Maishiy texnika va uy',
    isBestseller: true,
    description: 'Induksion plitalarga ham mos keluvchi mustahkam granit qoplamali tova.',
    specs: { 'Diametri': '28 sm', 'Qoplama': 'Ko\'p qatlamli granit', 'Tutqich': 'Qizimaydigan soft-touch' },
    stock: 80,
    deliveryDays: 1
  },

  // 4. Tomas uchun maxsus tavsiyalar (Tomas, must-have for you)
  {
    id: 'prod-rec-1',
    title: 'Xiaomi Mi Bluetooth Simsiz ergonomik sichqoncha',
    slug: 'xiaomi-mi-bluetooth-mouse-silver',
    price: 189000,
    oldPrice: 249000,
    discountPercent: 24,
    rating: 4.8,
    reviewsCount: 780,
    salesCount: 2300,
    images: [
      'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80'
    ],
    categorySlug: 'computers',
    categoryName: 'Kompyuter va aksessuarlar',
    description: 'Jimjit tugmali, nafis alyuminiy korpusli qulay kompyuter sichqonchasi.',
    specs: { 'Ulanish': 'Bluetooth & 2.4GHz USB', 'Batareya': '1x AA', 'DPI': '1200' },
    stock: 50,
    deliveryDays: 1
  },
  {
    id: 'prod-rec-2',
    title: 'Apple Watch Series 9 GPS 45mm Aqlli soat',
    slug: 'apple-watch-series-9-gps-45mm',
    price: 4990000,
    oldPrice: 5800000,
    discountPercent: 14,
    rating: 4.9,
    reviewsCount: 650,
    salesCount: 1100,
    images: [
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80'
    ],
    categorySlug: 'electronics',
    categoryName: 'Elektronika',
    description: 'Yurak urishi, qon kislorodi va mashg\'ulotlarni aniq o\'lchovchi eng ilg\'or aqlli soat.',
    specs: { 'Displey': 'Always-On Retina OLED', 'Hajmi': '45 mm', 'Suv o\'tkazmaslik': '50 m gacha' },
    stock: 12,
    deliveryDays: 1
  },
  {
    id: 'prod-rec-3',
    title: 'Sony WH-1000XM5 Shovqinni to\'liq yutuvchi flagman quloqchin',
    slug: 'sony-wh-1000xm5-noise-cancelling',
    price: 3890000,
    oldPrice: 4500000,
    discountPercent: 13,
    rating: 4.9,
    reviewsCount: 1400,
    salesCount: 2200,
    images: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80'
    ],
    categorySlug: 'audio',
    categoryName: 'Audio va akustika',
    description: 'Sanoatdagi eng yaxshi faol shovqin to\'xtatish (ANC) tizimi va 30 soatlik batareya muddati.',
    specs: { 'Brend': 'Sony', 'Shovqin to\'xtatish': 'Sanoat etaloni ANC', 'Batareya': '30 soat' },
    stock: 15,
    deliveryDays: 1
  },
  {
    id: 'prod-rec-4',
    title: 'Bluetooth Sport Bo\'yinbog\'li simsiz quloqchin CA-1087',
    slug: 'bluetooth-sport-neckband-earphones-ca1087',
    price: 215000,
    oldPrice: 290000,
    discountPercent: 26,
    rating: 4.6,
    reviewsCount: 310,
    salesCount: 890,
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80'
    ],
    categorySlug: 'audio',
    categoryName: 'Audio va akustika',
    description: 'Magnitli qisqich, yugurish va fitnes uchun mustahkam o\'tiruvchi quloqchin.',
    specs: { 'Ulanish': 'Bluetooth 5.2', 'Ishlash vaqti': '18 soat', 'Himoya': 'IPX5 suvga chidamli' },
    stock: 40,
    deliveryDays: 1
  },
  {
    id: 'prod-rec-5',
    title: 'TWS Air Sound True Wireless Shovqinsiz mikrofonli quloqchin',
    slug: 'tws-air-sound-wireless-earbuds',
    price: 490000,
    oldPrice: 650000,
    discountPercent: 25,
    rating: 4.7,
    reviewsCount: 520,
    salesCount: 1600,
    images: [
      'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=800&q=80'
    ],
    categorySlug: 'audio',
    categoryName: 'Audio va akustika',
    description: 'Har kuni qo\'ng\'iroqlar va tiniq audio uchun ixcham korpusli simsiz garnitura.',
    specs: { 'Batareya': 'Keys bilan 24 soat', 'Boshqaruv': 'Sensorli', 'Zaryadlash': 'Type-C' },
    stock: 55,
    deliveryDays: 1
  },

  // 5. Pastki zanjir mahsulotlari (Changyutgichlar, Konsollar, Karnaylar, Proyektorlar)
  {
    id: 'prod-chain-1',
    title: 'Dreame D9 Max Robot changyutgich aqlli xarita bilan',
    slug: 'dreame-d9-max-robot-vacuum',
    price: 2990000,
    oldPrice: 3800000,
    discountPercent: 21,
    rating: 4.9,
    reviewsCount: 450,
    salesCount: 1200,
    images: ['https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=800&q=80'],
    categorySlug: 'home-appliances',
    categoryName: 'Maishiy texnika va uy',
    description: '4000 Pa tortish kuchi, namlab tozalash va ko\'p qavatli xaritalash.',
    specs: { 'Tortish kuchi': '4000 Pa', 'Boshqaruv': 'Mobil ilova & Ovoz' },
    stock: 20,
    deliveryDays: 1
  },
  {
    id: 'prod-chain-2',
    title: 'PlayStation 5 Slim O\'yin konsoli 1TB SSD',
    slug: 'playstation-5-slim-1tb',
    price: 6490000,
    oldPrice: 7200000,
    discountPercent: 10,
    rating: 5.0,
    reviewsCount: 890,
    salesCount: 950,
    images: ['https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80'],
    categorySlug: 'gaming',
    categoryName: "Video o'yinlar va VR",
    isBestseller: true,
    description: 'Keyingi avlod grafikasi, 4K 120fps va DualSense haptik boshqaruvchi.',
    specs: { 'Xotira': '1TB SSD', 'Komplekt': '1x DualSense geympad' },
    stock: 14,
    deliveryDays: 1
  },
  {
    id: 'prod-chain-3',
    title: 'JBL Charge 5 Portativ suvga chidamli akustik karnay',
    slug: 'jbl-charge-5-portable-speaker',
    price: 1890000,
    oldPrice: 2300000,
    discountPercent: 18,
    rating: 4.9,
    reviewsCount: 710,
    salesCount: 1800,
    images: ['https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80'],
    categorySlug: 'audio',
    categoryName: 'Audio va akustika',
    description: '20 soat batareya, Powerbank funksiyasi va chuqur bas ovozi.',
    specs: { 'Quvvat': '40W RMS', 'Himoya': 'IP67 chang va suvga chidamli' },
    stock: 30,
    deliveryDays: 1
  },
  {
    id: 'prod-chain-4',
    title: 'Wanbo T2 Max Full HD Aqlli Uy Kinoteatri Proyektori',
    slug: 'wanbo-t2-max-full-hd-smart-projector',
    price: 2190000,
    oldPrice: 2800000,
    discountPercent: 22,
    rating: 4.7,
    reviewsCount: 390,
    salesCount: 650,
    images: ['https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80'],
    categorySlug: 'electronics',
    categoryName: 'Elektronika',
    description: '1080P ravshan tasvir, avtomatik fokus va o\'rnatilgan Android tizimi.',
    specs: { 'Yorug\'lik': '450 ANSI Lumen', 'Rezolyutsiya': '1920x1080' },
    stock: 19,
    deliveryDays: 1
  }
];

export const MOCK_USER = {
  id: 'usr-101',
  name: 'Tomas',
  phone: '+998 (90) 123-45-67',
  email: 'tomas@plum.uz',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  addresses: [
    {
      id: 'addr-1',
      title: 'Uy',
      city: 'Toshkent',
      street: 'Amir Temur ko\'chasi, 14-uy',
      apartment: '42-xonadon',
      isDefault: true
    },
    {
      id: 'addr-2',
      title: 'Ishxona',
      city: 'Toshkent',
      street: 'Navoiy shoh ko\'chasi, 8-bino',
      apartment: '304-xona',
      isDefault: false
    }
  ]
};
