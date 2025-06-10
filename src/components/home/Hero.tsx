import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import videoSrc from '../../img/vedio.mp4';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* تنسيق جديد: صف مرن يضع الفيديو على اليسار والنص على اليمين */}
      <div className="relative h-full w-full flex flex-row-reverse">
        {/* الفيديو على الجهة اليسار (يظهر على اليمين في الواجهات العربية) */}
        <motion.div 
          className="w-1/2 h-full relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* طبقة تدرج شفافة فوق الفيديو */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
        </motion.div>
        
        {/* المحتوى النصي على الجهة اليمين (يظهر على اليسار في الواجهات العربية) */}
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
                className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
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
            </motion.div>
          </div>
        </div>
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