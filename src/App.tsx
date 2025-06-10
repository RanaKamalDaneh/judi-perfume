import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
// import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
// import BlogPage from './pages/BlogPage';
// import BlogPostPage from './pages/BlogPostPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ScentQuizPage from './pages/ScentQuizPage';
import NotFoundPage from './pages/NotFoundPage';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="products/:id" element={<ProductDetailPage />} />
            {/* <Route path="about" element={<AboutPage />} /> */}
            <Route path="contact" element={<ContactPage />} />
            {/* <Route path="blog" element={<BlogPage />} /> */}
            {/* <Route path="blog/:id" element={<BlogPostPage />} /> */}
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