export interface Product {
  id: string;
  title: string;
  slug: string;
  price: number;
  oldPrice?: number;
  discountPercent?: number;
  rating: number;
  reviewsCount: number;
  salesCount?: number;
  images: string[];
  categorySlug: string;
  categoryName: string;
  isBestseller?: boolean;
  isNew?: boolean;
  description: string;
  specs: Record<string, string>;
  colors?: { name: string; hex: string; inStock?: boolean }[];
  sizes?: string[];
  stock: number;
  badge?: string;
  deliveryDays?: number;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  image: string;
  itemCount: number;
  discountBadge?: string;
  subcategories?: { id: string; name: string; slug: string }[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

export interface User {
  id: string;
  name: string;
  phone: string;
  email: string;
  avatar?: string;
  addresses?: Address[];
}

export interface Address {
  id: string;
  title: string;
  city: string;
  street: string;
  apartment?: string;
  isDefault?: boolean;
}

export interface Order {
  id: string;
  date: string;
  status: 'pending' | 'shipping' | 'delivered' | 'cancelled';
  items: CartItem[];
  totalAmount: number;
  deliveryAddress: Address;
  paymentMethod: 'payme' | 'click' | 'uzumpay' | 'cash';
}
