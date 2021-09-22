import { FC, useState, useContext } from "react";
import StyledBattle, { StyledDiv } from "./Battle.style";
import CardDisplay from "../../molecules/cardDisplay/CardDisplay";
import PlayAgain from "../../molecules/playAgain/PlayAgain";
import { GCCP } from "../gameContainer/GameContainerContext";

export const variantH = {
  visible: { opacity: 1, visibility: "visible" },
  hidden: {
    opacity: 0,
    transitionEnd: {
      visibility: "hidden",
    },
  },
} as any;

const Battle: FC = () => {
  const GCCPV = useContext(GCCP);
  const stage = GCCPV?.GCContext.stage;
  const battleTime = stage === "battle";

  return (
    <StyledBattle
      initial="hidden"
      animate={battleTime ? "visible" : "hidden"}
      transition={{ duration: 0.3 }}
      variants={variantH}
    >
      <StyledDiv>
        <CardDisplay
          animation={battleTime ? "player" : "none"}
          side="left"
          win={false}
        />
        <CardDisplay
          animation={battleTime ? "ai" : "none"}
          side="right"
          win={false}
        />
      </StyledDiv>
      <PlayAgain
        animationPlayAgain={battleTime}
        playAgainFunc={() =>
          GCCPV?.setGCContext((prev) => ({ ...prev, stage: "selectCard" }))
        }
      />
    </StyledBattle>
  );
};

export default Battle;
