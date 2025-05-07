/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#020817",
        secondary: "#1e293b",
        accent: "#3b82f6",
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: 'rgba(255, 255, 255, 0.9)',
            lineHeight: '1.8',
            fontSize: '1.125rem',
            a: {
              color: '#60a5fa',
              '&:hover': {
                color: '#93c5fd',
              },
            },
            h1: {
              color: '#fff',
              fontWeight: 700,
              fontSize: '2.25rem',
              lineHeight: 1.2,
              letterSpacing: '-0.025em',
            },
            h2: {
              color: '#93c5fd',
              fontWeight: 700,
              fontSize: '1.875rem',
              lineHeight: 1.3,
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            h3: {
              color: '#93c5fd',
              fontWeight: 700,
              fontSize: '1.5rem',
              lineHeight: 1.4,
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
            },
            strong: {
              color: '#93c5fd',
              fontWeight: 600,
            },
            code: {
              backgroundColor: 'rgba(96, 165, 250, 0.1)',
              color: '#93c5fd',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: 500,
            },
            pre: {
              backgroundColor: 'rgba(2, 8, 23, 0.8)',
              border: '1px solid rgba(96, 165, 250, 0.2)',
              borderRadius: '0.375rem',
              padding: '1rem',
              overflow: 'auto',
            },
            ul: {
              marginTop: '1rem',
              marginBottom: '1rem',
            },
            ol: {
              marginTop: '1rem',
              marginBottom: '1rem',
            },
            li: {
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
            },
            p: {
              marginTop: '1rem',
              marginBottom: '1rem',
            },
            img: {
              borderRadius: '0.5rem',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}; 