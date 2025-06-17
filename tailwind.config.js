/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-sora)'],
      },
      colors: {
        'brand-night': '#030014',
        'brand-blue': {
          DEFAULT: '#0052FF',
          light: '#4080FF',
        },
        'brand-purple': '#7A3AFF',
        'brand-steel': {
          300: '#A9B2CC',
          400: '#8A94AD',
          600: '#343B4D',
          800: '#191D29',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'new-fade-in-up': 'new-fade-in-up 0.8s ease-in-out forwards',
      },
      keyframes: {
        'new-fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
} 