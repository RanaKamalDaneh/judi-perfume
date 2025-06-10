import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
// import Story from '../components/home/Story';
import Benefits from '../components/home/Benefits';
import Newsletter from '../components/home/Newsletter';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'judi | Luxury Perfumes';
  }, []);

  return (
    <div>
      <Hero />
      <FeaturedProducts />
      {/* <Story /> */}
      <Benefits />
      <Newsletter />
    </div>
  );
};

export default HomePage;