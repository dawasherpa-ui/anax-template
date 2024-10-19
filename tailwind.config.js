/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#23C1C1',
        secondary: '#E1F2F2'
      }
    },
  },
  plugins: [],
}