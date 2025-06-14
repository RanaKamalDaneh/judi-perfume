import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Leaf, Droplets, Shield, Award, Heart } from 'lucide-react';

const Benefits: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const benefits = [
    {
      icon: <Sparkles className="w-8 h-8 text-gold-500" />,
      title: 'Premium Ingredients',
      description: 'Sourced from the finest suppliers around the world for exceptional quality and longevity.'
    },
    {
      icon: <Leaf className="w-8 h-8 text-gold-500" />,
      title: 'Sustainable Practices',
      description: 'Eco-friendly production methods and recyclable packaging to protect our planet.'
    },
    {
      icon: <Droplets className="w-8 h-8 text-gold-500" />,
      title: 'Long-Lasting Scent',
      description: 'Carefully formulated to maintain their distinctive character throughout the day.'
    },
    {
      icon: <Shield className="w-8 h-8 text-gold-500" />,
      title: 'Cruelty-Free',
      description: 'Never tested on animals and free from harmful chemicals for peace of mind.'
    },
    {
      icon: <Award className="w-8 h-8 text-gold-500" />,
      title: 'Free Shipping',
      description: 'On all orders over $100'
    },
    {
      icon: <Heart className="w-8 h-8 text-gold-500" />,
      title: 'Artisan Crafted',
      description: 'Created by master perfumers with decades of experience and passion for their craft.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4" ref={containerRef}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            className="inline-block px-4 py-1 bg-gold-100 text-gold-600 rounded-full text-sm font-medium uppercase tracking-wider mb-3"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Judi
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-serif text-gray-900 mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The Judi Difference
          </motion.h2>
          <motion.p 
            className="text-gray-600"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Discover what sets our fragrances apart and why discerning customers choose Judi for their signature scent.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center md:items-start text-center md:text-left"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="bg-gold-50 p-3 rounded-full mb-6 inline-flex">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;