/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        pokemon: ["Pokemon", "sans-serif"],
      },
      backgroundImage: {
        'poke-bg': "url('./assets/images/background.jpg')",
        'card-bg-left': "url('./assets/images/card-bg.jpg')",
        'card-bg-right': "url('./assets/images/card-bg2.jpg')",
        'fight-btn': "url('./assets/images/fight-btn.png')",
         }
    },
  },
  plugins: [],
};
