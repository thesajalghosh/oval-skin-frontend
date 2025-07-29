/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        '450': '4.5', // custom 4.5× zoom
        '550': '5.5',
        '650': '6.5',
        '750':'7.5',
        '850': '8.5',
        '110': '1.1',
      },
      fontFamily: {
        noto: ["Noto Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"]
      },
    },
  },
  plugins: [],
}