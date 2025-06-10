import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  useEffect(() => {
    document.title = 'Contact Us | judi';
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission to your backend
    console.log({ name, email, subject, message });
    setSubmitted(true);
    
    // Reset form
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    
    // Reset submitted state after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundColor:"RGB(184, 134, 11)" }}
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
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Contact Us</h1>
            <p className="text-xl text-white">
              We're here to help with any questions or inquiries about judi perfumes.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-700 mb-8">
                We would love to hear from you. Whether you have a question about our products, need assistance with an order, or want to inquire about partnerships, our team is ready to assist you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="w-6 h-6 text-gold-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Visit Our Flagship Store</h3>
                    <p className="text-gray-700 mt-1">
                      123 Fifth Avenue<br />
                      New York, NY 10010<br />
                      United States
                    </p>
                    <p className="text-gray-600 mt-2">
                      <strong>Hours:</strong> Monday-Saturday, 10am-7pm<br />
                      Sunday, 11am-6pm
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="w-6 h-6 text-gold-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
                    <p className="text-gray-700 mt-1">
                      <a href="mailto:hello@judi.com" className="text-gold-600 hover:underline">
                        hello@judi.com
                      </a>
                    </p>
                    <p className="text-gray-600 mt-2">
                      We aim to respond to all inquiries within 24 hours.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="w-6 h-6 text-gold-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Call Us</h3>
                    <p className="text-gray-700 mt-1">
                      <a href="tel:+12125551234" className="text-gold-600 hover:underline">
                        +1 (212) 555-1234
                      </a>
                    </p>
                    <p className="text-gray-600 mt-2">
                      Available Monday-Friday, 9am-6pm EST
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-serif text-gray-900 mb-6">Send Us a Message</h2>
                
                {submitted ? (
                  <div className="bg-green-50 text-green-800 p-4 rounded-md mb-6">
                    <p className="font-medium">Thank you for your message!</p>
                    <p className="mt-1">We'll get back to you as soon as possible.</p>
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-gold-500 focus:border-gold-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-gold-500 focus:border-gold-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-gold-500 focus:border-gold-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-gold-500 focus:border-gold-500"
                        required
                      ></textarea>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500"
                      >
                        <Send size={18} className="mr-2" />
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Store Locations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-serif text-gray-900 mb-4">Our Stores</h2>
            <p className="text-gray-700">
              Visit one of our boutiques to experience judi fragrances in person and receive personalized assistance from our knowledgeable staff.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-medium text-gray-900 mb-2">New York</h3>
              <p className="text-gray-700 mb-4">
                123 Fifth Avenue<br />
                New York, NY 10010<br />
                United States
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Phone:</strong> +1 (212) 555-1234<br />
                <strong>Hours:</strong> Monday-Saturday, 10am-7pm<br />
                Sunday, 11am-6pm
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-medium text-gray-900 mb-2">Paris</h3>
              <p className="text-gray-700 mb-4">
                8 Rue de la Paix<br />
                75002 Paris<br />
                France
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Phone:</strong> +33 1 23 45 67 89<br />
                <strong>Hours:</strong> Monday-Saturday, 10am-7pm<br />
                Sunday, Closed
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-medium text-gray-900 mb-2">London</h3>
              <p className="text-gray-700 mb-4">
                27 Bond Street<br />
                London, W1S 2RW<br />
                United Kingdom
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Phone:</strong> +44 20 1234 5678<br />
                <strong>Hours:</strong> Monday-Saturday, 10am-6pm<br />
                Sunday, 12pm-5pm
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343077!2d-73.99038908459496!3d40.74123794379789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a3f81d549f%3A0xb2a39bb5cacc7da0!2s123%205th%20Ave%2C%20New%20York%2C%20NY%2010003%2C%20USA!5e0!3m2!1sen!2s!4v1627309922124!5m2!1sen!2s" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="judi Flagship Store Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-serif text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-700">
              Find answers to common questions about our products and services.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-2">What is your return policy?</h3>
                <p className="text-gray-700">
                  We offer a 30-day return policy for unopened products in their original packaging. If you're not completely satisfied with your purchase, please contact our customer service team to initiate a return.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Do you offer samples?</h3>
                <p className="text-gray-700">
                  Yes, we offer sample sets of our fragrances so you can try before you buy. Our Discovery Set includes 2ml vials of all our current fragrances and is available for purchase online.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-2">How long does shipping take?</h3>
                <p className="text-gray-700">
                  Standard shipping within the United States typically takes 3-5 business days. International shipping times vary by location but generally range from 7-14 business days. Expedited shipping options are available at checkout.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Are your products tested on animals?</h3>
                <p className="text-gray-700">
                  No, judi is committed to cruelty-free practices. We do not test our products on animals, nor do we work with suppliers who conduct animal testing.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Do you ship internationally?</h3>
                <p className="text-gray-700">
                  Yes, we ship to most countries worldwide. International customers may be subject to import duties and taxes, which are the responsibility of the recipient.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;