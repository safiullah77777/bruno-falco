/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "sticker-gradient":
          "linear-gradient(270deg, #00FFC4 9.55%, #56D7FE 56.22%)",
        gradient2: "linear-gradient(135deg, #00FFC4 0%, #56D7FE 100%)",
        "gradient-black":
          "linear-gradient(180deg, rgba(9, 8, 21, 0.00) 0%, #090815 100%)",
      },
      fontFamily: {
        satoshi: ["satoshi"],
      },
      colors: {
        purple: {
          primary: "#3C366B",
          secondary: "#272E44",
        },
        blue: {
          primary: "#0A122A",
        },
        sky: {
          primary: "#56D7FE",
        },
      },
      fontWeight: {
        500: 500,
        600: 600,
        700: 700,
        900: 800,
        900: 900,
      },
      lineHeight: {
        121.5: "121.5%",
      },
      screens: {
        1440: { max: "1440px" },
      },
    },
  },
  plugins: [],
};
