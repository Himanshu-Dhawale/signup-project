/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray : "rgb(233, 236, 239)",
        customGreen : "#00c251"
      }
    },
  },
  plugins: [],
} 