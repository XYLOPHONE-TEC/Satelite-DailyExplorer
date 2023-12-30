/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important:true,
  theme: {
    screens:{
      xm:"300px",
      sm:"560px",
      md:"768px",
      mdx:"1024px",
      lg:"1440px",
      xl:"1500px"
    },
   
    extend: {},
  },
  plugins: [],
}

