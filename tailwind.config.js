/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFC001",
        secondary: "#FF9C01"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem"
        }
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite'
      }
    }
  },
  plugins: [],
}
