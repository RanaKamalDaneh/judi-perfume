import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ScentQuizPage from './pages/ScentQuizPage';
import NotFoundPage from './pages/NotFoundPage';
import { CartProvider } from './context/CartContext';

function App() {
  const [showWelcomePopup, setShowWelcomePopup] = useState(true);

  // Close popup when user submits or closes it
  const handleClosePopup = () => {
    setShowWelcomePopup(false);
  };

  return (
    <CartProvider>
      <Router>
        {/* Welcome Popup */}
        {showWelcomePopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-white rounded-lg p-8 max-w-md w-full mx-4">
              <button
                onClick={handleClosePopup}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="text-center">
                <h2 className="text-3xl font-serif mb-2">Shop & Save</h2>
                <p className="text-xl font-medium text-gray-800 mb-4">Spend $75 & Get Free Shipping</p>
                <p className="text-lg font-medium mb-6 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">Extra 10% OFF on all products</p>
                
                <form className="space-y-4 mb-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Enter your email or phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
                    />
                  </div>
                  <button
                    type="submit"
                    onClick={handleClosePopup}
                    className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 transition-colors"
                  >
                    Order Now
                  </button>
                </form>
                
                <p className="text-sm text-gray-500">
                  By subscribing, you agree to receive marketing communications from us.
                </p>
              </div>
            </div>
          </div>
        )}

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="products/:id" element={<ProductDetailPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="quiz" element={<ScentQuizPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
