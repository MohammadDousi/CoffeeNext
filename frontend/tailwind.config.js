/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // primary & secondary color
        primaryColor: "#FDBA74", // orange 300
        secondaryColor: "#FED7AA", // orange 200

        //
        // status color
        errorColor: "#F87171", // red 400
        warningColor: "#FACC15", // yellow 400
        successPrimaryColor: "#10B981", // emerald 500
        successSecondaryColor: "#059669", // emerald 600
        //
        // background light color
        bgLightColor: "#F3F4F6", // gray 100
        bgItemLightColor: "#ffffff", // white

        bgDarkColor: "#3F3F46", // zinc 700
        bgItemDarkColor: "#3F3F46", //

        //
        // text color
        textDisableColor: "#D1D5DB", // gray 300

        textPrimaryLightColor: "#3F3F46", // zinc 700
        textSecondaryLightColor: "#FDBA74", // orange 200

        textPrimaryDarkColor: "#ffffff", // zinc 700
        textSecondaryDarkColor: "#FED7AA", // orange 300

        //
        // icon color
        iconPrimaryColor: "#3F3F46", // zinc 700
        iconSecondaryColor: "#9CA3AF", // gray 400
        iconAccentColor: "#FED7AA", // orange 200
        iconHoverColor: "#059669", // emerald 600
        //
        // line & border color
        linePrimaryColor: "#D1D5DB", // gray 300
        lineSecondaryColor: "#F3F4F6", // gray 100
        lineAccentColor: "#FED7AA", // orange 200
        "white-10": "rgba(255, 255, 255, 0.10)",
        "black-submenu": "rgba(63, 63, 70, 1)",
        "bg-mobileMenu": "rgba(254, 215, 170, 0.2)",

        //- custom color

        // custom color
        Brown: {
          900: "#634832",
          600: "#967259",
          300: "#DBC1AC",
          100: "#ECE0D1",
        },
      },

      backgroundColor: {
        darken: "#27272A",
        btn: "linear-gradient(270deg, #FDBA74 0%, #FED7AA 100%);",
        btnfooter:"linear-gradient(rgba(253, 186, 116, 1), rgba(254, 215, 170, 1))"
      },

      letterSpacing: {
        "tracking-tighter": "0.065em",
      },

      borderRadius: {
        "4xl": "2rem",
      },

      boxShadow: {
        defaultShadow: "0px 1px 10px 0px rgba(0, 0, 0, 0.05)",
      },

      backgroundImage: {
        "desktop-image": "url(../src/assets/image/headerBgDesktop.webp)",
        "mobile-image": "url(../src/assets/image/headerBgMobile.webp)",
        products: "url(../src/assets/image/body-bg.png)",
        "bottom-product-right":
          "url(../src/image/categories/category-right.jpg)",
        "bottom-product-left": "url(../src/image/categories/category-left.jpg)",
        oranges: "linear-gradient(270deg, #FDBA74 0%, #FED7AA 100%)",
        article1: "url(../src/assets/image/blogs/blog-1.png);",
        article2: "url(../src/assets/image/blogs/blog-2.png);",
        article3: "url(../src/assets/image/blogs/blog-3.png);",
        article4: "url(../src/assets/image/blogs/blog-4.png);",
        article5: "url(../src/assets/image/contact.png);",
      },

      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      fontFamily:{
        morabba:'Morabba'
      }
    },
  },
  plugins: [],
};
