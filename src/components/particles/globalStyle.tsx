import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap');  

html,
  body {
    overflow-x: hidden;
    margin: 0px !important;
    padding: 0px !important;
  }
  body{
    min-height: 100vh;
    background: ${(p) => p.theme.colors.bgColor};
    text-transform: uppercase;
  }
  button{
    text-transform: uppercase;
    font-weight: 600;
  }

  * {
    font-family: 'Barlow Semi Condensed', sans-serif;
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }
  html{
    font-size: 16px !important;
  }
`;

export default GlobalStyles;
