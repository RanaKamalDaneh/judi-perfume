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
    longDescription: 'K. LAMAR "NOT LIKE US" is a distinctive unisex fragrance from judi PERFUMERIE that combines the freshness of neroli and orange blossom with the sweet comfort of marshmallow. This unique scent creates a memorable impression that stands out from the crowd.',
    ingredients: 'Alcohol Denat., Parfum (Fragrance), Aqua (Water), Benzyl Salicylate, Linalool, Limonene, Citronellol, Geraniol, Benzyl Alcohol, Citral, Farnesol.',
    scent: {
      topNotes: ['Neroli'],
      middleNotes: ['Orange Blossom'],
      baseNotes: ['Marshmallow']
    },
    category: ['Unisex', 'Floral', 'Sweet'],
    images: [
      pImage
    ],
    rating: 4.6,
    reviews: 78,
    bestseller: true,
    selectedSize: undefined
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
    longDescription: 'GloRilla is a vibrant feminine fragrance from judi that celebrates the juicy sweetness of tropical fruits. This energetic scent combines pineapple, big strawberry, passionfruit, and tangerine, creating a playful and refreshing fragrance experience that brightens your day.',
    ingredients: 'Alcohol Denat., Parfum (Fragrance), Aqua (Water), Benzyl Salicylate, Linalool, Limonene, Citronellol, Geraniol, Benzyl Alcohol, Citral, Farnesol, Benzyl Benzoate.',
    scent: {
      topNotes: ['Pineapple', 'Tangerine'],
      middleNotes: ['Big Strawberry', 'Passionfruit'],
      baseNotes: ['Sweet Musk', 'Vanilla']
    },
    category: ['Fruity', 'Sweet', 'Feminine'],
    images: [
      rImage
    ],
    rating: 4.9,
    reviews: 156,
    featured: true,
    bestseller: true,
    selectedSize: undefined
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
    longDescription: 'This alternative version of GloRilla maintains the same vibrant fruity profile but with a slightly different presentation. The fragrance still features the signature blend of pineapple, big strawberry, passionfruit, and tangerine that made the original so popular.',
    ingredients: 'Alcohol Denat., Parfum (Fragrance), Aqua (Water), Benzyl Salicylate, Linalool, Limonene, Citronellol, Geraniol, Benzyl Alcohol, Citral, Farnesol, Benzyl Benzoate.',
    scent: {
      topNotes: ['Pineapple', 'Tangerine'],
      middleNotes: ['Big Strawberry', 'Passionfruit'],
      baseNotes: ['Sweet Musk', 'Vanilla']
    },
    category: ['Fruity', 'Sweet', 'Feminine'],
    images: [
      rrImage
    ],
    rating: 4.8,
    reviews: 120,
    bestseller: true,
    selectedSize: undefined
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
    longDescription: 'K. LAMAR "NOT LIKE US" (Alternative Version) is a premium unisex fragrance from judi PREMIUME that offers a sophisticated alternative to the original scent. This exclusive version features the unique combination of Nora Nord, Graugt Himm, and Marina den, creating a distinctive and refined fragrance experience.',
    ingredients: 'Alcohol Denat., Parfum (Fragrance), Aqua (Water), Benzyl Salicylate, Linalool, Limonene, Citronellol, Geraniol, Benzyl Alcohol, Citral.',
    scent: {
      topNotes: ['Nora Nord'],
      middleNotes: ['Graugt Himm'],
      baseNotes: ['Marina den']
    },
    category: ['Unisex', 'Premium', 'Exclusive'],
    images: [
      sImage
    ],
    rating: 4.5,
    reviews: 64,
    new: true,
    selectedSize: undefined
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
    longDescription: 'BATON ROUGE is an elegant feminine fragrance from judi PERFUMERIE that captures the essence of sophistication. This luxurious scent combines the warmth of saffron with the delicate beauty of orange blossom, jasmine, and lavender, creating a truly captivating fragrance experience.',
    ingredients: 'Alcohol Denat., Parfum (Fragrance), Aqua (Water), Benzyl Salicylate, Linalool, Limonene, Citronellol, Geraniol, Benzyl Alcohol, Citral, Farnesol.',
    scent: {
      topNotes: ['Saffron', 'Orange Blossom'],
      middleNotes: ['Jasmine', 'Lavender', 'Orange Blossom'],
      baseNotes: ['Ohmone1', 'Pin Raison', 'Amber']
    },
    category: ['Floral', 'Feminine', 'Elegant'],
    images: [
      wImage
    ],
    rating: 4.7,
    reviews: 89,
    bestseller: true,
    selectedSize: undefined
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
    longDescription: 'LIBERTE is a captivating feminine fragrance from judi PREPUMERIE inspired by the iconic YSL Libre. This elegant scent embodies the spirit of freedom and femininity, creating a bold and sophisticated fragrance experience that makes a statement.',
    ingredients: 'Alcohol Denat., Parfum (Fragrance), Aqua (Water), Benzyl Salicylate, Linalool, Limonene, Citronellol, Geraniol, Benzyl Alcohol, Citral, Farnesol, Eugenol.',
    scent: {
      topNotes: ['Lavender', 'Mandarin Orange', 'Petitgrain'],
      middleNotes: ['Orange Blossom', 'Jasmine', 'Blackcurrant'],
      baseNotes: ['Vanilla', 'Musk', 'Amber']
    },
    category: ['Floral', 'Oriental', 'Feminine'],
    images: [
      yImage
    ],
    rating: 4.8,
    reviews: 102,
    featured: true,
    selectedSize: undefined
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
    longDescription: 'WHISPERED is a sophisticated unisex fragrance from judi CERPUMERIE/PERTUMERIE that combines spicy top notes with floral middle notes and a warm, woody base. This elegant scent creates an aura of mystery and sophistication that lingers throughout the day.',
    ingredients: 'Alcohol Denat., Parfum (Fragrance), Aqua (Water), Benzyl Salicylate, Linalool, Limonene, Coumarin, Citronellol, Geraniol, Eugenol, Cinnamal.',
    scent: {
      topNotes: ['Turmeric', 'Bergamot', 'Pink Pepper', 'Ginger'],
      middleNotes: ['Jasmine', 'Taborose', 'Osmanthus'],
      baseNotes: ['Sandalwood', 'Musk', 'Incense']
    },
    category: ['Unisex', 'Spicy', 'Floral', 'Woody'],
    images: [
      bImage
    ],
    rating: 4.8,
    reviews: 92,
    featured: true,
    selectedSize: undefined
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
    longDescription: 'WHISPERED (Jasmine Edition) emphasizes the jasmine notes of the original WHISPERED fragrance. This special edition maintains the same sophisticated profile but with a stronger emphasis on the floral middle notes, creating a slightly different but equally elegant fragrance experience.',
    ingredients: 'Alcohol Denat., Parfum (Fragrance), Aqua (Water), Benzyl Salicylate, Linalool, Limonene, Coumarin, Citronellol, Geraniol, Eugenol, Cinnamal.',
    scent: {
      topNotes: ['Turmeric', 'Bergamot', 'Pink Pepper', 'Ginger'],
      middleNotes: ['Jasmine', 'Taborose', 'Osmanthus'],
      baseNotes: ['Sandalwood', 'Musk', 'Incense']
    },
    category: ['Unisex', 'Spicy', 'Floral', 'Woody'],
    images: [
      jImage
    ],
    rating: 4.7,
    reviews: 85,
    new: true,
    selectedSize: undefined
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