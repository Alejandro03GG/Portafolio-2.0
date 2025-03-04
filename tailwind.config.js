/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      //Color used in the project
      colors: {
        primary: "#4F86F6" /* Azul vibrante */,
        secondary: "#4161B5" /* Azul oscuro */,
        background: "#181A1B" /* Gris casi negro */,
        white: "#EAEAEA" /* Gris claro para contrastar con el fondo */,
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #5494DA, #1750AC)",
      },
    },
  },
  plugins: [],
};
