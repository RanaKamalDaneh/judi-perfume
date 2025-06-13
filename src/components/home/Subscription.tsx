import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const subscriptionPlans = [
  {
    name: 'Monthly',
    price: 29.99,
    features: [
      'One full-size perfume per month',
      'Free shipping on all orders',
      'Early access to new releases',
      'Exclusive member discounts',
      'Cancel anytime'
    ],
    popular: false
  },
  {
    name: 'Quarterly',
    price: 79.99,
    perMonth: 26.66,
    features: [
      'One full-size perfume every 3 months',
      'Free shipping on all orders',
      'Early access to new releases',
      'Exclusive member discounts',
      '15% off all additional purchases',
      'Luxury gift with every box'
    ],
    popular: true
  },
  {
    name: 'Annual',
    price: 299.99,
    perMonth: 25.00,
    features: [
      'Four full-size perfumes per year',
      'Free shipping on all orders',
      'Early access to new releases',
      'Exclusive member discounts',
      '20% off all additional purchases',
      'Luxury gift with every box',
      'One free mini sample set'
    ],
    popular: false
  }
];

const Subscription: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-serif text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Scent Subscription
          </motion.h2>
          <motion.p 
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join our exclusive fragrance subscription and discover new signature scents delivered to your door.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {subscriptionPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`rounded-lg overflow-hidden shadow-lg border ${plan.popular ? 'border-gold-500 relative' : 'border-gray-200'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              {plan.popular && (
                <div className="bg-gold-500 text-white text-xs font-bold uppercase tracking-wider py-1 text-center">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">${plan.price}</span>
                  {plan.perMonth && (
                    <span className="text-gray-600 text-sm ml-2">(${plan.perMonth.toFixed(2)}/month)</span>
                  )}
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check size={18} className="text-gold-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  className={`w-full py-2 rounded-md font-medium transition-colors ${plan.popular 
                    ? 'bg-gold-600 text-white hover:bg-gold-700' 
                    : 'bg-gray-900 text-white hover:bg-gray-800'}`}
                >
                  Subscribe Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-10 text-gray-600 text-sm max-w-2xl mx-auto">
          <p>All subscriptions automatically renew. You can cancel or modify your subscription at any time from your account. By subscribing, you agree to our Terms of Service.</p>
        </div>
      </div>
    </section>
  );
};

export default Subscription;