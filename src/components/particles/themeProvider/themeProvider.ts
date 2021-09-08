import { DefaultTheme } from "styled-components";

const myTheme: DefaultTheme = {
  media: {
    tablet: "@media only screen and (min-width: 768px)",
    desktop: "@media only screen and (min-width: 1440px)",
  },
  colors: {
    DarkText: "hsl(229, 25%, 31%)",
    ScoreText: "hsl(229, 64%, 46%)",
    HeaderOutline: "hsl(217, 16%, 45%)",
  },
};

export { myTheme };
