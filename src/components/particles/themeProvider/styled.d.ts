import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    media: {
      tablet: "@media only screen and (min-width: 768px)";
      desktop: "@media only screen and (min-width: 1200px)";
    };
    colors: {
      DarkText: "hsl(229, 25%, 31%)";
      ScoreText: "hsl(229, 64%, 46%)";
      HeaderOutline: "hsl(217, 16%, 45%)";
      bgColor: "#171D3F";
    };
  }
}
