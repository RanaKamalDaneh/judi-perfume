import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  image: string;
  rating: number;
  text: string;
  product: string;
  location: string;
  date: string;
}

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: 'Sophia Reynolds',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    rating: 5,
    text: 'Judi fragrances have become my signature scent. The Midnight Oud lasts all day and I constantly receive compliments.',
    product: 'Midnight Oud',
    location: 'New York',
    date: 'March 15, 2025'
  },
  {
    id: 2,
    name: 'James Wilson',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    rating: 5,
    text: 'The Amber & Sandalwood has incredible longevity and projection. Truly a masterpiece of perfumery.',
    product: 'Amber & Sandalwood',
    location: 'London',
    date: 'February 3, 2025'
  },
  {
    id: 3,
    name: 'Emma Chen',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    rating: 5,
    text: 'The Rose Elixir is sophisticated yet playful, perfect for both day and evening wear.',
    product: 'Rose Elixir',
    location: 'Paris',
    date: 'April 22, 2025'
  },
  {
    id: 4,
    name: 'Michael Torres',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    rating: 4,
    text: 'The Mediterranean Citrus is refreshing and unique. Perfect for summer days.',
    product: 'Mediterranean Citrus',
    location: 'Barcelona',
    date: 'May 10, 2025'
  },
  {
    id: 5,
    name: 'Olivia Johnson',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
    rating: 5,
    text: 'The Vanilla & Musk is warm, inviting, and unlike anything else in my collection.',
    product: 'Vanilla & Musk',
    location: 'Sydney',
    date: 'January 18, 2025'
  },
  {
    id: 6,
    name: 'David Kim',
    image: 'https://randomuser.me/api/portraits/men/6.jpg',
    rating: 5,
    text: 'The Vetiver & Cedar cologne is sophisticated and masculine. Perfect for any occasion.',
    product: 'Vetiver & Cedar',
    location: 'Tokyo',
    date: 'June 5, 2025'
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  const updateItemsPerView = useCallback(() => {
    const width = window.innerWidth;
    if (width < 640) setItemsPerView(1);
    else if (width < 1024) setItemsPerView(2);
    else setItemsPerView(3);
  }, []);

  useEffect(() => {
    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, [updateItemsPerView]);

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => {
      const maxIndex = testimonialData.length - itemsPerView;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  }, [itemsPerView]);

  const handlePrev = useCallback(() => {
    setCurrentIndex(prev => {
      const maxIndex = testimonialData.length - itemsPerView;
      return prev <= 0 ? maxIndex : prev - 1;
    });
  }, [itemsPerView]);

  const renderStars = (rating: number) => (
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-gold-500 fill-gold-500' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1 bg-gold-100 text-gold-600 rounded-full text-sm font-medium uppercase tracking-wider mb-3">
            Customer Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600">
            Discover why our customers love Judi fragrances
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
            >
              {testimonialData.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gray-50 p-8 rounded-xl h-full flex flex-col relative group hover:bg-gray-100 transition-colors duration-300">
                    <Quote className="absolute top-6 right-6 w-10 h-10 text-gold-100 group-hover:text-gold-200 transition-colors duration-300" />
                    
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 ring-2 ring-gold-100 group-hover:ring-gold-200 transition-colors duration-300">
                        <img
                          src={testimonial.image}
                          alt=""
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'https://via.placeholder.com/48x48';
                          }}
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>

                    {renderStars(testimonial.rating)}
                    
                    <p className="text-gray-600 mb-6 flex-grow italic">"{testimonial.text}"</p>
                    
                    <div className="mt-auto">
                      <p className="text-sm font-medium text-gold-600">{testimonial.product}</p>
                      <p className="text-xs text-gray-500">{testimonial.date}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center mt-10 space-x-4">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white border border-gray-200 hover:bg-gold-50 hover:border-gold-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gold-200 focus:ring-opacity-50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 hover:text-gold-600 transition-colors duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white border border-gray-200 hover:bg-gold-50 hover:border-gold-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gold-200 focus:ring-opacity-50"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 hover:text-gold-600 transition-colors duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;