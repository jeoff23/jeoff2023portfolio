/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#1f1f38",
        darkteal: "#2c2c6c",
        hex: "#4db5ff",
      },
      backgroundImage: {
        "background-texture": "url('../app/img/bg-texture.png')",
      },
    },
  },
  plugins: [],
};
