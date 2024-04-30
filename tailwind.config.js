/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ['"Acme"', "sans-serif"],
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

