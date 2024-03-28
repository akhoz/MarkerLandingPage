/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        
        myAquamarine: 'hsl(179, 80%, 58%)',
        myBlue: 'hsl(206, 84%, 22%)', 
        myGray: 'hsl(225, 14%, 53%)',
        myDarkBlue: 'hsl(230, 60%, 8%)',
        myRed: 'hsl(343, 100%, 58%)'
        
      },
      backgroundImage: {
        'hero': 'url(./images/bg-hero-squiggle.svg)',
        'footer': 'url(./images/bg-footer-squiggle.svg)'
      }
    },
  },
  plugins: [],
}

