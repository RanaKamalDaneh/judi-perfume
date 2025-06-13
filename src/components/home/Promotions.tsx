import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const promotions = [
  {
    title: 'New Customer Offer',
    description: 'Get 10% off your first order when you sign up for our newsletter',
    code: 'WELCOME10',
    bgColor: 'bg-rose-50',
    textColor: 'text-rose-900',
    buttonColor: 'bg-rose-900 hover:bg-rose-800',
    link: '/products'
  },
  {
    title: 'Limited Time Offer',
    description: 'Buy any 2 perfumes and get 1 free sample set',
    code: 'BUY2GET1',
    bgColor: 'bg-gold-100',
    textColor: 'text-gold-900',
    buttonColor: 'bg-gold-600 hover:bg-gold-700',
    link: '/products'
  }
];

const Promotions: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-serif text-gray-900 mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Special Offers
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {promotions.map((promo, index) => (
            <motion.div
              key={promo.title}
              className={`${promo.bgColor} rounded-lg p-6 shadow-sm`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <h3 className={`text-xl font-medium ${promo.textColor} mb-2`}>{promo.title}</h3>
              <p className={`${promo.textColor} mb-4 opacity-80`}>{promo.description}</p>
              
              {promo.code && (
                <div className="bg-white rounded-md p-3 mb-4 flex items-center justify-between border border-gray-200">
                  <span className="font-mono font-medium">{promo.code}</span>
                  <button 
                    className="text-sm text-gold-600 hover:text-gold-700"
                    onClick={() => navigator.clipboard.writeText(promo.code || '')}
                  >
                    Copy
                  </button>
                </div>
              )}
              
              <Link 
                to={promo.link} 
                className={`block text-center ${promo.buttonColor} text-white px-4 py-2 rounded-md font-medium transition-colors`}
              >
                Shop Now
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotions;