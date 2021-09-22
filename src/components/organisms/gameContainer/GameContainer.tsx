import { FC } from "react";
import Battle from "../battle/Battle";
import SelectCard from "../selectCard/SelectCard";
import GameContainerContext from "./GameContainerContext";

const GameContainer: FC = () => {
  return (
    <div>
      <GameContainerContext>
        <Battle />
        <SelectCard gameType="standard" />
      </GameContainerContext>
    </div>
  );
};

export default GameContainer;
