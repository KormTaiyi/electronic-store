/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        brandColor: '#0673F0',
        brandBackground: '#F7FBFC',

        // shop now, add to card , out of stock , 
        // heading should use grid for responsive
        // 
      }
    },
  },
  plugins: [],
}

