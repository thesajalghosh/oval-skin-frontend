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
       keyframes: {
        'drop-in': {
          '0%': {
            transform: 'translate(-50%, -100px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translate(-50%, 0)',
            opacity: '1',
          },
        },
      },
      animation: {
        'drop-in': 'drop-in 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}