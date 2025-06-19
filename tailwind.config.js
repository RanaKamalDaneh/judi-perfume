/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        gold: {
          50: '#FBFAF5',
          100: '#F7F5EB',
          200: '#F0ECDB',
          300: '#E9E2CA',
          400: '#E1D9BA',
          500: '#D4AF37', // Primary gold
          600: '#BF9D32',
          700: '#AA8B2D',
          800: '#957828',
          900: '#7F6623',
        },
        rose: {
          50: '#F8E8E9',
        },
      },
      animation: {
        'text': 'text 5s ease infinite',
      },
      keyframes: {
        'text': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [],
};