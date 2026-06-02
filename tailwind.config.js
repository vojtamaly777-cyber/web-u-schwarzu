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
          light: '#5D4037',
          DEFAULT: '#3D2B1F',
          dark: '#2A1B13',
        },
        brick: {
          light: '#A64D4D',
          DEFAULT: '#841B11',
          dark: '#5D120A',
        },
        cream: {
          light: '#FFFFFF',
          DEFAULT: '#FAF9F6',
          dark: '#F5F5DC',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
