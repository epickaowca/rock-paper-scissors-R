import { FC } from "react";
import Home from "./pages/home/Home";
import { myTheme } from "./components/particles/themeProvider/themeProvider";
import { ThemeProvider } from "styled-components";
import HomeContext from "./pages/home/HomeContext";
import GameContainerContext from "./components/organisms/gameContainer/GameContainerContext";

const App: FC = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <HomeContext>
        <GameContainerContext>
          <Home />
        </GameContainerContext>
      </HomeContext>
    </ThemeProvider>
  );
};

export default App;
