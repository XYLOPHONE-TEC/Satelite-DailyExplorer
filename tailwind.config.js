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
      md:"700px",
      mdx:"1024px",
      lg:"1440px",
      xl:"1500px"
    },
   
    extend: {
      boxShadow:{
        lg:"rgb(0,0,056) 0px 22px 70px,4px"
      }
    },
  },
  plugins: [],
}

