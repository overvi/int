/** @type {import('tailwindcss').Config} */

const { colors: defaultColors } = require("tailwindcss/defaultTheme");

const colors = {
  ...defaultColors,
  ...{
    gray: {
      50: "#ECECEC",
      100: "#F6F6F6CC",
      200: "#DCDCDC",
      400: "#D1D1D1",
      700: "#B0B0B0",
      600: "#3E3E3E",
      700: "#676767",

      // 50: "#F6F6F6",
      // 100: "#ECECEC",
      // 200: "#DCDCDC",
      // 400: "#D1D1D1",
      // 600: "#B0B0B0",
      // 700: "#676767",
      // 800: "#3E3E3E",
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
};

module.exports = {
  darkMode: "selector",
  content: [
    "./src/**/*.html",
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
      boxShadow: {
        tbody: `inset 0 0 0 1px ${colors.gray[50]}`,
      },
      colors: {
        ...colors,
      },
    },
  },
  plugins: [],
};
