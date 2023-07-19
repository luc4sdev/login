/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'zoom-out-left': 'zoom-out-left 1s ease-in-out',
        'zoom-in': 'zoom-in 1s ease-in-out',
      },
      keyframes: {
        'zoom-out-left': {
          '0%': { transform: 'scale(2.25) translateX(22.15%)' },
          '100%': { transform: 'scale(1) translateX(0)' },
        },
        'zoom-in': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(2.25)' },
        },
      },
    },
  },
  plugins: [],
  
}