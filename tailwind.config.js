/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "azul-oscuro": "#002EFC",
        "azul-claro": "#2E54FB"
      },
      spacing:{
        "42": "170px"
      },
      screens: {
        "tablet": "900px",
      }
    },
    
  },
  plugins: [],
}