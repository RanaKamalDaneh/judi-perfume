import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts, getRecentBlogPosts } from '../data/blogPosts';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Blog | judi';
  }, []);

  const recentPosts = getRecentBlogPosts(3);
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg)' }}
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
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">The Fragrance Journal</h1>
            <p className="text-xl text-white">
              Discover the art and science of perfumery through our curated articles.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl font-serif text-gray-900 mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Recent Articles
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentPosts.map((post, index) => (
                <motion.div 
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={`/blog/${post.id}`} className="block">
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-4">
                      <img 
                        src={post.coverImage} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-gray-500 space-x-4">
                        <span>{new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                        <span className="text-gold-600">{post.category}</span>
                      </div>
                      <h3 className="text-xl font-medium text-gray-900 group-hover:text-gold-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600">
                        {post.excerpt}
                      </p>
                      <div className="pt-2 flex items-center text-gold-600 font-medium group-hover:text-gold-700">
                        Read More <ChevronRight size={16} className="ml-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* All Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl font-serif text-gray-900 mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              All Articles
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div 
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex group"
                >
                  <Link to={`/blog/${post.id}`} className="flex space-x-6">
                    <div className="w-1/3 flex-shrink-0">
                      <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                        <img 
                          src={post.coverImage} 
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>
                    <div className="w-2/3 space-y-3">
                      <div className="flex items-center text-sm text-gray-500 space-x-4">
                        <span>{new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                        <span className="text-gold-600">{post.category}</span>
                      </div>
                      <h3 className="text-xl font-medium text-gray-900 group-hover:text-gold-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="pt-2 flex items-center text-gold-600 font-medium group-hover:text-gold-700">
                        Read More <ChevronRight size={16} className="ml-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-serif mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Subscribe to Our Newsletter
            </motion.h2>
            
            <motion.p 
              className="text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Be the first to receive our latest articles, fragrance tips, and exclusive offers.
            </motion.p>
            
            <motion.form 
              className="flex flex-col md:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gold-600 text-white rounded-md font-medium hover:bg-gold-700 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;