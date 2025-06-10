import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CheckCircle } from 'lucide-react';

const CheckoutPage: React.FC = () => {
  const { items, subtotal, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);
  const navigate = useNavigate();
  
  // Form states
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('United States');
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Calculate shipping cost (free over $100)
  const shipping = subtotal > 100 ? 0 : 8;
  
  // Calculate tax (simplified as 8% of subtotal)
  const tax = subtotal * 0.08;
  
  // Calculate total
  const total = subtotal + shipping + tax;
  
  useEffect(() => {
    document.title = 'Checkout | judi';
    
    // Scroll to top when step changes
    window.scrollTo(0, 0);
  }, [step]);
  
  const handleSubmitShipping = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsProcessing(true);
      
      // Generate a random order ID for demo purposes
      const randomOrderId = Math.random().toString(36).substring(2, 10);
      setOrderId(randomOrderId);
      
      // Simulate processing delay
      setTimeout(() => {
        setStep(2);
        setIsProcessing(false);
      }, 1000);
    } catch (error) {
      console.error('Error creating order:', error);
      setIsProcessing(false);
    }
  };
  
  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      // Clear cart and show success page
      clearCart();
      setOrderComplete(true);
      setIsProcessing(false);
    }, 2000);
  };
  
  if (orderComplete) {
    return (
      <div className="container mx-auto px-4 pt-32 pb-20 text-center">
        <div className="max-w-md mx-auto">
          <div className="flex justify-center mb-6">
            <CheckCircle size={48} className="text-green-500" />
          </div>
          <h1 className="text-2xl font-medium mb-4">Thank you for your order!</h1>
          <p className="text-gray-600 mb-8">
            Your order has been placed and will be processed soon. 
            We've sent a confirmation email to {email}.
          </p>
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="font-medium text-gray-900 mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Order number:</span>
              <span className="text-gray-900">#{orderId?.substring(0, 8) || Math.floor(100000 + Math.random() * 900000)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total amount:</span>
              <span className="text-gray-900">${total.toFixed(2)}</span>
            </div>
          </div>
          <Link to="/" className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 pt-32 pb-20">
      {/* Checkout Steps */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="flex justify-between">
          <div className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step >= 1 ? 'bg-gold-600 text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              1
            </div>
            <span className={`text-sm mt-2 ${
              step >= 1 ? 'text-gray-900' : 'text-gray-500'
            }`}>Information</span>
          </div>
          <div className="flex-1 pt-4 hidden sm:block">
            <div className={`h-0.5 ${step >= 2 ? 'bg-gold-600' : 'bg-gray-200'}`}></div>
          </div>
          <div className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step >= 2 ? 'bg-gold-600 text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              2
            </div>
            <span className={`text-sm mt-2 ${
              step >= 2 ? 'text-gray-900' : 'text-gray-500'
            }`}>Payment</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          {step === 1 && (
            <div>
              <h2 className="text-xl font-medium mb-6">Contact & Shipping Information</h2>
              
              <form onSubmit={handleSubmitShipping}>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
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
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-gold-500 focus:border-gold-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-gold-500 focus:border-gold-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-gold-500 focus:border-gold-500"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-gold-500 focus:border-gold-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                        State / Province
                      </label>
                      <input
                        type="text"
                        id="state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-gold-500 focus:border-gold-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
                        ZIP / Postal Code
                      </label>
                      <input
                        type="text"
                        id="zip"
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-gold-500 focus:border-gold-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                      Country
                    </label>
                    <select
                      id="country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-gold-500 focus:border-gold-500"
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Australia">Australia</option>
                      <option value="France">France</option>
                      <option value="Germany">Germany</option>
                    </select>
                  </div>
                  
                  <div className="flex justify-between pt-6">
                    <Link to="/cart" className="text-gold-600 hover:text-gold-700">
                      Return to cart
                    </Link>
                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="bg-gray-900 text-white px-6 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors disabled:opacity-70"
                    >
                      {isProcessing ? 'Processing...' : 'Continue to Payment'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
          
          {step === 2 && (
            <div>
              <h2 className="text-xl font-medium mb-6">Payment</h2>
              
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <form onSubmit={handlePaymentSubmit}>
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                          Card Number
                        </label>
                        <input
                          type="text"
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-gold-500 focus:border-gold-500"
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            id="expiry"
                            placeholder="MM/YY"
                            className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-gold-500 focus:border-gold-500"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">
                            CVC
                          </label>
                          <input
                            type="text"
                            id="cvc"
                            placeholder="123"
                            className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-gold-500 focus:border-gold-500"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="flex justify-between pt-6">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="text-gold-600 hover:text-gold-700"
                        >
                          Return to information
                        </button>
                        <button
                          type="submit"
                          disabled={isProcessing}
                          className="bg-gray-900 text-white px-6 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors disabled:opacity-70"
                        >
                          {isProcessing ? 'Processing...' : 'Complete Order'}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Order Summary</h2>
            
            <div className="divide-y divide-gray-200">
              {items.map((item) => (
                <div key={`${item.product.id}-${item.product.selectedSize}`} className="py-4 flex">
                  <div className="relative w-16 h-16 bg-gray-100 rounded-md overflow-hidden mr-4 flex-shrink-0">
                    <img 
                      src={item.product.images[0]} 
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-0 right-0 bg-gray-900 text-white w-5 h-5 flex items-center justify-center text-xs rounded-full">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{item.product.name}</p>
                    <p className="text-sm text-gray-600">Size: {item.product.selectedSize}</p>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <p className="text-sm font-medium text-gray-900">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t border-gray-200 pt-4 mt-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-gray-900">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="text-gray-900">
                  {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="text-gray-900">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-gray-200 font-medium">
                <span className="text-gray-900">Total</span>
                <span className="text-gray-900">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;