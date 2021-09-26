import { FC } from "react";
import Battle from "../battle/Battle";
import SelectCard from "../selectCard/SelectCard";
import GameContainerContext from "./GameContainerContext";
import { HCP } from "../../../pages/home/HomeContext";
import { useContextSelector } from "use-context-selector";

const GameContainer: FC = () => {
  const gameMode = useContextSelector(HCP, (s) => s.GCContext.mode);
  return (
    <GameContainerContext>
      <Battle gameType={gameMode} />
      <SelectCard gameType={gameMode} />
    </GameContainerContext>
  );
};

export default GameContainer;
