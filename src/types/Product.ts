export interface Product {
  selectedSize: any;
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  sizes: ProductSize[];
  description: string;
  scent: string;
  category: string[];
  images: string[];
  rating: number;
  reviews: number;
  reviewsList?: Review[];
  new?: boolean;
  bestseller?: boolean;
  featured?: boolean;
  isLimited?: boolean;
  editorsChoice?: boolean;
  awardWinner?: boolean;
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified?: boolean;
}

export interface ProductSize {
  size: string;
  price: number;
  inStock: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
}