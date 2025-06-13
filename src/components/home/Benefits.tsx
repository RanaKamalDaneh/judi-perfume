import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Award, Smile, Truck } from 'lucide-react';

const benefits = [
  {
    icon: <Leaf className="w-8 h-8 text-gold-600" />,
    title: 'Sustainable Ingredients',
    description: 'We source our ingredients ethically and sustainably from around the world.',
  },
  {
    icon: <Award className="w-8 h-8 text-gold-600" />,
    title: 'Artisanal Quality',
    description: 'Each fragrance is carefully crafted by master perfumers with decades of experience.',
  },
  {
    icon: <Smile className="w-8 h-8 text-gold-600" />,
    title: 'Satisfaction Guaranteed',
    description: "If you're not completely satisfied, we offer hassle-free returns within 30 days.",
  },
  {
    icon: <Truck className="w-8 h-8 text-gold-600" />,
    title: 'Free Shipping',
    description: 'On all orders over $100',
  },
];

const Benefits: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-serif text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose judi
          </motion.h2>
          <motion.p 
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our commitment to quality and customer satisfaction sets us apart.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;