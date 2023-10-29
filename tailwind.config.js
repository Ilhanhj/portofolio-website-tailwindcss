/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        dark: "#0d0d0d",
      },
      screens: {
        xl: "1080px",
      },
      fontFamily: {
        poppins: "poppins",
        montserrat: "montserrat",
      },
    },
  },
  plugins: [],
};
