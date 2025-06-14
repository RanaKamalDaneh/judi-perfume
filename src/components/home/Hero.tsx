import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, Star } from 'lucide-react';
import { products } from '../../data/products';

// تحسين الأداء باستخدام useMemo للعطور المميزة
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
    color: 'text-red-500'
  },
  {
    image: products[4].images[0],
    name: products[4].name,
    description: products[4].description,
    color: 'text-yellow-500'
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
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  // تحسين أداء التمرير
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  
  // تحسين أداء تغيير الصور باستخدام useCallback
  useEffect(() => {
    if (!isVideoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredPerfumes.length);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [isVideoPlaying]);

  // تحسين أداء معالجة التمرير
  const handleScroll = () => {
    window.scrollTo({ 
      top: window.innerHeight, 
      behavior: 'smooth' 
    });
  };

  // تحسين أداء تحريك الجزيئات
  const particles = useMemo(() => {
    return [...Array(15)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 2
    }));
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden">
      <motion.div 
        style={{ opacity, scale }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="relative h-full w-full flex flex-col md:flex-row-reverse">
          {/* قسم الصور */}
          <motion.div 
            className="w-full md:w-1/2 h-[40vh] sm:h-[45vh] md:h-full relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              >
                <img 
                  src={featuredPerfumes[currentIndex].image} 
                  alt={featuredPerfumes[currentIndex].name} 
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />
              </motion.div>
            </AnimatePresence>
          </motion.div>
          
          {/* قسم المحتوى */}
          <div className="w-full md:w-1/2 h-[60vh] sm:h-[55vh] md:h-full flex items-center justify-center bg-black relative z-10 px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="text-center w-full max-w-xl mx-auto">
              {/* الشعار */}
              <motion.div
                className="mb-4 sm:mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif mb-1 text-white">
                  <span className={featuredPerfumes[currentIndex].color}>j</span>udi
                  <sup className={`text-xs align-super ${featuredPerfumes[currentIndex].color}`}>®</sup>
                </h2>
                <div className="flex items-center justify-center space-x-3">
                  <div className={`h-[1px] w-8 sm:w-12 ${featuredPerfumes[currentIndex].color}`} />
                  <p className={`text-lg sm:text-xl md:text-2xl font-light tracking-widest ${featuredPerfumes[currentIndex].color}`}>PERFUMERIE</p>
                  <div className={`h-[1px] w-8 sm:w-12 ${featuredPerfumes[currentIndex].color}`} />
                </div>
              </motion.div>
              
              {/* العنوان الرئيسي والوصف */}
              <motion.div
                className="space-y-3 sm:space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif leading-tight text-white">
                  <span className={featuredPerfumes[currentIndex].color}>Discover</span> Your Signature Scent
                </h1>
                
                <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-lg mx-auto">
                  Handcrafted luxury fragrances that tell your story and capture unforgettable moments.
                </p>
                
                {/* الأزرار */}
                <motion.div 
                  className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-4 sm:mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                >
                  <Link 
                    to="/products" 
                    className="w-full sm:w-auto group bg-white text-gray-900 px-6 sm:px-8 py-2.5 sm:py-3 rounded-md font-medium hover:bg-gold-500 hover:text-white transition-all duration-300 text-center shadow-md hover:shadow-lg flex items-center justify-center"
                  >
                    Shop Now
                    <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <Link 
                    to="/quiz" 
                    className="w-full sm:w-auto group border-2 border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 text-center shadow-md flex items-center justify-center"
                  >
                    Find Your Scent
                    <Star size={16} className="ml-2 transform group-hover:rotate-45 transition-transform duration-300" />
                  </Link>
                </motion.div>
              </motion.div>
              
              {/* تفاصيل العطر الحالي */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  className="text-center mt-4 sm:mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.h3 
                    className={`text-lg sm:text-xl font-serif mb-2 tracking-wider ${featuredPerfumes[currentIndex].color}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {featuredPerfumes[currentIndex].name.split('').map((char, idx) => (
                      <motion.span
                        key={idx}
                        className="mx-[1px]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.h3>
                  <motion.p 
                    className="text-xs sm:text-sm text-white/80 leading-relaxed tracking-wide max-w-md mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    {featuredPerfumes[currentIndex].description.split(' ').map((word, idx) => (
                      <motion.span
                        key={idx}
                        className="inline-block mx-[2px]"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 + 0.5 }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>

      {/* مؤشرات الشرائح */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {featuredPerfumes.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* مؤشر التمرير */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden md:flex flex-col items-center cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={handleScroll}
      >
        <span className="text-white/80 text-sm mb-2">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="text-white/80" size={20} />
        </motion.div>
      </motion.div>
      
      {/* الجزيئات المتحركة */}
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute w-1.5 h-1.5 bg-white rounded-full hidden md:block"
          style={{
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            y: [-20, 20],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </section>
  );
};

export default Hero;