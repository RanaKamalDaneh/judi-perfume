import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types/Product';
import { Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group w-full">
      <Link to={`/products/${product.id}`} className="block relative overflow-hidden rounded-lg">
        <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        {product.new && (
          <span className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            New
          </span>
        )}
        
        {product.bestseller && (
          <span className="absolute top-4 right-4 bg-gold-600 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            Bestseller
          </span>
        )}
      </Link>
      
      <div className="mt-4 space-y-2">
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={i < Math.floor(product.rating) 
                ? "fill-gold-500 text-gold-500" 
                : "text-gray-300"}
            />
          ))}
          <span className="text-sm text-gray-600 ml-1">
            ({product.reviews})
          </span>
        </div>
        
        <h3 className="font-medium text-gray-900">
          <Link to={`/products/${product.id}`} className="hover:text-gold-600 transition-colors">
            {product.name}
          </Link>
        </h3>
        
        <p className="text-sm text-gray-600">
          {product.description}
        </p>
        
        <p className="font-medium text-gray-900">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;