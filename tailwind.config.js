module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#0D0C0C",
      contrast: "#20677C",
      "contrast-hover": "#267992",
      neutral: "#F3F2F2",
      success: "#23B05C",
      main: "#00AEC7",
      "main-light": "#B3F5FF",
      content: "#6B6B6B",
      "content-light": "#CCCCCC",
      "content-hover": "#808080",
      contrast2: "#EA6686",
      "contrast2-light": "#F9D2DC",
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
