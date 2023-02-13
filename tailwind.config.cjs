/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          200: "rgb(86, 170, 221)",
          300: "rgb(48, 139, 194)",
          400: "rgb(0, 101, 163)",
        },
        accent: {
          400: "rgb(115, 168, 0)",
        },
        neutral: {
          700: "rgb(64, 64, 64)",
          800: "rgb(19, 20, 21)",
          900: "rgb(2, 16, 23)",
        },
      },
      container: {
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1350px",
        },
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["jubilat", "serif"],
      },
    },
    plugins: [],
  },
};
