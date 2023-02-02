/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          400: "rgb(0, 101, 163)",
        },
        accent: {
          400: "rgb(115, 168, 0)",
        },
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
      serif: ["'Playfair Display'", "serif"],
    },
  },
  plugins: [],
};
