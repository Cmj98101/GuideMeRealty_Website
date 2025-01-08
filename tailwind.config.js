/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'),
  require("daisyui")],
  daisyui: {
    themes: [{
      mytheme: {
        "primary": "#000000",
        "secondary": "#FCBA04",
        "accent": "#6C7175",
        "neutral": "#FFFFFF",
        "base-100": "#ffffff",
        "info": "#F55D3E",
        "success": "#00ff00",
        "warning": "#d97706",
        "error": "#ff0000",

      },
      // fontSize: {
      //   sm: '0.8rem',
      //   base: '1rem',
      //   xl: '1.25rem',
      //   '2xl': '1.563rem',
      //   '3xl': '1.953rem',
      //   '4xl': '2.441rem',
      //   '5xl': '3.052rem',
      // }
    },],
  }
}

