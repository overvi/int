/** @type {import('tailwindcss').Config} */
module.exports = {
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
          100: "#F6F6F6CC",
          700: "#B0B0B0",
          600: "#3E3E3E",
        },
        green: {
          500: "#2FAC66",
        },
        orange: {
          500: "#F9B23359",
        },
      },
    },
  },
  plugins: [],
};
