import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById, products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Star, ChevronRight, Check, Info, Minus, Plus } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : null;
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const { addToCart } = useCart();
  
  // Related products (simple implementation)
  const relatedProducts = product 
    ? products
        .filter(p => p.id !== product.id && p.category.some(cat => product.category.includes(cat)))
        .slice(0, 4) 
    : [];
  
  useEffect(() => {
    if (product) {
      document.title = `${product.name} | judi`;
      // Select first available size by default
      const firstInStockSize = product.sizes.find(size => size.inStock);
      if (firstInStockSize) {
        setSelectedSize(firstInStockSize.size);
      }
    } else {
      document.title = 'Product Not Found | judi';
    }
  }, [product]);
  
  const handleAddToCart = () => {
    if (!product || !selectedSize) return;
    
    const sizeInfo = product.sizes.find(s => s.size === selectedSize);
    if (!sizeInfo) return;
    
    const productWithSize = {
      ...product,
      price: sizeInfo.price,
      selectedSize
    };
    
    addToCart(productWithSize, quantity);
  };
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 pt-32 pb-20 text-center">
        <h1 className="text-2xl font-medium mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/products" className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
          Continue Shopping
        </Link>
      </div>
    );
  }
  
  return (
    <div className="pt-20">
      {/* Breadcrumbs */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex text-sm">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <ChevronRight size={16} className="mx-2 text-gray-400" />
            <Link to="/products" className="text-gray-600 hover:text-gray-900">Products</Link>
            <ChevronRight size={16} className="mx-2 text-gray-400" />
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>
      
      {/* Product Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                className="rounded-lg overflow-hidden"
              >
                {product.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="aspect-square">
                      <img 
                        src={image} 
                        alt={`${product.name} - Image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            
            {/* Product Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h1 className="text-3xl font-serif text-gray-900 mb-2">{product.name}</h1>
                
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={i < Math.floor(product.rating) 
                        ? "fill-gold-500 text-gold-500" 
                        : "text-gray-300"}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                
                <p className="text-xl font-medium text-gray-900 mb-6">
                  ${selectedSize 
                    ? product.sizes.find(s => s.size === selectedSize)?.price.toFixed(2) 
                    : product.price.toFixed(2)}
                </p>
                
                <p className="text-gray-700 mb-6">
                  {product.description}
                </p>
                
                {/* Size Selection */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Size</h3>
                  <div className="flex space-x-3">
                    {product.sizes.map((size) => (
                      <button
                        key={size.size}
                        onClick={() => setSelectedSize(size.size)}
                        disabled={!size.inStock}
                        className={`
                          w-16 h-10 flex items-center justify-center rounded-md font-medium
                          ${!size.inStock ? 'opacity-50 cursor-not-allowed bg-gray-100 text-gray-500' : 
                            selectedSize === size.size ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}
                        `}
                      >
                        {size.size}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Quantity */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Quantity</h3>
                  <div className="flex items-center w-32">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 flex items-center justify-center rounded-l-md bg-gray-100 text-gray-600 hover:bg-gray-200"
                    >
                      <Minus size={16} />
                    </button>
                    <div className="w-12 h-10 flex items-center justify-center border-y border-gray-200 bg-white text-gray-900">
                      {quantity}
                    </div>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 flex items-center justify-center rounded-r-md bg-gray-100 text-gray-600 hover:bg-gray-200"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
                
                {/* Add to Cart */}
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mb-8">
                  <button 
                    onClick={handleAddToCart}
                    disabled={!selectedSize}
                    className="flex-1 bg-gray-900 text-white py-3 px-6 rounded-md font-medium hover:bg-gray-800 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    Add to Cart
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-900 py-3 px-6 rounded-md font-medium hover:bg-gray-50 transition-colors">
                    Add to Wishlist
                  </button>
                </div>
                
                {/* Details */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <Check size={16} className="text-green-500 mr-2" />
                    <span>In stock and ready to ship</span>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Info size={16} className="mr-2" />
                  <span>Free shipping on orders over $100</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Tabs */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`py-4 text-sm font-medium border-b-2 ${
                    activeTab === 'description' 
                      ? 'border-gold-600 text-gold-600' 
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab('ingredients')}
                  className={`py-4 text-sm font-medium border-b-2 ${
                    activeTab === 'ingredients' 
                      ? 'border-gold-600 text-gold-600' 
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Ingredients
                </button>
                <button
                  onClick={() => setActiveTab('notes')}
                  className={`py-4 text-sm font-medium border-b-2 ${
                    activeTab === 'notes' 
                      ? 'border-gold-600 text-gold-600' 
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Scent Notes
                </button>
              </nav>
            </div>
            
            <div className="py-6">
              {activeTab === 'description' && (
                <div className="prose prose-sm max-w-none text-gray-700">
                  <p>{product.longDescription || product.description}</p>
                </div>
              )}
              
              {activeTab === 'ingredients' && (
                <div className="prose prose-sm max-w-none text-gray-700">
                  <p>{product.ingredients || 'Ingredients information not available for this product.'}</p>
                </div>
              )}
              
              {activeTab === 'notes' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-2">Top Notes</h3>
                    <p className="text-gray-700">{product.scent.topNotes.join(', ')}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-2">Middle Notes</h3>
                    <p className="text-gray-700">{product.scent.middleNotes.join(', ')}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-2">Base Notes</h3>
                    <p className="text-gray-700">{product.scent.baseNotes.join(', ')}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-serif text-gray-900 mb-8">You May Also Like</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((product) => (
                <div key={product.id}>
                  <Link to={`/products/${product.id}`} className="block">
                    <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                      <img 
                        src={product.images[0]} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-medium text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">${product.price.toFixed(2)}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetailPage;