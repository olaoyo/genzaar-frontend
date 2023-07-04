import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {

  colors: {
    primary:    "#FFFFFF",
    secondary:  "#8F24FF",
    tertiary:   "#1D163A",
    accents:    "#FFF9E5",
    green:      "#19B31F",
    grey: {
      one:      "#323232",
      two:      "#7A7A7A",
      three:    "#323232",
    }
  },

  fontSizes: {
    headers: {
      h1:       "9.2rem",
      h2:       "8.0rem",
      h3:       "7.2rem",
      h4:       "6.4rem",
      h5:       "4.8rem",
      h6:       "4.0rem",
    },
    paragraphs: {
      p1:       "3.2rem",
      p2:       "2.4rem",
      p3:       "2.0rem",
      p4:       "1.6rem",
      p5:       "1.5rem",
      p6:       "1.4rem",
      p7:       "1.3rem",
      p8:       "1.2rem",
    },
  },

  fontWeights: {
    light:       "300",
    regular:     "400",
    medium:      "500",
    semiBold:    "600",
    bold:        "700",
  },
}

export { theme };
