import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingBag, User, ChevronDown } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
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

  // Always show header with background on non-home pages
  const isHomePage = location.pathname === '/';
  const showBackground = isScrolled || !isHomePage;

  // Handle navigation with reload
  const handleNavigation = (path: string) => {
    if (location.pathname === path) {
      window.location.href = path;
    }
  };
  
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${showBackground ? 'bg-white shadow-sm' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          onClick={() => handleNavigation('/')}
          className={`text-2xl font-serif font-bold ${showBackground ? 'text-gray-900' : 'text-white'}`}
        >
          <span className={showBackground ? 'text-gold-600' : 'text-white'}>j</span>udi
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            onClick={() => handleNavigation('/')}
            className={`font-medium relative group ${showBackground ? 'text-gray-800 hover:text-gold-600' : 'text-white hover:text-white/80'} transition-colors`}
          >
            <span>Home</span>
            <motion.span 
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-600 group-hover:w-full" 
              transition={{ duration: 0.3 }}
              whileHover={{ width: '100%' }}
            />
          </Link>
          <div className="relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`font-medium flex items-center ${showBackground ? 'text-gray-800 hover:text-gold-600' : 'text-white hover:text-white/80'} transition-colors`}
            >
              <span>Perfumes</span>
              <ChevronDown size={16} className="ml-1" />
            </button>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    to="/products" 
                    onClick={() => handleNavigation('/products')}
                    className="block px-4 py-2 text-gray-800 hover:bg-gold-50 hover:text-gold-600"
                  >
                    All Perfumes
                  </Link>
                  <Link 
                    to="/products?category=floral" 
                    onClick={() => handleNavigation('/products?category=floral')}
                    className="block px-4 py-2 text-gray-800 hover:bg-gold-50 hover:text-gold-600"
                  >
                    Floral
                  </Link>
                  <Link 
                    to="/products?category=woody" 
                    onClick={() => handleNavigation('/products?category=woody')}
                    className="block px-4 py-2 text-gray-800 hover:bg-gold-50 hover:text-gold-600"
                  >
                    Woody
                  </Link>
                  <Link 
                    to="/products?category=oriental" 
                    onClick={() => handleNavigation('/products?category=oriental')}
                    className="block px-4 py-2 text-gray-800 hover:bg-gold-50 hover:text-gold-600"
                  >
                    Oriental
                  </Link>
                  <Link 
                    to="/products?category=fresh" 
                    onClick={() => handleNavigation('/products?category=fresh')}
                    className="block px-4 py-2 text-gray-800 hover:bg-gold-50 hover:text-gold-600"
                  >
                    Fresh
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link 
            to="/contact" 
            onClick={() => handleNavigation('/contact')}
            className={`font-medium relative group ${showBackground ? 'text-gray-800 hover:text-gold-600' : 'text-white hover:text-white/80'} transition-colors`}
          >
            <span>Contact</span>
            <motion.span 
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-600 group-hover:w-full" 
              transition={{ duration: 0.3 }}
              whileHover={{ width: '100%' }}
            />
          </Link>
          <Link 
            to="/quiz" 
            onClick={() => handleNavigation('/quiz')}
            className={`font-medium relative group ${showBackground ? 'text-gray-800 hover:text-gold-600' : 'text-white hover:text-white/80'} transition-colors`}
          >
            <span>Find Your Scent</span>
            <motion.span 
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-600 group-hover:w-full" 
              transition={{ duration: 0.3 }}
              whileHover={{ width: '100%' }}
            />
          </Link>
        </nav>
        
        {/* Actions */}
        <div className="flex items-center">
          <button 
            className={`p-2 ${showBackground ? 'text-gray-800 hover:text-gold-600' : 'text-white hover:text-white/80'} transition-colors`}
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          <Link 
            to="/cart" 
            className={`p-2 relative ${showBackground ? 'text-gray-800 hover:text-gold-600' : 'text-white hover:text-white/80'} transition-colors`}
            aria-label="Shopping cart"
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-gold-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
          <button 
            className={`p-2 hidden md:block ${showBackground ? 'text-gray-800 hover:text-gold-600' : 'text-white hover:text-white/80'} transition-colors`}
            aria-label="User account"
          >
            <User size={20} />
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 ml-2 md:hidden ${showBackground ? 'text-gray-800' : 'text-white'}`}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-white z-40 pt-20 md:hidden"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            {/* Mobile Menu */}
            <nav className="container mx-auto px-6 py-6 flex flex-col space-y-6">
              <Link 
                to="/" 
                onClick={() => handleNavigation('/')}
                className="font-medium text-xl text-gray-800 hover:text-gold-600 transition-colors"
              >
                Home
              </Link>
              <div>
                <h3 className="font-medium text-xl text-gray-800 mb-4">Perfumes</h3>
                <div className="pl-4 flex flex-col space-y-4">
                  <Link 
                    to="/products" 
                    onClick={() => handleNavigation('/products')}
                    className="text-gray-600 hover:text-gold-600 transition-colors"
                  >
                    All Perfumes
                  </Link>
                  <Link 
                    to="/products?category=floral" 
                    onClick={() => handleNavigation('/products?category=floral')}
                    className="text-gray-600 hover:text-gold-600 transition-colors"
                  >
                    Floral
                  </Link>
                  <Link 
                    to="/products?category=woody" 
                    onClick={() => handleNavigation('/products?category=woody')}
                    className="text-gray-600 hover:text-gold-600 transition-colors"
                  >
                    Woody
                  </Link>
                  <Link 
                    to="/products?category=oriental" 
                    onClick={() => handleNavigation('/products?category=oriental')}
                    className="text-gray-600 hover:text-gold-600 transition-colors"
                  >
                    Oriental
                  </Link>
                  <Link 
                    to="/products?category=fresh" 
                    onClick={() => handleNavigation('/products?category=fresh')}
                    className="text-gray-600 hover:text-gold-600 transition-colors"
                  >
                    Fresh
                  </Link>
                </div>
              </div>
              <Link 
                to="/contact" 
                onClick={() => handleNavigation('/contact')}
                className="font-medium text-xl text-gray-800 hover:text-gold-600 transition-colors"
              >
                Contact
              </Link>
              <Link 
                to="/quiz" 
                onClick={() => handleNavigation('/quiz')}
                className="font-medium text-xl text-gray-800 hover:text-gold-600 transition-colors"
              >
                Find Your Scent
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;