import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link to="/" className="text-2xl font-serif font-bold text-white">
              judi
            </Link>
            <p className="mt-4 text-gray-400">
              Crafting luxury fragrances that capture moments, memories, and emotions.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.instagram.com/judi_perfume?utm_source=ig_web_button_share_sheet&igsh=MTh3ZDVjY3EweTQwbQ==" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                  Shop All
                </Link>
              </li>
              {/* <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li> */}
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              {/* <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li> */}
            </ul>
          </div>
          
          {/* Categories */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=Floral" className="text-gray-400 hover:text-white transition-colors">
                  Floral
                </Link>
              </li>
              <li>
                <Link to="/products?category=Oriental" className="text-gray-400 hover:text-white transition-colors">
                  Oriental
                </Link>
              </li>
              <li>
                <Link to="/products?category=Woody" className="text-gray-400 hover:text-white transition-colors">
                  Woody
                </Link>
              </li>
              <li>
                <Link to="/products?category=Fresh" className="text-gray-400 hover:text-white transition-colors">
                  Fresh
                </Link>
              </li>
              <li>
                <Link to="/products?category=Gourmand" className="text-gray-400 hover:text-white transition-colors">
                  Gourmand
                </Link>
              </li>
              <li>
                <Link to="/products?category=Aromatic-Fougere" className="text-gray-400 hover:text-white transition-colors">
                  Aromatic Fougère
                </Link>
              </li>
              <li>
                <Link to="/products?category=Chypre" className="text-gray-400 hover:text-white transition-colors">
                  Chypre
                </Link>
              </li>
              <li>
                <Link to="/products?category=Aquatic" className="text-gray-400 hover:text-white transition-colors">
                  Aquatic
                </Link>
              </li>
              <li>
                <Link to="/products?category=Mossy-Woods" className="text-gray-400 hover:text-white transition-colors">
                  Mossy Woods
                </Link>
              </li>
              <li>
                <Link to="/quiz" className="text-gray-400 hover:text-white transition-colors">
                  Find Your Scent
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Join Our Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
              <button
                type="submit"
                className="bg-gold-600 text-white px-4 py-2 rounded-md hover:bg-gold-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} judi. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/shipping" className="text-gray-400 text-sm hover:text-white transition-colors">
              Shipping Policy
            </Link>
          </div>
        </div>
        {/* Copyright and MINDX Link */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs mt-2 inline-block">
            Designed by MINDX
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;