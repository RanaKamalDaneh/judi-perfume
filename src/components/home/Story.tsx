import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Story: React.FC = () => {
  return (
    <section className="py-16 bg-rose-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-700 mb-6">
              Founded in 2025, judi was born from a passion for artisanal craftsmanship and a desire to create fragrances that tell stories and evoke emotions. Our founder, Judith Moreau, trained with master perfumers in Grasse, France, before establishing her own brand.
            </p>
            <p className="text-gray-700 mb-6">
              Each judi fragrance is meticulously crafted using the finest ingredients sourced from around the world. We believe in ethical sourcing, sustainable practices, and creating scents that not only smell beautiful but also connect with your memories and experiences.
            </p>
            <Link 
              to="/about" 
              className="inline-block border-2 border-gray-900 text-gray-900 px-6 py-2 rounded-md font-medium hover:bg-gray-900 hover:text-white transition-colors"
            >
              Learn More
            </Link>
          </motion.div>
          
          <motion.div
            className="relative h-[500px]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center rounded-lg shadow-xl"
              style={{ backgroundImage: 'url(https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg)' }}
            ></div>
            <div 
              className="absolute bottom-0 right-0 transform translate-x-8 translate-y-8 w-2/3 h-2/3 bg-cover bg-center rounded-lg shadow-xl z-10"
              style={{ backgroundImage: 'url(https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg)' }}
            ></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;