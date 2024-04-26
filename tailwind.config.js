/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ['"Merienda"', "cursive"],
    },
    extend: {
      colors: {
        dark: "#131313",
        light: "#131313B2",
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}

