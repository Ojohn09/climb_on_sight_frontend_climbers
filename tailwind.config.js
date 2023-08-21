/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      animation: {
        "bounceShort": "bounce 1s ease-in-out 3.5"
      }
    },
    fontFamily: {
      "Doris": ["Dosis", "sans-serif"],
      "OpenSan": ["Open Sans", 'sans-serif']
    }
  },
  plugins: [],
}

