/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:'class',
  theme: {
    colors: {
      "Brown": {
        900:"#634832",
        600:"#967259",
        300:"#DBC1AC",
        100:"#ECE0D1",
      },
      "white-10":"rgba(255, 255, 255, 0.10)"
      ,
      "orange-lights":"rgba(254, 215, 170, 0.20)"
      ,
      "menu":"rgba(0, 0, 0, 0.50)",
      "lightnes":"rgba(0, 0, 0, 0.40)"
    },
    backgroundColor:{
      "darken":"#27272A",
      "btn":"linear-gradient(270deg, #FDBA74 0%, #FED7AA 100%);"
    },
    boxShadow: {
      "Light":"0px 1px 10px 0px rgba(0, 0, 0, 0.05)"
    },
    borderColor: {
      "4xl":"2rem"
    },
    boxShadow:{
      "menu":"0px 1px 10px 0px rgba(0, 0, 0, 0.05)"
    },
    boxShadow:{
      "lights":"0px 0px 10px 0px rgba(0, 0, 0, 0.04)"
    },
    dropShadow:{
      "lights":"0px 0px 10px 0px rgba(0, 0, 0, 0.04)"
    },
    letterSpacing: {
      "tracking-tighter":"0.065em"
    },
    borderColor:{
      darkBorder:"rgba(255, 255, 255, 0.10)"
    },
    fontFamily: {
      dana: "Dana",
      danaBold: "Dana DemiBold",
      danamedium: "Dana Medium",
      morabba: "Morabba",
      morabbabold: "Morabba Bold",
      morabbamedium: "Morabba Medium",
    },
    extend: {
      backgroundImage:{
        "desctop-image":"url(../src/image/headerBgDesktop.webp)",
        "mobile-image":"url(../src/image/headerBgMobile.webp)",
        "products":"url(../src/image/body-bg.png)",
        "bottom-product-right":"url(../src/image/categories/category-right.jpg)",
        "bottom-product-left":"url(../src/image/categories/category-left.jpg)",
        "orangess":"linear-gradient(270deg, #FDBA74 0%, #FED7AA 100%)",
        "article1":"url(../src/image/blogs/blog-1.png);",
        "article2":"url(../src/image/blogs/blog-2.png);",
        "article3":"url(../src/image/blogs/blog-3.png);",
        "article4":"url(../src/image/blogs/blog-4.png);",
        "article5":"url(../src/image/contact.png);",
      },
      screens:{
        'xs':"480px",
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      }
    },
  },
  plugins: [],
};
