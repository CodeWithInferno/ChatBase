/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({
      // options
      thin: true, // enables "scrollbar-thin"
      hover: true, // enables "scrollbar-hover"
      colors: { // defines default colors
        thumb: 'rgb(31, 41, 55)',
        track: 'white',
        hover: 'rgb(31, 41, 55)',
      },
    }),
  ],
};