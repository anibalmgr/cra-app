module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      neutral: {
        0: "#FFFFFF",
        100: "#F3F2F2",
        200: "#CCCCCC",
        300: "#808080",
        500: "#5C5C5C",
        800: "#393841",
        900: "#0C0506",
      },
      green: {
        500: "#267992",
        600: "#20677C",
      },
      orange: {
        200: "#FFD099",
        400: "#FFA133",
        600: "#FF8A00",
        800: "#8A510F",
      },
      red: {
        200 : "#F9D2DC",
        400: "#EA6686",
      },
      success: "#23B05C",
    },
    extend: {
      backgroundImage: {
        search: "url(assets/icons/search.svg)",
        arrow: "url(assets/icons/arrowDown.svg)",
      },
      keyframes: {
        enter: {
          "0%": { transform: "translate(300px)" },
          "100%": { transform: "none" },
        },
      },
      animation: {
        enter: "enter 1.5s 1",
      },
    },
  },
  plugins: [],
};
