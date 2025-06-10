import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Minus, Plus, ShoppingBag } from 'lucide-react';

const CartPage: React.FC = () => {
  const { items, removeFromCart, updateQuantity, subtotal, totalItems } = useCart();
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = 'Shopping Cart | judi';
  }, []);
  
  // Calculate shipping cost (free over $100)
  const shipping = subtotal > 100 ? 0 : 8;
  
  // Calculate total
  const total = subtotal + shipping;
  
  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 pt-32 pb-20 text-center">
        <div className="max-w-md mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-6">
            <ShoppingBag size={24} className="text-gray-500" />
          </div>
          <h1 className="text-2xl font-medium mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-8">Looks like you haven't added any perfumes to your cart yet.</p>
          <Link to="/products" className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 pt-32 pb-20">
      <h1 className="text-2xl md:text-3xl font-serif mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="border-b border-gray-200 pb-6 mb-6 hidden md:flex">
            <div className="w-1/2">
              <span className="text-sm font-medium text-gray-600">Product</span>
            </div>
            <div className="w-1/6 text-center">
              <span className="text-sm font-medium text-gray-600">Price</span>
            </div>
            <div className="w-1/6 text-center">
              <span className="text-sm font-medium text-gray-600">Quantity</span>
            </div>
            <div className="w-1/6 text-right">
              <span className="text-sm font-medium text-gray-600">Total</span>
            </div>
          </div>
          
          {items.map((item) => (
            <div key={`${item.product.id}-${item.product.selectedSize}`} className="border-b border-gray-200 py-6">
              {/* Mobile Layout */}
              <div className="md:hidden grid grid-cols-3 gap-4">
                <div className="col-span-1">
                  <div className="aspect-square bg-gray-100 rounded-md overflow-hidden">
                    <img 
                      src={item.product.images[0]} 
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="flex justify-between">
                    <Link to={`/products/${item.product.id}`} className="font-medium text-gray-900 hover:text-gold-600">
                      {item.product.name}
                    </Link>
                    <button 
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Size: {item.product.selectedSize}</p>
                  <p className="text-sm font-medium text-gray-900 mt-2">${item.product.price.toFixed(2)}</p>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-gray-300 rounded-md">
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 h-8 flex items-center justify-center text-gray-900">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <p className="font-medium text-gray-900">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Desktop Layout */}
              <div className="hidden md:flex items-center">
                <div className="w-1/2 flex items-center">
                  <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden mr-4">
                    <img 
                      src={item.product.images[0]} 
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <Link to={`/products/${item.product.id}`} className="font-medium text-gray-900 hover:text-gold-600">
                      {item.product.name}
                    </Link>
                    <p className="text-sm text-gray-600 mt-1">Size: {item.product.selectedSize}</p>
                    <button 
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-sm text-gray-500 hover:text-red-500 flex items-center mt-2"
                    >
                      <Trash2 size={14} className="mr-1" />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
                <div className="w-1/6 text-center">
                  <span className="text-gray-900">${item.product.price.toFixed(2)}</span>
                </div>
                <div className="w-1/6 text-center">
                  <div className="flex items-center justify-center">
                    <button 
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-l-md border border-gray-300"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-10 h-8 flex items-center justify-center text-gray-900 border-t border-b border-gray-300">
                      {item.quantity}
                    </span>
                    <button 
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-r-md border border-gray-300"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
                <div className="w-1/6 text-right">
                  <span className="font-medium text-gray-900">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
          
          <div className="flex justify-between items-center mt-8">
            <Link to="/products" className="text-gold-600 hover:text-gold-700 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Continue Shopping
            </Link>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Order Summary</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal ({totalItems} items)</span>
                <span className="text-gray-900">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="text-gray-900">
                  {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-between font-medium">
                  <span className="text-gray-900">Total</span>
                  <span className="text-gray-900">${total.toFixed(2)}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Tax calculated at checkout
                </p>
              </div>
            </div>
            
            <button 
              onClick={() => navigate('/checkout')}
              className="w-full bg-gray-900 text-white py-3 rounded-md font-medium hover:bg-gray-800 transition-colors mt-6"
            >
              Proceed to Checkout
            </button>
            
            <div className="mt-6 space-y-4">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-sm text-gray-600">Secure checkout</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <span className="text-sm text-gray-600">We accept all major credit cards</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="text-sm text-gray-600">Free shipping on orders over $100</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;