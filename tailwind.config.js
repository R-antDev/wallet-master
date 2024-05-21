/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
      },
      colors: {
        customGreen: {
          dark: "#004438",
          medium: "#0B9F40",
          DEFAULT: "#00C246",
          light: "#00DA49",
        },
        customBlue: {
          dark: "#0A429C",
          DEFAULT: "#0061FF",
          light: "#00C1FA",
        },
        customOrange: {
          dark: "#D0570A",
          DEFAULT: "#FF6F14",
          light: "#FFC700",
        },
        customPurple: {
          dark: "#12016F",
          DEFAULT: "#4900C8",
          light: "#7E18FF",
        },
        bgDark: "#171B18",
        bgLight: "#F9F9F9",
        bgMedium: "#E4E6E6",
      },
    },
  },
  plugins: [],
};

