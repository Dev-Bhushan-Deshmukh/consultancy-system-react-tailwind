/** @type {import('tailwindcss').Config} */
// url("./src/assets/—Pngtree—modern flat design concept of_5332896.png")
// import mdm from './src/assets/5182460.jpg'
export default {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': ' url("./src/assets/5182460.jpg")',
        grad:"linear-gradient(to right top, #ffffff, #fdfefd, #fcfcfc, #fafbfa, #f9f9f9, #f7f7f7, #f5f5f5, #f3f3f3, #f0f0f0, #eeeeee, #ebebeb, #e9e9e9)"
        
      },
      colors:{
navcolor:'#1d1d24',
        dark:'white',
        highlighter:'#0a0d16',
        cardcolor:'#fcfcfc',
        bgcol:'#e9e9e9',
        texthighlighter:'#9a17bf',
        textLighter:'#727272'

      },
      height:{
barHeight:'10%',
Heightninet:'90%'

      }
    },
  },
  plugins: [],
}
