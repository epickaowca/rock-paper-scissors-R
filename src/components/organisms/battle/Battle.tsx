import { FC } from "react";
import StyledBattle, { StyledDiv } from "./Battle.style";
import CardDisplay from "../../molecules/cardDisplay/CardDisplay";
import PlayAgain from "../../molecules/playAgain/PlayAgain";
import { GCCP } from "../gameContainer/GameContainerContext";
import { getWinner } from "../../particles/utlis";
import { useContextSelector } from "use-context-selector";

export const variantH = {
  visible: {
    opacity: 1,
    visibility: "visible",
    transition: {
      delay: 0.7,
      duration: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      delay: 0.1,
      duration: 0.3,
    },
    transitionEnd: {
      visibility: "hidden",
    },
  },
} as any;

const Battle: FC<{ gameType: "standard" | "extended" }> = ({ gameType }) => {
  const stateDispatch = useContextSelector(GCCP, (s) => s.setGCContext);
  const stage = useContextSelector(GCCP, (s) => s.GCContext.stage);
  const playerPick = useContextSelector(GCCP, (s) => s.GCContext.playerPick);
  const computerPick = useContextSelector(
    GCCP,
    (s) => s.GCContext.computerPick
  );
  const battleTime = stage === "battle";
  const winner = getWinner(playerPick, computerPick, gameType);

  return (
    <StyledBattle
      initial="hidden"
      animate={battleTime ? "visible" : "hidden"}
      transition={{ duration: 0.3 }}
      variants={variantH}
    >
      <StyledDiv>
        <CardDisplay
          imgName={playerPick}
          animation={battleTime ? "player" : "none"}
          side="left"
          win={battleTime && winner === "player"}
        />
        <CardDisplay
          imgName={computerPick ? computerPick : "rock"}
          animation={battleTime ? "ai" : "none"}
          side="right"
          win={battleTime && winner === "computer"}
        />
      </StyledDiv>
      <PlayAgain
        animationPlayAgain={battleTime}
        playAgainFunc={() =>
          stateDispatch((prev) => ({ ...prev, stage: "selectCard" }))
        }
        winner={battleTime && winner}
      />
    </StyledBattle>
  );
};

export default Battle;
