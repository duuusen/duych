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
    h2: scale(3 / 4),//(3 / 4)
    h3: scale(-1 / 12),//scale(2 / 4)
    h4: scale(1 / 6),
    h5: scale(-1 / 6),
    h6: scale(-2 / 6),
    p: { marginBottom: 0, },
    'h2, h3, h4, h5, h6, figcaption': {
      color: '#9E9E9E',
      marginBottom: rhythm(1 / 6),
    },
    'h2': {
      marginTop: rhythm(4 / 3),
    },
    'figcaption': {
      ...scale(-1 / 6),
      marginTop: rhythm(1 / 8),
      marginLeft: rhythm(1 / 8),
    },
    a: {
      color: 'red',
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
    ul: {
      listStyle: 'none',
      marginLeft: 0,
    },
    li: {
      margin: 0,
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
    img: {
      marginBottom: rhythm(1 / 3),
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
