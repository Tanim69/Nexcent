
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1152px',
      },
      backgroundImage: {
        'banner':"url('./src/assets/banner.png')",
        'unseen':"url('./src/assets/unseen.png')",
        'design':"url('./src/assets/design.png')",
        'tim':"url('./src/assets/tim.png')",
      },
      colors:{
        'primary': '#4CAF4F'
      },
      
    },
  },
  plugins: [require("limbcss")],
}