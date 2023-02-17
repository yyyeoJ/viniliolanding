/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens:{
        "ps" : {"min":"10px"},
        "p" : {"min":"281px"},
        "tp" : {"min":"480px"},
        "tl" : {"min":"1024px"},
        "ds" : {"min":"1280px"},
        "dl" : {"min":"1920px"}
      },
      animation:{
        "hero2" : "hero2 0.3s linear",
        "hero1" : "hero1 0.3s linear",
        "appearFromUp" : "appearFromUp 1s linear",
        "appearFromDown" : "appearFromDown 0.5s linear",
        "appearFromLeft" : "appearFromLeft 1s linear",
        "appearFromRight" : "appearFromRight 1s linear"

      },
      keyframes:{
        hero1:{
          "0%": {"transform" : "translatex(-100vw)"},
          "100%": {"transform" : "translatex(0vw)"},
        },
        hero2:{
          "0%": {"transform" : "translatex(100vw)"},
          "100%": {"transform" : "translatex(0vw)"},
        },
        appearFromUp: {
          "0%":{"transform" : "translatey(-1rem)","opacity" : "0%"},
          "100%":{"transform" : "translatey(0rem)", "opacity" : "100%"}
        },
        appearFromDown: {
          "0%":{"transform" : "translatey(2rem)","opacity" : "0%"},
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
