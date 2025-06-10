import React from 'react';
import { motion } from 'framer-motion';

const Newsletter: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-serif mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Join Our Community
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Subscribe to our newsletter for exclusive offers, early access to new releases, and fragrance tips from our experts.
          </motion.p>
          
          <motion.form 
            className="flex flex-col md:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gold-600 text-white rounded-md font-medium hover:bg-gold-700 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </motion.form>
          
          <motion.p 
            className="text-gray-400 mt-4 text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            By subscribing, you agree to our Privacy Policy. We respect your privacy and will never share your information.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;