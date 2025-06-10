import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Newsletter from '../components/home/Newsletter';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About judi | Our Story';
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/6621440/pexels-photo-6621440.jpeg)' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Our Story</h1>
            <p className="text-xl text-white">
              Discover the passion and artistry behind judi's luxury fragrances.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif text-gray-900 mb-6">The Birth of judi</h2>
              <p className="text-gray-700 mb-6">
                Founded in 2018 by master perfumer Judith Moreau, judi was born from a desire to create fragrances that capture moments, memories, and emotions. After training with renowned perfumers in Grasse, France—the world's perfume capital—Judith set out to establish a brand that would honor traditional craftsmanship while embracing modern sensibilities.
              </p>
              <p className="text-gray-700 mb-6">
                The name "judi" is not only a nod to our founder but also represents our core philosophy: creating perfumes that feel uniquely personal to each wearer, as if they were made just for you.
              </p>
            </motion.div>
            
            <div className="my-12">
              <img 
                src="https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg" 
                alt="judi perfume creation" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif text-gray-900 mb-6">Our Philosophy</h2>
              <p className="text-gray-700 mb-6">
                At judi, we believe that a fragrance is more than just a scent—it's an invisible accessory that communicates who you are without saying a word. Each of our perfumes is crafted with intention, designed to evoke specific emotions and create lasting impressions.
              </p>
              <p className="text-gray-700 mb-6">
                We are committed to quality, sustainability, and ethical practices in every aspect of our business. From sourcing the finest ingredients to designing our recyclable packaging, we strive to make choices that honor both our customers and our planet.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-serif text-gray-900 mb-4">Our Fragrance Creation Process</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Creating a judi fragrance is a meticulous process that combines artistry, science, and passion. Each scent represents months—sometimes years—of careful development.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-gold-600 font-serif text-xl">1</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Inspiration</h3>
                <p className="text-gray-700">
                  Every judi fragrance begins with inspiration—a memory, a place, an emotion, or a story we want to tell through scent. Our creative team works together to develop a clear vision for each new perfume.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-gold-600 font-serif text-xl">2</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Ingredient Selection</h3>
                <p className="text-gray-700">
                  We source the finest ingredients from around the world, working directly with farmers and suppliers who share our commitment to quality and sustainability. Each raw material is carefully evaluated before becoming part of a judi fragrance.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-gold-600 font-serif text-xl">3</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Composition</h3>
                <p className="text-gray-700">
                  Our master perfumers blend selected ingredients to create a harmonious composition. This iterative process involves creating multiple versions of a fragrance, evaluating each one, and making refinements until the perfect balance is achieved.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-gold-600 font-serif text-xl">4</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Maturation</h3>
                <p className="text-gray-700">
                  Once a formula is finalized, the fragrance undergoes a maturation period, allowing the ingredients to fully blend and develop their character. This patience is essential for creating complex, nuanced scents.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-gold-600 font-serif text-xl">5</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Testing</h3>
                <p className="text-gray-700">
                  We conduct extensive testing to ensure each fragrance performs beautifully on the skin. This includes evaluating its longevity, sillage (the trail it leaves in the air), and how it evolves over time.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-gold-600 font-serif text-xl">6</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Presentation</h3>
                <p className="text-gray-700">
                  The final step is creating the perfect presentation. Our design team develops elegant bottles and packaging that reflect the character of each fragrance, ensuring that every aspect of the judi experience is beautiful and memorable.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif text-gray-900 mb-6">Our Values</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Quality Without Compromise</h3>
                  <p className="text-gray-700">
                    We never compromise on the quality of our ingredients or our creative process. Each judi fragrance represents the pinnacle of perfumery art, crafted with exceptional attention to detail.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Sustainability</h3>
                  <p className="text-gray-700">
                    We are committed to responsible sourcing and sustainable practices. We work with suppliers who share our values, and we're continuously seeking ways to reduce our environmental footprint through recyclable packaging and ethical production methods.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Inclusivity</h3>
                  <p className="text-gray-700">
                    We believe fragrance is for everyone. We create scents that transcend traditional gender categories, focusing instead on the emotions and experiences they evoke. Our fragrances are designed to be enjoyed by anyone who connects with them.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Innovation</h3>
                  <p className="text-gray-700">
                    While we honor traditional perfumery techniques, we also embrace innovation. We're constantly exploring new ingredients, extraction methods, and creative approaches to push the boundaries of what fragrance can be.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-serif text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-700">
              The people behind judi are passionate experts dedicated to creating exceptional fragrances.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" 
                  alt="Judith Moreau - Founder & Master Perfumer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-900">Judith Moreau</h3>
              <p className="text-gray-600">Founder & Master Perfumer</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" 
                  alt="Marco Chen - Creative Director" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-900">Marco Chen</h3>
              <p className="text-gray-600">Creative Director</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg" 
                  alt="Sophia Laurent - Head of Product Development" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-900">Sophia Laurent</h3>
              <p className="text-gray-600">Head of Product Development</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Newsletter />
    </div>
  );
};

export default AboutPage;