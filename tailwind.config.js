/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        abril: ["Abril Fatface"],
        alfa: ["Alfa Slab One"],
      },
    },
  },
  plugins: [],
};
