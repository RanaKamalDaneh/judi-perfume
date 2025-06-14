import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-gold-50 to-gold-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-gold-200 opacity-20"></div>
        <div className="absolute top-1/2 -right-24 w-64 h-64 rounded-full bg-gold-200 opacity-20"></div>
        <div className="absolute -bottom-32 left-1/4 w-72 h-72 rounded-full bg-gold-200 opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Stay Connected</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Subscribe to our newsletter for exclusive offers, early access to new fragrances, and expert scent advice.
            </p>
          </motion.div>
          
          <motion.form 
            onSubmit={handleSubmit}
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className={`w-full px-5 py-4 pr-12 rounded-lg border ${error ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-gold-500'} focus:border-transparent focus:outline-none focus:ring-2`}
                disabled={isLoading || isSubmitted}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gold-600 hover:bg-gold-700 text-white p-2 rounded-md transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={isLoading || isSubmitted}
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : isSubmitted ? (
                  <CheckCircle size={20} />
                ) : (
                  <Send size={20} />
                )}
              </button>
            </div>
            
            {error && (
              <motion.p 
                className="mt-2 text-red-600 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {error}
              </motion.p>
            )}
            
            {isSubmitted && (
              <motion.p 
                className="mt-2 text-green-600 text-sm flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <CheckCircle size={16} className="mr-1" />
                Thank you for subscribing!
              </motion.p>
            )}
            
            <p className="mt-4 text-xs text-gray-500 text-center">
              By subscribing, you agree to our <a href="#" className="text-gold-600 hover:underline">Privacy Policy</a>. 
              We respect your privacy and will never share your information.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;