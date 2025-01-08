/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: [
    "./**/*.html",
    "!./node_modules/**/*.{html,js}",
    "./src/assets/js/*",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1400px",
      },
      borderRadius: {
        "4xl": "30px",
      },
      colors: {
        gray: {
          50: "#ECECEC",
          100: "#F6F6F6CC",
          200: "#DCDCDC",
          400: "#D1D1D1",
          700: "#B0B0B0",
          600: "#3E3E3E",
          700: "#676767",
        },
        red: {
          500: "#DC2626",
        },
        green: {
          500: "#2FAC66",
        },
        orange: {
          600: "#F9B233",
          500: "#F9B23359",
        },
      },
    },
  },
  plugins: [],
};
