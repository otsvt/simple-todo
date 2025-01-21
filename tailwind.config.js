/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "Roboto",
      },
      backgroundColor: {
        body: "#F5F5F5",
        main: "#FEFEFE",
      },
      textColor: {
        title: "#E9D9D8",
      },
    },
  },
  plugins: [],
};
