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
        brand: {
          bg: "#F7F2EA",          
          soft: "#EFE6D8",        
          dark: "#3A2E26",        
          muted: "#8C7A6B",       
          accent: "#A8896F",      
          deep: "#7A4A3A",        
          ruby: "#C74A6B",        
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      cursor: {
        none: 'none', 
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.76, 0, 0.24, 1)', 
      }
    },
  },
  plugins: [],
};