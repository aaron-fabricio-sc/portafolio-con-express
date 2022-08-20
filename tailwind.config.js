/** @type {import('tailwindcss').Config} */

const path = require("path");

module.exports = {
  content: ["./src/**/*.{html,ejs,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#0b072a",
      },
    },
  },

  plugins: [],
};
