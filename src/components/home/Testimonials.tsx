import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    rating: 5,
    text: 'judi perfumes are amazing! They smell wonderful and last all day. You can\'t beat the value and customer service. The packaging is super cute too! Highly recommend!',
    product: 'Sweet Addict',
  },
  {
    name: 'Michael Chen',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    rating: 5,
    text: 'judi is my go-to perfume shop. If you\'re not purchasing your fragrances here, you\'re missing out on quality, affordability and curious noses trying to figure out what you\'re wearing that smells so good.',
    product: 'Midnight Oud'
  },
  {
    name: 'Emily Rodriguez',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    rating: 4,
    text: 'The perfumes are of best quality. I really liked the scent of Diamond collection. There was a wrong item shipped in my order, but customer service replied to my complaint immediately and sent a replacement without any charge.',
    product: 'Diamond Collection'
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-serif text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What Our Customers Say
          </motion.h2>
          <motion.p 
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Read reviews from customers who have experienced our fragrances
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">on {testimonial.product}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < testimonial.rating 
                      ? "fill-yellow-500 text-yellow-500" 
                      : "text-gray-300"}
                  />
                ))}
              </div>
              
              <p className="text-gray-600 italic">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;