/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#10171f",
        caption: "#525252",
        cardBg: "#f5f5f7",
        cardBtn: "#e3e3e6",
        blue: "#5776ff",
        danger: "#e80c46",
        warning: "#F7CD1B",
        success: "#07B682",
      },
      fontFamily: {
        title: ['"Instrumental Sans"', "sans-serif"],
        body: ['"Inter Tight"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
