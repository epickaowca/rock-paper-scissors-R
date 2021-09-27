import { FC, useState } from "react";
import GameContainer from "../../components/organisms/gameContainer/GameContainer";
import Header from "../../components/organisms/header/Header";
import SelectMode from "../../components/molecules/selectMode/SelectMode";
import StyledHome from "./Home.style";

const Home: FC = () => {
  const [game, setGame] = useState("select_mode");
  return (
    <StyledHome>
      {game === "select_mode" ? (
        <SelectMode startGame={() => setGame("game")} />
      ) : (
        <>
          <Header />
          <GameContainer />
        </>
      )}
    </StyledHome>
  );
};

export default Home;
