/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wood: {
          light: '#4A2B1E',
          DEFAULT: '#2C1810',
          dark: '#1A0D08',
        },
        brick: {
          light: '#D32F2F',
          DEFAULT: '#B22222',
          dark: '#7B1414',
        },
        cream: {
          light: '#FFFFFF',
          DEFAULT: '#FDFCF0',
          dark: '#F5F2D0',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'ken-burns': 'ken-burns 20s ease-in-out infinite alternate',
      },
      keyframes: {
        'ken-burns': {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.2) translate(-2%, -2%)' },
        }
      }
    },
  },
  plugins: [],
}
