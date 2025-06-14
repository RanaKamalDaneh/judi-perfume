import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, MessageSquare, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/src/img/j.jpg')",
            backgroundPosition: "center 30%"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        </div>
        
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ duration: 1 }}
              className="h-1 bg-gold-500 mb-6"
            />
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 font-light">Get in Touch</h1>
            <p className="text-xl text-white/90 max-w-lg">
              We're here to help with any questions about our luxury fragrances and services.  
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-8"
            >
              <a 
                href="#contact-form" 
                className="px-8 py-3 bg-gold-500 text-white rounded-full hover:bg-gold-600 transition-all duration-300 inline-flex items-center"
              >
                <MessageSquare size={18} className="mr-2" />
                Contact Us Now
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Info & Form */}
      <section className="py-20 bg-white" id="contact-form">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <span className="px-4 py-1 bg-gold-100 text-gold-600 rounded-full text-sm font-medium uppercase tracking-wider">Contact Us</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl font-serif text-gray-900 mt-4 mb-6"
            >
              We'd Love to Hear From You
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Whether you have a question about our luxury fragrances, need assistance with an order, or want to inquire about partnerships, our dedicated team is ready to assist you.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-8"
            >
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-gold-100 rounded-lg">
                    <MapPin className="w-6 h-6 text-gold-600" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">Visit Our Flagship Store</h3>
                    <p className="text-gray-700 mt-2">
                      123 Fifth Avenue<br />
                      New York, NY 10010<br />
                      United States
                    </p>
                    <div className="flex items-center mt-3 text-gray-600">
                      <Clock size={16} className="mr-2 text-gold-500" />
                      <span className="text-sm">Monday-Saturday: 10am-7pm, Sunday: 11am-6pm</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-gold-100 rounded-lg">
                    <Mail className="w-6 h-6 text-gold-600" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
                    <p className="text-gray-700 mt-2">
                      <a href="mailto:hello@judi.com" className="text-gold-600 hover:underline transition-colors duration-300">
                        hello@judi.com
                      </a>
                    </p>
                    <div className="flex items-center mt-3 text-gray-600">
                      <Clock size={16} className="mr-2 text-gold-500" />
                      <span className="text-sm">We respond within 24 hours</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-gold-100 rounded-lg">
                    <Phone className="w-6 h-6 text-gold-600" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">Call Us</h3>
                    <p className="text-gray-700 mt-2">
                      <a href="tel:+12125551234" className="text-gold-600 hover:underline transition-colors duration-300">
                        +1 (212) 555-1234
                      </a>
                    </p>
                    <div className="flex items-center mt-3 text-gray-600">
                      <Clock size={16} className="mr-2 text-gold-500" />
                      <span className="text-sm">Monday-Friday: 9am-6pm EST</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <div className="bg-white p-8 md:p-10 rounded-xl shadow-xl border border-gray-100">
                <h2 className="text-2xl font-serif text-gray-900 mb-6">Send Us a Message</h2>
                
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 text-green-800 p-6 rounded-lg mb-6 flex items-start"
                  >
                    <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 text-green-600" />
                    <div>
                      <p className="font-medium text-lg">Thank you for your message!</p>
                      <p className="mt-1">We appreciate you contacting judi. One of our colleagues will get back to you shortly.</p>
                    </div>
                  </motion.div>
                ) : null}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="block w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all duration-300"
                        placeholder="John Doe"
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
                        className="block w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all duration-300"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
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
                      className="block w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all duration-300"
                      placeholder="How can we help you?"
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
                      className="block w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all duration-300"
                      placeholder="Tell us how we can assist you..."
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center px-8 py-4 border border-transparent rounded-lg shadow-md text-base font-medium text-white bg-gold-600 hover:bg-gold-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500 transition-all duration-300"
                    >
                      <Send size={18} className="mr-2" />
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Store Locations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="px-4 py-1 bg-gold-100 text-gold-600 rounded-full text-sm font-medium uppercase tracking-wider">Global Presence</span>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mt-4 mb-4">Visit Our Boutiques</h2>
            <p className="text-gray-600">
              Experience judi fragrances in person at one of our luxury boutiques and receive personalized assistance from our fragrance experts.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: "url('/src/img/r.jpg')" }}
                  ></div>
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute bottom-0 left-0 p-4 w-full">
                    <h3 className="text-xl font-medium text-white mb-1">New York</h3>
                    <div className="w-10 h-1 bg-gold-500"></div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">
                    123 Fifth Avenue<br />
                    New York, NY 10010<br />
                    United States
                  </p>
                  <div className="space-y-2 text-gray-600 text-sm">
                    <div className="flex items-center">
                      <Phone size={16} className="mr-2 text-gold-500" />
                      <span>+1 (212) 555-1234</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2 text-gold-500" />
                      <span>Monday-Saturday: 10am-7pm<br />Sunday: 11am-6pm</span>
                    </div>
                  </div>
                  <a 
                    href="https://maps.google.com/?q=123+Fifth+Avenue,New+York,NY" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-gold-600 hover:text-gold-700 transition-colors duration-300"
                  >
                    <MapPin size={16} className="mr-1" /> Get directions
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: "url('/src/img/p.jpg')" }}
                  ></div>
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute bottom-0 left-0 p-4 w-full">
                    <h3 className="text-xl font-medium text-white mb-1">Paris</h3>
                    <div className="w-10 h-1 bg-gold-500"></div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">
                    8 Rue de la Paix<br />
                    75002 Paris<br />
                    France
                  </p>
                  <div className="space-y-2 text-gray-600 text-sm">
                    <div className="flex items-center">
                      <Phone size={16} className="mr-2 text-gold-500" />
                      <span>+33 1 23 45 67 89</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2 text-gold-500" />
                      <span>Monday-Saturday: 10am-7pm<br />Sunday: Closed</span>
                    </div>
                  </div>
                  <a 
                    href="https://maps.google.com/?q=8+Rue+de+la+Paix,Paris" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-gold-600 hover:text-gold-700 transition-colors duration-300"
                  >
                    <MapPin size={16} className="mr-1" /> Get directions
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: "url('/src/img/s.jpg')" }}
                  ></div>
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute bottom-0 left-0 p-4 w-full">
                    <h3 className="text-xl font-medium text-white mb-1">London</h3>
                    <div className="w-10 h-1 bg-gold-500"></div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">
                    27 Bond Street<br />
                    London, W1S 2RW<br />
                    United Kingdom
                  </p>
                  <div className="space-y-2 text-gray-600 text-sm">
                    <div className="flex items-center">
                      <Phone size={16} className="mr-2 text-gold-500" />
                      <span>+44 20 1234 5678</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2 text-gold-500" />
                      <span>Monday-Saturday: 10am-6pm<br />Sunday: 12pm-5pm</span>
                    </div>
                  </div>
                  <a 
                    href="https://maps.google.com/?q=27+Bond+Street,London" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-gold-600 hover:text-gold-700 transition-colors duration-300"
                  >
                    <MapPin size={16} className="mr-1" /> Get directions
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343077!2d-73.99038908459496!3d40.74123794379789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a3f81d549f%3A0xb2a39bb5cacc7da0!2s123%205th%20Ave%2C%20New%20York%2C%20NY%2010003%2C%20USA!5e0!3m2!1sen!2s!4v1627309922124!5m2!1sen!2s" 
                width="100%" 
                height="500" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="judi Flagship Store Location"
                className="w-full"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="px-4 py-1 bg-gold-100 text-gold-600 rounded-full text-sm font-medium uppercase tracking-wider">Support</span>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mt-4 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Find answers to common questions about our luxury fragrances and services.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <h3 className="text-xl font-medium text-gray-900 mb-3">What is your return policy?</h3>
                <p className="text-gray-600">
                  We offer a 30-day return policy for unopened products in their original packaging. If you're not completely satisfied with your purchase, please contact our customer service team to initiate a return.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <h3 className="text-xl font-medium text-gray-900 mb-3">Do you offer samples?</h3>
                <p className="text-gray-600">
                  Yes, we offer sample sets of our fragrances so you can try before you buy. Our Discovery Set includes 2ml vials of all our current fragrances and is available for purchase online.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <h3 className="text-xl font-medium text-gray-900 mb-3">How long does shipping take?</h3>
                <p className="text-gray-600">
                  Standard shipping within the United States typically takes 3-5 business days. International shipping times vary by location but generally range from 7-14 business days. Expedited shipping options are available at checkout.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <h3 className="text-xl font-medium text-gray-900 mb-3">Are your products tested on animals?</h3>
                <p className="text-gray-600">
                  No, judi is committed to cruelty-free practices. We do not test our products on animals, nor do we work with suppliers who conduct animal testing.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <h3 className="text-xl font-medium text-gray-900 mb-3">Do you ship internationally?</h3>
                <p className="text-gray-600">
                  Yes, we ship to most countries worldwide. International customers may be subject to import duties and taxes, which are the responsibility of the recipient.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Experience the Art of Fragrance</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Discover our collection of luxury perfumes crafted with the finest ingredients from around the world.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/products" className="px-8 py-4 bg-gold-500 text-white rounded-lg hover:bg-gold-600 transition-colors duration-300 text-center">
                Shop Collection
              </Link>
              <Link to="/quiz" className="px-8 py-4 bg-transparent border border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-300 text-center">
                Find Your Scent
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;