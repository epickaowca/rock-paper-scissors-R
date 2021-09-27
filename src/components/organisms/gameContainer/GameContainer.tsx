import { FC } from "react";
import Battle from "../battle/Battle";
import SelectCard from "../selectCard/SelectCard";
import GameContainerContext from "./GameContainerContext";
import { HCP } from "../../../pages/home/HomeContext";
import { useContextSelector } from "use-context-selector";
import StyledGameContainer from "./GameContainer.style";

const GameContainer: FC = () => {
  const gameMode = useContextSelector(HCP, (s) => s.GCContext.mode);
  return (
    <GameContainerContext>
      <StyledGameContainer>
        <Battle gameType={gameMode} />
        <SelectCard gameType={gameMode} />
      </StyledGameContainer>
    </GameContainerContext>
  );
};

export default GameContainer;
