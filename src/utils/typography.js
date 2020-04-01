import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.5,
  scaleRatio: 1.5,
  //googleFonts: [
   // {
    //  name: "Inconsolata",
     // styles: ["400"],
    //},
  //],
  bodyFontFamily: ["GTAme","Helvetica Neue","serif"],
  headerFontFamily: ["GTAme","Helvetica Neue","serif"],
  bodyColor: "#212121",
  headerWeight: 400,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    h1: scale(4 / 4),
    h2: scale(3 / 4),
    h3: scale(1 / 6),//scale(2 / 4)
    h4: scale(1 / 6),
    h5: scale(-1 / 6),
    h6: scale(-2 / 6),
    'h2, h3, h4, h5, h6': {
      color: '#9E9E9E',
      marginBottom: rhythm(1 / 3),
    },
    'h3':{
      marginTop: rhythm(3),
    },
    a: {
      color: '#FF6F00',
      textDecoration: 'none',
    },
    'a:hover': {
      opacity: '0.75',
       transition: 'all .25s ease-in-out',
       '-moz-transition': 'all .25s ease-in-out',
       '-webkit-transition': 'all .25s ease-in-out', 
    },
    'a:active': {
      position: 'relative',
      top: '1px',
    },
    blockquote: {
      ...scale(1 / 4),
      borderLeft: `${rhythm(1 / 6)} solid #eceeef`,
      paddingTop: rhythm(1 / 3),
      paddingBottom: rhythm(1 / 3),
      paddingLeft: rhythm(2 / 3),
      paddingRight: rhythm(2 / 3),
    },
    "blockquote > :last-child": {
      marginBottom: 0,
    },
    "blockquote cite": {
      ...adjustFontSizeTo(options.baseFontSize),
      color: "#BDBDBD",
      fontWeight: options.bodyWeight,
      fontStyle: "normal",
    },
  }),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
