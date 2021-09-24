import React from "react";
import { ThemeProvider } from "styled-components";
import { myTheme } from "../src/components/particles/themeProvider/themeProvider";
import GlobalStyles from "../src/components/particles/globalStyle";
import GameContainerContext from "../src/components/organisms/gameContainer/GameContainerContext";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={myTheme}>
      <GameContainerContext>
        <GlobalStyles />
        <Story />
      </GameContainerContext>
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
