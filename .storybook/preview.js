import React from "react";
import { ThemeProvider } from "styled-components";
import { myTheme } from "../src/components/particles/themeProvider/themeProvider";
import GlobalStyles from "../src/components/particles/globalStyle";
import GameContainerContext from "../src/components/organisms/gameContainer/GameContainerContext";
import HomeContext from "../src/pages/home/HomeContext";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={myTheme}>
      <HomeContext>
        <GameContainerContext>
          <GlobalStyles />
          <Story />
        </GameContainerContext>
      </HomeContext>
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
