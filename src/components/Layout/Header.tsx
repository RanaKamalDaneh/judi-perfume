import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingBag, User } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className={`text-2xl font-serif font-bold ${
          isScrolled ? 'text-gray-900' : 'text-white'
        }`}>
          judi
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`font-medium ${
            isScrolled ? 'text-gray-800 hover:text-gold-600' : 'text-white hover:text-white/80'
          } transition-colors`}>
            Home
          </Link>
          <Link to="/products" className={`font-medium ${
            isScrolled ? 'text-gray-800 hover:text-gold-600' : 'text-white hover:text-white/80'
          } transition-colors`}>
            Perfumes
          </Link>
          {/* <Link to="/about" className={`font-medium ${
            isScrolled ? 'text-gray-800 hover:text-gold-600' : 'text-white hover:text-white/80'
          } transition-colors`}>
            About
          </Link>
          <Link to="/blog" className={`font-medium ${
            isScrolled ? 'text-gray-800 hover:text-gold-600' : 'text-white hover:text-white/80'
          } transition-colors`}>
            Blog
          </Link> */}
          <Link to="/contact" className={`font-medium ${
            isScrolled ? 'text-gray-800 hover:text-gold-600' : 'text-white hover:text-white/80'
          } transition-colors`}>
            Contact
          </Link>
        </nav>
        
        {/* Actions */}
        <div className="flex items-center">
          <button className={`p-2 ${
            isScrolled ? 'text-gray-800 hover:text-gold-600' : 'text-white hover:text-white/80'
          } transition-colors`}>
            <Search size={20} />
          </button>
          <Link to="/cart" className={`p-2 relative ${
            isScrolled ? 'text-gray-800 hover:text-gold-600' : 'text-white hover:text-white/80'
          } transition-colors`}>
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-gold-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
          <button className={`p-2 hidden md:block ${
            isScrolled ? 'text-gray-800 hover:text-gold-600' : 'text-white hover:text-white/80'
          } transition-colors`}>
            <User size={20} />
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 ml-2 md:hidden ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-20 md:hidden">
          <nav className="container mx-auto px-6 py-6 flex flex-col space-y-6">
            <Link to="/" className="font-medium text-xl text-gray-800 hover:text-gold-600 transition-colors">
              Home
            </Link>
            <Link to="/products" className="font-medium text-xl text-gray-800 hover:text-gold-600 transition-colors">
              Perfumes
            </Link>
            {/* <Link to="/about" className="font-medium text-xl text-gray-800 hover:text-gold-600 transition-colors">
              About
            </Link>
            <Link to="/blog" className="font-medium text-xl text-gray-800 hover:text-gold-600 transition-colors">
              Blog
            </Link> */}
            <Link to="/contact" className="font-medium text-xl text-gray-800 hover:text-gold-600 transition-colors">
              Contact
            </Link>
            <Link to="/quiz" className="font-medium text-xl text-gold-600 hover:opacity-80 transition-colors">
              Find Your Scent
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;