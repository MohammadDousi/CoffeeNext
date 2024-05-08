/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //-
        //- primary & secondary color
        primaryColor: "#FDBA74", //- orange 300
        secondaryColor: "#FED7AA", //- orange 200

        //-
        //- custom color
        customColor1: "#634832", //- brown 900
        customColor2: "#967259", //- brown 600
        customColor3: "#DBC1AC", //- brown 300
        customColor4: "#ECE0D1", //- brown 100

        //-
        //- status color
        errorColor: "#F87171", //- red 400
        warningColor: "##FACC15", //- yellow 400
        successPrimaryColor: "#10B981", //- emerald 500
        successSecondaryColor: "#059669", //- emerald 600

        //-
        //- background light color
        bgLightColor: "#F3F4F6", //- gray 100
        bgItemLightColor: "#ffffff", //- white

        bgDarkColor: "#3F3F46", //- zinc 700
        bgItemDarkColor: "#52525B", //- zinc 600

        //-
        //- text color
        textDisableColor: "#D1D5DB", //- gray 300

        textPrimaryLightColor: "3F3F46", //- zinc 700
        textSecondaryLightColor: "#FED7AA", //- orange

        textPrimaryDarkColor: "#ffffff", //- zinc 700
        textSecondaryDarkColor: "#FDBA74", //- orange 300

        //-
        //- icon color
        iconPrimaryColor: "#3F3F46", //- zinc 700
        iconSecondaryColor: "#9CA3AF", //- gray 400
        iconAccentColor: "#FED7AA", //- orange 200
        iconHoverColor: "#059669", //- emerald 600

        //-
        //- line & border color
        linePrimaryColor: "#D1D5DB", //- gray 300
        lineSecondaryColor: "#F3F4F6", //- gray 100
        lineAccentColor: "#FED7AA", //- orange 200
        // lineColor: "#ffffff/10", //- white/10
      },
    },
  },
  plugins: [],
};
