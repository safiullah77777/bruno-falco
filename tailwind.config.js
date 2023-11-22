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
          "linear-gradient(270deg, #00FFC4 19.55%, #56D7FE 56.22%)",
        "sticker-gradient1":
          "linear-gradient(270deg, transparent 10%, #00FFC4 19.55%, #56D7FE 86.22%, transparent 93%)",
        gradient2: "linear-gradient(135deg, #00FFC4 0%, #56D7FE 100%)",
        "gradient-black":
          "linear-gradient(180deg, rgba(9, 8, 21, 0.00) 0%, #090815 100%)",
        gradient1:
          "linear-gradient(90deg, rgba(1, 10, 12, 0.00) 0%, #011E24 46.88%, rgba(1, 10, 11, 0.00) 100%)",
      },
      fontFamily: {
        satoshi: ["satoshi"],
        titillium: ["titillium"],
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
        1280: { max: "1280px" },
        1023: { max: "1023px" },
        768: { max: "768px" },
        450: { max: "450px" },
      },
    },
  },
  plugins: [],
};
