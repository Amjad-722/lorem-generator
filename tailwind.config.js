/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-red': '#FF6A67',
        'custom-white': '#FFFFFF',
        'custom-dwhite': '#D3DBE4',
      },
      theme: {
        container: {
          padding: {
            DEFAULT: '1rem',
            sm: '2rem',
            lg: '8rem',
            xl: '8rem',
            '2xl': '6rem',
          },
        },
      },
    },
  },
  plugins: [],
}
