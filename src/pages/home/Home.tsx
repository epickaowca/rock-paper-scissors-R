import { FC, useState } from "react";
import GameContainer from "../../components/organisms/gameContainer/GameContainer";
import Header from "../../components/organisms/header/Header";
import SelectMode from "../../components/molecules/selectMode/SelectMode";

const Home: FC = () => {
  const [game, setGame] = useState("select_mode");
  return (
    <>
      {game === "select_mode" ? (
        <SelectMode startGame={() => setGame("game")} />
      ) : (
        <div>
          <Header />
          <GameContainer />
        </div>
      )}
    </>
  );
};

export default Home;
