/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation:{
        "appearFromUp" : "appearFromUp 1s linear",
        "appearFromLeft" : "appearFromLeft 1s linear",
        "appearFromRight" : "appearFromRight 1s linear"

      },
      keyframes:{
        appearFromUp: {
          "0%":{"transform" : "translatey(-1rem)","opacity" : "0%"},
          "100%":{"transform" : "translatey(0rem)", "opacity" : "100%"}
        },
        appearFromLeft : {
          "0%":{"transform" : "translatex(-3rem)","opacity" : "0%"},
          "100%":{"transform" : "translatex(0rem)", "opacity" : "100%"}
        },
        appearFromRight : {
          "0%":{"transform" : "translatex(3rem)","opacity" : "0%"},
          "100%":{"transform" : "translatex(0rem)", "opacity" : "100%"}
        }
      }
    },
  },
  plugins: [],
}
