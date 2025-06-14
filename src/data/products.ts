import { Product } from '../types/Product';

// استيراد الصور
import bImage from '../img/b.jpg';
import jImage from '../img/j.jpg';
import pImage from '../img/p.jpg';
import rImage from '../img/r.jpg';
import rrImage from '../img/rr.jpg';
import sImage from '../img/s.jpg';
import wImage from '../img/w.jpg';
import yImage from '../img/y.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'K. LAMAR "NOT LIKE US"',
    price: 45,
    sizes: [
      { size: '30ml', price: 45, inStock: true },
      { size: '50ml', price: 75, inStock: true },
      { size: '100ml', price: 120, inStock: true },
    ],
    description: 'A unisex fragrance with neroli, orange blossom, and marshmallow notes.',
    scent: 'Floral, Sweet, Unisex',
    category: ['Unisex', 'Men', 'Floral', 'Sweet', 'Gourmand'],
    images: [
      pImage
    ],
    rating: 4.6,
    reviews: 78,
    bestseller: true,
    selectedSize: null,
    reviewsList: [
      {
        id: '1',
        userName: 'Sarah M.',
        rating: 5,
        date: '2024-01-15',
        title: 'Absolutely Amazing!',
        comment: 'This fragrance is incredible! The perfect balance of floral and sweet notes. I get compliments every time I wear it.',
        verified: true
      },
      {
        id: '2',
        userName: 'Ahmed K.',
        rating: 4,
        date: '2024-01-10',
        title: 'Great Unisex Scent',
        comment: 'Very versatile fragrance. The marshmallow note adds a unique touch. Good longevity too.',
        verified: true
      }
    ]
  },
  {
    id: '2',
    name: 'GloRilla',
    price: 85,
    sizes: [
      { size: '30ml', price: 85, inStock: true },
      { size: '50ml', price: 125, inStock: true },
      { size: '100ml', price: 180, inStock: true },
    ],
    description: 'A feminine fragrance with fruity notes of pineapple, strawberry, passionfruit, and tangerine.',
    scent: 'Fruity, Sweet, Feminine',
    category: ['Women', 'Sweet', 'Fruity', 'Aquatic'],
    images: [
      rImage
    ],
    rating: 4.9,
    reviews: 156,
    featured: true,
    bestseller: true,
    selectedSize: null,
    reviewsList: [
      {
        id: '1',
        userName: 'Layla H.',
        rating: 5,
        date: '2024-01-20',
        title: 'My New Favorite!',
        comment: 'The fruity notes are so fresh and vibrant. Perfect for summer days. The scent lasts all day!',
        verified: true
      },
      {
        id: '2',
        userName: 'Noor A.',
        rating: 5,
        date: '2024-01-18',
        title: 'Worth Every Penny',
        comment: 'This perfume is absolutely divine! The combination of fruits creates such a unique and beautiful scent.',
        verified: true
      }
    ]
  },
  {
    id: '3',
    name: 'GloRilla (Alternative)',
    price: 85,
    sizes: [
      { size: '30ml', price: 85, inStock: true },
      { size: '50ml', price: 125, inStock: true },
      { size: '100ml', price: 180, inStock: true },
    ],
     description: 'An alternative version of the GloRilla feminine fragrance with fruity notes.',
     scent: 'Fruity, Sweet, Feminine',
    category: ['Women', 'Fruity', 'Sweet'],
    images: [
      rrImage
    ],
    rating: 4.8,
    reviews: 120,
    bestseller: true,
    selectedSize: null,
    reviewsList: [
      {
        id: '1',
        userName: 'Fatima R.',
        rating: 5,
        date: '2024-01-12',
        title: 'Elegant and Long-lasting',
        comment: 'This alternative version is just as amazing as the original. The fruity notes are perfectly balanced.',
        verified: true
      },
      {
        id: '2',
        userName: 'Maha S.',
        rating: 4,
        date: '2024-01-08',
        title: 'Beautiful Scent',
        comment: 'Love how this perfume evolves throughout the day. Very elegant and feminine.',
        verified: true
      }
    ]
  },
  {
    id: '4',
    name: 'K. LAMAR "NOT LIKE US" (Alternative Version)',
    price: 55,
    sizes: [
      { size: '30ml', price: 55, inStock: true },
      { size: '50ml', price: 85, inStock: true },
      { size: '100ml', price: 130, inStock: true },
    ],
    description: 'A premium unisex fragrance with Nora Nord, Graugt Himm, and Marina den notes.',
    scent: 'Premium, Exclusive, Unisex',
    category: ['Unisex', 'Men', 'Premium', 'Exclusive', 'Aromatic Fougère'],
    images: [
      sImage
    ],
    rating: 4.5,
    reviews: 64,
    new: true,
    selectedSize: null,
    reviewsList: [
      {
        id: '1',
        userName: 'Omar K.',
        rating: 5,
        date: '2024-01-16',
        title: 'Premium Quality',
        comment: 'This alternative version has an amazing premium feel. The scent is unique and long-lasting.',
        verified: true
      },
      {
        id: '2',
        userName: 'Zain M.',
        rating: 4,
        date: '2024-01-14',
        title: 'Sophisticated Fragrance',
        comment: 'A very sophisticated and exclusive scent. Perfect for special occasions.',
        verified: true
      }
    ]
  },
  {
    id: '5',
    name: 'BATON ROUGE',
    price: 60,
    sizes: [
      { size: '30ml', price: 60, inStock: true },
      { size: '50ml', price: 90, inStock: true },
      { size: '100ml', price: 135, inStock: true },
    ],
    description: 'A feminine fragrance with saffron, orange blossom, jasmine, and lavender notes.',
    scent: 'Floral, Feminine, Elegant',
    category: ['Women', 'Floral', 'Elegant'],
    images: [
      wImage
    ],
    rating: 4.7,
    reviews: 89,
    bestseller: true,
    selectedSize: null
  },
  {
    id: '6',
    name: 'LIBERTE (INSPIRED BY YSL)',
    price: 70,
    sizes: [
      { size: '30ml', price: 70, inStock: true },
      { size: '50ml', price: 105, inStock: true },
      { size: '100ml', price: 155, inStock: true },
    ],
    description: 'A feminine fragrance inspired by YSL Libre.',
    scent: 'Floral, Oriental, Feminine',
    category: ['Women', 'Floral', 'Oriental'],
    images: [
      yImage
    ],
    rating: 4.8,
    reviews: 102,
    featured: true,
    selectedSize: null
  },
  {
    id: '7',
    name: 'WHISPERED',
    price: 65,
    sizes: [
      { size: '30ml', price: 65, inStock: true },
      { size: '50ml', price: 95, inStock: true },
      { size: '100ml', price: 140, inStock: true },
    ],
 description: 'A luxurious unisex fragrance with turmeric, bergamot, and jasmine notes.',
  scent: 'Spicy, Floral, Woody',
    category: ['Unisex', 'Men', 'Spicy', 'Floral', 'Woody', 'Mossy Woods'],
    images: [
      bImage
    ],
    rating: 4.8,
    reviews: 92,
    featured: true,
    selectedSize: null
  },
  {
    id: '8',
    name: 'WHISPERED (Jasmine Edition)',
    price: 65,
    sizes: [
      { size: '30ml', price: 65, inStock: true },
      { size: '50ml', price: 95, inStock: true },
      { size: '100ml', price: 140, inStock: true },
    ],
    description: 'A jasmine-focused edition of the WHISPERED unisex fragrance.',
    scent: 'Spicy, Floral, Woody',
    category: ['Unisex', 'Men', 'Spicy', 'Floral', 'Woody', 'Aromatic Fougère'],
    images: [
      jImage
    ],
    rating: 4.7,
    reviews: 85,
    new: true,
    selectedSize: null
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getBestsellerProducts = (): Product[] => {
  return products.filter(product => product.bestseller);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.new);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category.includes(category));
};