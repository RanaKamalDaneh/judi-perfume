import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { products, getProductsByCategory } from '../data/products';
import ProductCard from '../components/products/ProductCard';
import { motion } from 'framer-motion';
import { Filter, X } from 'lucide-react';

const ProductsPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');
  
  const [activeFilters, setActiveFilters] = useState<string[]>(categoryParam ? [categoryParam] : []);
  const [filteredProducts, setFilteredProducts] = useState(categoryParam ? getProductsByCategory(categoryParam) : products);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  
  // الفئات الرئيسية
  const mainCategories = ['Unisex', 'Women', 'Men'];
  
  // الفئات الفرعية
  const subCategories = ['Floral', 'Oriental', 'Woody', 'Fresh', 'Citrus'];
  
  useEffect(() => {
    document.title = 'Shop All Perfumes | judi';
  }, []);
  
  useEffect(() => {
    if (activeFilters.length === 0) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter(product => 
          activeFilters.some(filter => product.category.includes(filter))
        )
      );
    }
  }, [activeFilters]);
  
  const toggleFilter = (category: string) => {
    if (activeFilters.includes(category)) {
      setActiveFilters(activeFilters.filter(filter => filter !== category));
    } else {
      setActiveFilters([...activeFilters, category]);
    }
  };
  
  const clearFilters = () => {
    setActiveFilters([]);
  };
  
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <div className="bg-gray-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">Our Collection</h1>
          <p className="max-w-2xl mx-auto text-gray-300">
            Discover our handcrafted perfumes, each created with the finest ingredients to evoke memories and emotions.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex justify-between items-center mb-6">
            <h2 className="text-xl font-medium">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'}
            </h2>
            <button
              onClick={() => setShowMobileFilters(true)}
              className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-md"
            >
              <Filter size={18} />
              <span>Filters</span>
            </button>
          </div>
          
          {/* Sidebar Filters (Desktop) */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-xl font-medium mb-6">Filters</h2>
              
              {activeFilters.length > 0 && (
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm font-medium text-gray-700">Active Filters</h3>
                    <button 
                      onClick={clearFilters}
                      className="text-sm text-gray-500 hover:text-gray-700"
                    >
                      Clear all
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeFilters.map(filter => (
                      <span 
                        key={filter}
                        className="inline-flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm"
                      >
                        {filter}
                        <button 
                          onClick={() => toggleFilter(filter)}
                          className="ml-1 text-gray-500 hover:text-gray-700"
                        >
                          <X size={14} />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* الفئات الرئيسية */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm font-medium text-gray-700 mb-4">Gender</h3>
                <div className="space-y-2">
                  {mainCategories.map(category => (
                    <div key={category} className="flex items-center">
                      <input
                        id={`category-${category}`}
                        name={`category-${category}`}
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-gold-600 focus:ring-gold-500"
                        checked={activeFilters.includes(category)}
                        onChange={() => toggleFilter(category)}
                      />
                      <label
                        htmlFor={`category-${category}`}
                        className="ml-3 text-sm text-gray-700"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* الفئات الفرعية */}
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-sm font-medium text-gray-700 mb-4">Scent Type</h3>
                <div className="space-y-2">
                  {subCategories.map(category => (
                    <div key={category} className="flex items-center">
                      <input
                        id={`category-${category}`}
                        name={`category-${category}`}
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-gold-600 focus:ring-gold-500"
                        checked={activeFilters.includes(category)}
                        onChange={() => toggleFilter(category)}
                      />
                      <label
                        htmlFor={`category-${category}`}
                        className="ml-3 text-sm text-gray-700"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Filters */}
          {showMobileFilters && (
            <div className="fixed inset-0 z-50 bg-white p-4 lg:hidden overflow-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-medium">Filters</h2>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="text-gray-500"
                >
                  <X size={24} />
                </button>
              </div>
              
              {activeFilters.length > 0 && (
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm font-medium text-gray-700">Active Filters</h3>
                    <button 
                      onClick={clearFilters}
                      className="text-sm text-gray-500 hover:text-gray-700"
                    >
                      Clear all
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeFilters.map(filter => (
                      <span 
                        key={filter}
                        className="inline-flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm"
                      >
                        {filter}
                        <button 
                          onClick={() => toggleFilter(filter)}
                          className="ml-1 text-gray-500 hover:text-gray-700"
                        >
                          <X size={14} />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* الفئات الرئيسية للموبايل */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm font-medium text-gray-700 mb-4">Gender</h3>
                <div className="space-y-4">
                  {mainCategories.map(category => (
                    <div key={category} className="flex items-center">
                      <input
                        id={`mobile-category-${category}`}
                        name={`mobile-category-${category}`}
                        type="checkbox"
                        className="h-5 w-5 rounded border-gray-300 text-gold-600 focus:ring-gold-500"
                        checked={activeFilters.includes(category)}
                        onChange={() => toggleFilter(category)}
                      />
                      <label
                        htmlFor={`mobile-category-${category}`}
                        className="ml-3 text-base text-gray-700"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* الفئات الفرعية للموبايل */}
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-sm font-medium text-gray-700 mb-4">Scent Type</h3>
                <div className="space-y-4">
                  {subCategories.map(category => (
                    <div key={category} className="flex items-center">
                      <input
                        id={`mobile-category-${category}`}
                        name={`mobile-category-${category}`}
                        type="checkbox"
                        className="h-5 w-5 rounded border-gray-300 text-gold-600 focus:ring-gold-500"
                        checked={activeFilters.includes(category)}
                        onChange={() => toggleFilter(category)}
                      />
                      <label
                        htmlFor={`mobile-category-${category}`}
                        className="ml-3 text-base text-gray-700"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="w-full bg-gray-900 text-white py-3 rounded-md font-medium"
                >
                  View {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'}
                </button>
              </div>
            </div>
          )}
          
          {/* Product Grid */}
          <div className="lg:col-span-3">
            <div className="hidden lg:flex justify-between items-center mb-8">
              <h2 className="text-xl font-medium">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'}
              </h2>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select className="border-gray-300 rounded-md text-sm focus:ring-gold-500 focus:border-gold-500">
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Best Selling</option>
                </select>
              </div>
            </div>
            
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your filters or check back later for new arrivals.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;