/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./component/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "10": "#FFF5F6",
          "20": "#FF385C",
          "30": "#FFBDC9",
          "40": "#FF859B",
          "50": "#FF5C79",
          "60": "#FF385C",
          "70": "#D42F4D",
          "80": "#801C2E",
          "90": "#67101F",
          "100": "#4E0916"
        },
        neutral: {
          "10": "#FFFFFF",
          "20": "#F7F7F7",
          "30": "#E4E9EC",
          "40": "#D8DCE0",
          "50": "#BABEC1",
          "60": "#989B9D",
          "70": "#717375",
          "80": "#5D5F61",
          "90": "#3D3F40",
          "100": "#0A0A0A"
        },
      }
    },
  },
  plugins: [],
}

