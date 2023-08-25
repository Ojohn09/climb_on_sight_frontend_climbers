/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      animation: {
        bounceShort: "bounce 750ms ease-in 2.5",
        pingShort: "ping 1s ease-in 1",
        spinSlow: "spin 5s linear infinite",
      },
    },
    fontFamily: {
      "Doris": ["Dosis", "sans-serif"],
      "OpenSan": ["Open Sans", 'sans-serif']
    }
  },
  plugins: [],
}

