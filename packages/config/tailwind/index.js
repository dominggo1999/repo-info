const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: "#1A1926",
        "background-light": "#f2f2ff",
        background: {
          DEFAULT: "#192132",
          50: "#38496F",
          100: "#344568",
          200: "#2D3C5B",
          300: "#26334d",
          400: "#202c41",
          500: "#192132",
          600: "#141A28",
          700: "#0F141E",
          800: "#0A0D13",
          900: "#050609",
        },
        primary: {
          DEFAULT: "#5F5AF6",
          50: "#FFFFFF",
          100: "#F5F5FE",
          200: "#D0CEFC",
          300: "#AAA7FA",
          400: "#8581F8",
          500: "#5F5AF6",
          600: "#2B25F3",
          700: "#120CD4",
          800: "#0D099F",
          900: "#09066A",
        },
        secondary: {
          DEFAULT: "#F000B9",
          50: "#FFA9EB",
          100: "#FF94E7",
          200: "#FF6BDD",
          300: "#FF43D4",
          400: "#FF1ACA",
          500: "#F000B9",
          600: "#B8008E",
          700: "#800063",
          800: "#480037",
          900: "#10000C",
        },
        danger: {
          DEFAULT: "#FF246D",
          50: "#FFDCE7",
          100: "#FFC7DA",
          200: "#FF9EBF",
          300: "#FF76A3",
          400: "#FF4D88",
          500: "#FF246D",
          600: "#EB004E",
          700: "#B3003C",
          800: "#7B0029",
          900: "#430016",
        },
      },
      fontFamily: {
        primary: ["var(--font-primary)", ...fontFamily.sans],
      },
      borderWidth: {
        default: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
        6: "6px",
        7: "7px",
        8: "8px",
      },
      keyframes: {
        "rotate-360": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "rotate-360": "rotate-360 1s linear infinite",
      },
      zIndex: {
        max: 2147483647,
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
