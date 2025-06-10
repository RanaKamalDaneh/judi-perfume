import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { Product } from '../types/Product';
import { ArrowRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    value: string;
  }[];
}

const ScentQuizPage: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [results, setResults] = useState<Product[]>([]);
  const [quizComplete, setQuizComplete] = useState(false);
  
  useEffect(() => {
    document.title = 'Find Your Scent | judi';
  }, []);
  
  const questions: Question[] = [
    {
      id: 1,
      text: "When do you typically wear perfume?",
      options: [
        { text: "Everyday", value: "everyday" },
        { text: "Special occasions", value: "special" },
        { text: "Work/Professional settings", value: "work" },
        { text: "Evening/Night out", value: "evening" }
      ]
    },
    {
      id: 2,
      text: "Which of these environments do you feel most drawn to?",
      options: [
        { text: "Blooming garden", value: "floral" },
        { text: "Cozy fireside", value: "woody" },
        { text: "Ocean breeze", value: "fresh" },
        { text: "Exotic spice market", value: "oriental" }
      ]
    },
    {
      id: 3,
      text: "How would you describe your personal style?",
      options: [
        { text: "Classic and timeless", value: "classic" },
        { text: "Bold and distinctive", value: "bold" },
        { text: "Fresh and minimalist", value: "minimalist" },
        { text: "Elegant and sophisticated", value: "elegant" }
      ]
    },
    {
      id: 4,
      text: "Which season do you enjoy the most?",
      options: [
        { text: "Spring", value: "spring" },
        { text: "Summer", value: "summer" },
        { text: "Fall", value: "fall" },
        { text: "Winter", value: "winter" }
      ]
    },
    {
      id: 5,
      text: "What fragrance intensity do you prefer?",
      options: [
        { text: "Light and subtle", value: "light" },
        { text: "Moderate", value: "moderate" },
        { text: "Strong and noticeable", value: "strong" },
        { text: "Varies depending on occasion", value: "varies" }
      ]
    }
  ];
  
  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate results
      calculateResults(newAnswers);
    }
  };
  
  const calculateResults = (finalAnswers: string[]) => {
    // Simple recommendation algorithm (in a real app this would be more sophisticated)
    let matchedProducts: Product[] = [];
    
    // Question 2 gives the most direct scent family match
    const scentPreference = finalAnswers[1];
    
    if (scentPreference === 'floral') {
      matchedProducts = products.filter(p => p.category.includes('Floral'));
    } else if (scentPreference === 'woody') {
      matchedProducts = products.filter(p => p.category.includes('Woody'));
    } else if (scentPreference === 'fresh') {
      matchedProducts = products.filter(p => p.category.includes('Fresh') || p.category.includes('Citrus'));
    } else if (scentPreference === 'oriental') {
      matchedProducts = products.filter(p => p.category.includes('Oriental'));
    }
    
    // If we don't have enough matches, add some based on other criteria
    if (matchedProducts.length < 3) {
      const seasonPreference = finalAnswers[3];
      
      if (seasonPreference === 'summer' || seasonPreference === 'spring') {
        const freshProducts = products.filter(p => 
          p.category.includes('Fresh') || p.category.includes('Citrus') || p.category.includes('Floral')
        );
        matchedProducts = [...new Set([...matchedProducts, ...freshProducts])];
      } else {
        const warmProducts = products.filter(p => 
          p.category.includes('Woody') || p.category.includes('Oriental')
        );
        matchedProducts = [...new Set([...matchedProducts, ...warmProducts])];
      }
    }
    
    // Limit to 3 products
    setResults(matchedProducts.slice(0, 3));
    setQuizComplete(true);
  };
  
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResults([]);
    setQuizComplete(false);
  };
  
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <div className="bg-gray-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">Find Your Perfect Scent</h1>
          <p className="max-w-2xl mx-auto text-gray-300">
            Take our quick quiz to discover the judi fragrances that match your preferences and personality.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        {!quizComplete ? (
          <div className="bg-white rounded-lg shadow-md p-8">
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
              <div 
                className="bg-gold-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
              ></div>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-medium text-gray-900 mb-6">
                  {questions[currentQuestion].text}
                </h2>
                
                <div className="space-y-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(option.value)}
                      className="w-full text-left p-4 border border-gray-300 rounded-lg hover:border-gold-600 hover:bg-gold-50 transition-colors flex justify-between items-center"
                    >
                      <span>{option.text}</span>
                      <ArrowRight size={18} className="text-gold-600" />
                    </button>
                  ))}
                </div>
                
                <div className="text-center mt-8 text-sm text-gray-500">
                  Question {currentQuestion + 1} of {questions.length}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-100 rounded-full mb-4">
                <Check size={32} className="text-gold-600" />
              </div>
              <h2 className="text-2xl font-serif text-gray-900 mb-2">Your Scent Profile</h2>
              <p className="text-gray-600">
                Based on your preferences, we recommend these fragrances for you:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {results.map((product) => (
                <Link 
                  key={product.id} 
                  to={`/products/${product.id}`}
                  className="block group"
                >
                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <img 
                      src={product.images[0]} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-medium text-gray-900 group-hover:text-gold-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {product.description}
                  </p>
                  <p className="font-medium text-gray-900 mt-2">
                    ${product.price.toFixed(2)}
                  </p>
                </Link>
              ))}
            </div>
            
            <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <button
                onClick={restartQuiz}
                className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Retake Quiz
              </button>
              <Link
                to="/products"
                className="px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
              >
                Browse All Perfumes
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScentQuizPage;