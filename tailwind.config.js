/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2',
        secondary: '#F5F5F5',
      },
    },
  },
  plugins: [],
}