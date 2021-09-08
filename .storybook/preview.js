import React from "react";
import { ThemeProvider } from "styled-components";
import { myTheme } from "../src/components/particles/themeProvider/themeProvider";
import GlobalStyles from "../src/components/particles/globalStyle";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={myTheme}>
      <GlobalStyles />
      <Story />
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
