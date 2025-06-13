import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// استيراد بيانات المنتجات
import { products } from '../../data/products';

// اختيار بعض العطور المميزة للعرض
const featuredPerfumes = [
  {
    image: products[0].images[0],
    name: products[0].name,
    description: products[0].description,
    color: 'text-rose-500'
  },
  {
    image: products[1].images[0],
    name: products[1].name,
    description: products[1].description,
    color: 'text-amber-500'
  },
  {
    image: products[4].images[0],
    name: products[4].name,
    description: products[4].description,
    color: 'text-blue-500'
  },
  {
    image: products[5].images[0],
    name: products[5].name,
    description: products[5].description,
    color: 'text-purple-500'
  },
  {
    image: products[6].images[0],
    name: products[6].name,
    description: products[6].description,
    color: 'text-emerald-500'
  }
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // تغيير الصورة كل 5 ثوانٍ
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredPerfumes.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="relative h-full w-full flex flex-row-reverse">
        {/* عرض الصور بشكل تتابعي */}
        <motion.div 
          className="w-1/2 h-full relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <img 
                src={featuredPerfumes[currentIndex].image} 
                alt={featuredPerfumes[currentIndex].name} 
                className="w-full h-full object-cover"
              />
              
              {/* طبقة تدرج شفافة فوق الصورة */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/10" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/10" />
            </motion.div>
          </AnimatePresence>
        </motion.div>
        
        {/* المحتوى النصي على الجهة اليمين */}
        <div className="w-1/2 h-full flex items-center justify-center bg-black">
          <div className="text-center px-8 md:px-12 lg:px-16 max-w-xl">
            {/* الشعار */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h2 className="text-7xl font-serif mb-1 text-white">judi</h2>
              <p className="text-2xl font-light tracking-widest text-white">PERFUMERIE</p>
            </motion.div>
            
            {/* المحتوى الرئيسي */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-4 text-white">
                Discover Your Signature Scent
              </h1>
              
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                Handcrafted luxury fragrances that tell your story and capture unforgettable moments.
              </p>
              
              <motion.div 
                className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              >
                <Link 
                  to="/products" 
                  className="bg-white text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors text-center shadow-md hover:shadow-lg"
                >
                  Shop Now
                </Link>
                <Link 
                  to="/quiz" 
                  className="border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-colors text-center shadow-md"
                >
                  Find Your Scent
                </Link>
              </motion.div>
              
              {/* إضافة وصف العطر تحت الأزرار */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className={`text-xl font-serif mb-2 ${featuredPerfumes[currentIndex].color}`}>
                    {featuredPerfumes[currentIndex].name}
                  </h3>
                  <p className="text-sm text-white/80">
                    {featuredPerfumes[currentIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* مؤشرات الشرائح */}
      <div className="absolute bottom-5 left-1/4 transform -translate-x-1/2 flex space-x-2">
        {featuredPerfumes.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-white w-4' : 'bg-white/50'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      
      {/* جزيئات متحركة */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </section>
  );
};

export default Hero;