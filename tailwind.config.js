/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    daisyui: {
      themes: [
        {
          light: {
            primary: "#2d76b2",
          },
        },
      ],
    },
  },
  plugins: [require("daisyui")],
};
