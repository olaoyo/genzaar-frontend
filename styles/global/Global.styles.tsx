import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
  }
  html {
      box-sizing: border-box;
      font-size: 62.5%; //10px / 16px = 62.5% -> 1rem = 10px
  }
  body {
      font-family: 'Poppins', sans-serif;
      line-height: 1.6;
      background: #FFFFFF;
      padding: 0;
      margin: 0;
  }
  a {
      text-decoration: none;
      color: inherit;
  }

`;

export default GlobalStyle;
