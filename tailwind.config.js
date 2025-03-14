/** @type {import('tailwindcss').Config} */

const { colors: defaultColors } = require("tailwindcss/defaultTheme");

const colors = {
  ...defaultColors,
  ...{
    gray: {
      50: "#F6F6F6",
      100: "#ECECEC",
      200: "#DCDCDC",
      400: "#D1D1D1",
      500: "#ABABAB",
      700: "#676767",
      800: "#3E3E3E",
    },
    red: {
      500: "rgb(var(--base-red) / <alpha-value>)",
      // 720000
    },
    green: {
      500: "#2FAC66",
    },
    orange: {
      500: "#F9B233",
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
      spacing: {
        11.5: "46px",
        8.5: "33px",
      },
      fontSize: {
        xxs: "0.625rem",
      },
      screens: {
        "2xl": "1400px",
        "full-hd": "1920px",
      },
      borderRadius: {
        "4xl": "30px",
        "2.5xl": "20px",
      },
      boxShadow: {
        tbody: `inset 0 0 0 1px ${colors.gray[100]}`,
        "tbody-offset": ` 0 0 0 1px ${colors.gray[100]}`,
        "tbody-dark": `inset 0 0 0 1px #707070`,
        "tbody-dark-offset": ` 0 0 0 1px #707070`,
      },
      colors: {
        ...colors,
      },
    },
  },
  plugins: [],
};
