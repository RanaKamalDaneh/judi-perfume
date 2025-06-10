export interface Product {
  selectedSize: any;
  id: string;
  name: string;
  price: number;
  sizes: ProductSize[];
  description: string;
  longDescription?: string;
  ingredients?: string;
  scent: {
    topNotes: string[];
    middleNotes: string[];
    baseNotes: string[];
  };
  category: string[];
  images: string[];
  rating: number;
  reviews: number;
  featured?: boolean;
  new?: boolean;
  bestseller?: boolean;
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