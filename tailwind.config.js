/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        MobilePattern: "url('/assets/pattern-bg-mobile.png')",
        DesktopPattern: "url('/assets/pattern-bg-desktop.png')",
      },
      colors: {
        DarkGray: "hsl(0, 0%, 40%)",
        VeryDarkGray: "hsl(0, 0%, 17%)",
        TxtColor: "#fff",
      },
      screens: {
        customLG: "1174px",
      },
    },
  },
  plugins: [],
};
