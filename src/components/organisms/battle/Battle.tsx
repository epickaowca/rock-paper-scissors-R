import { FC, useContext, useEffect, useState } from "react";
import StyledBattle, { StyledDiv } from "./Battle.style";
import CardDisplay from "../../molecules/cardDisplay/CardDisplay";
import PlayAgain from "../../molecules/playAgain/PlayAgain";
import { GCCP } from "../gameContainer/GameContainerContext";
import { fullSet, getRandom, getWinner } from "../../particles/utlis";

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
  console.log("czesc");
  console.log(GCCPV.GCContext);

  const stage = GCCPV.GCContext.stage;
  const playerPick = GCCPV.GCContext.playerPick;
  const battleTime = stage === "battle";

  const [computerPick, setComputerPick]: any = useState("");

  useEffect(() => {
    if (stage === "battle") {
      setComputerPick(fullSet[getRandom(0, 2)]);
    }
  }, [stage]);

  const PlayAgainFunc = () => {
    setComputerPick("");
    GCCPV?.setGCContext((prev) => ({ ...prev, stage: "selectCard" }));
  };

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
          win={getWinner(playerPick, computerPick, "standard") === playerPick}
        />
        <CardDisplay
          imgName={computerPick ? computerPick : "rock"}
          animation={battleTime ? "ai" : "none"}
          side="right"
          win={
            computerPick &&
            getWinner(playerPick, computerPick, "standard") === computerPick
          }
        />
      </StyledDiv>
      <PlayAgain
        animationPlayAgain={battleTime}
        playAgainFunc={PlayAgainFunc}
      />
    </StyledBattle>
  );
};

export default Battle;
