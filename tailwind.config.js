/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bg1: "url('/bg2.png')",
      },
      borderRadius: {
        12: "12px",
        24: "24px",
      },
      container: {
        padding: "20px",
        center: true,
        screens: {
          lg: "1360px",
        },
      },
    },
  },
  plugins: [],
};
