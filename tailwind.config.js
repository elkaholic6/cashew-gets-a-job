/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,css}",
  ],
  theme: {
    extend: {
      screens: {
        'xxl': '1536px',
        'xs': '495px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-10px)' },
          '50%': { transform: 'translateX(10px)' },
          '75%': { transform: 'translateX(-10px)' },
        },
      },
      animation: {
        shake: "shake 0.5s ease-in-out infinite",
      },
      fontFamily: {
        baloo: ['"Baloo 2"', "sans-serif"],
        mouse: ['"Mouse Memoirs"', "sans-serif"],
        lilita: ['"Lilita One"', "sans-serif"],
        montserrat: ['"Montserrat"', "sans-serif"],
        sans: ['"Helvetica Neue"', 'Arial', "sans-serif"],
        serif: ['"Georgia"', '"Times New Roman"', 'Times', 'serif']
      },
      spacing: {
        '1/12': '8.333333%',
        'smbook-pages-screen': 'calc(95vw / 1.6)',
        'mdbook-pages-screen': 'calc(75vw / 1.6)',
        'banner-1-col': 'calc(90vw / 3)',
        'banner-3-col': 'calc(90vw / 9)',
        'wallpaper-smscreen': 'calc(90vw / 0.5626)',
        'wallpaper-mdscreen': 'calc(90vw * 0.85)',
        'wallpaper-lgscreen': 'calc(80vw * 0.425)',
      },
      screens: {
        '2xs': '320px',
        'xs': '495px',
      },
      boxShadow: {
        '3d-front': '0 0 15px rgba(0, 0, 0, 0.5)',
        '3d-right': '5px 0 15px rgba(0, 0, 0, 0.5)',
        '3d-left': '-5px 0 15px rgba(0, 0, 0, 0.5)',
        '3d-top': '0 -5px 15px rgba(0, 0, 0, 0.5)',
        '3d-bottom': '0 5px 15px rgba(0, 0, 0, 0.5)',
      },
      rotate: {
        'x-90': 'rotateX(90deg)',
        'x--90': 'rotateX(-90deg)',
        'y-90': 'rotateY(90deg)',
        'y--90': 'rotateY(-90deg)',
      },
      translate: {
        'z-25': 'translateZ(25px)',
        'z-50': 'translateZ(50px)',
        'z-125': 'translateZ(125px)',
      },
      width: {
        '13/12': '108.333333%',
      },
      height: {
        '13/12': '108.333333%',
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
