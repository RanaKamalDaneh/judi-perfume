import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
// import Story from '../components/home/Story';
import Benefits from '../components/home/Benefits';
import Newsletter from '../components/home/Newsletter';
// إزالة استيراد Subscription
import Testimonials from '../components/home/Testimonials';
// إزالة استيراد Promotions

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'judi | Luxury Perfumes';
  }, []);

  return (
    <div>
      <Hero />
      {/* إزالة مكون Promotions */}
      <FeaturedProducts />
      {/* <Story /> */}
      <Benefits />
      {/* إزالة مكون Subscription */}
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default HomePage;