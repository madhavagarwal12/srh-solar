/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#07150E',
          900: '#0E261D', // Primary Dark from Dribbble
          850: '#143327',
          800: '#1A4232',
          700: '#255B46',
        },
        lime: {
          300: '#C6F68D',
          400: '#A7F46A', // Vibrant Neon Accent
          500: '#8FE64B',
          600: '#6CBD2B',
        },
        cream: {
          50: '#FAF9F5',
          100: '#F6F5EE', // Warm Cream Canvas
          200: '#EDEBE2',
          300: '#DFDCD1',
        },
        earth: {
          text: '#17241C',
          muted: '#5F6B63',
          border: '#DDD8CB'
        }
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
        hand: ['var(--font-caveat)', 'cursive'],
      },
      animation: {
        'spin-slow': 'spin 22s linear infinite',
      }
    },
  },
  plugins: [],
};
