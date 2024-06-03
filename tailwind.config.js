/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
        bgDarkColor: "#27272A", //
        bgItemDarkColor: "#3F3F46", //

        //
        // text color
        textDisableColor: "#D1D5DB", // gray 300
        textPrimaryLightColor: "#3F3F46", // zinc 700
        textPrimaryDarkColor: "#ffffff", // zinc 700
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

        // custom color
        Brown: {
          900: "#634832",
          600: "#967259",
          300: "#DBC1AC",
          100: "#ECE0D1",
        },
      },

      letterSpacing: {
        "tracking-tighter": "0.065em",
      },

      lineHeight: {
        "extra-none": "0",
      },

      borderRadius: {
        "4xl": "2rem",
      },

      boxShadow: {
        defaultShadow: "0px 1px 10px 0px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [require("daisyui")],
  
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },


};
