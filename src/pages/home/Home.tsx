import { FC, useState } from "react";
import GameContainer from "../../components/organisms/gameContainer/GameContainer";
import Header from "../../components/organisms/header/Header";
import SelectMode from "../../components/molecules/selectMode/SelectMode";
import StyledHome from "./Home.style";
import Rules from "../../components/organisms/rules/Rules";
import Button from "../../components/atoms/button/Button";
import { HCP } from "./HomeContext";
import { useContextSelector } from "use-context-selector";

const Home: FC = () => {
  const [game, setGame] = useState("select_mode");
  const setContext = useContextSelector(HCP, (s) => s.setGCContext);

  const setRules = (option: boolean) => {
    setContext((prev) => ({ ...prev, ruleVisible: option }));
  };
  return (
    <StyledHome>
      {game === "select_mode" ? (
        <SelectMode startGame={() => setGame("game")} />
      ) : (
        <>
          <Header />
          <GameContainer />
          <Button content="rules" ruleCase onClick={() => setRules(true)} />
          <Rules />
        </>
      )}
    </StyledHome>
  );
};

export default Home;
