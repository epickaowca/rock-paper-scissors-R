import { FC, useEffect } from "react";
import StyledPlayAgain from "./PlayAgain.style";
import Typography from "../../atoms/typography/Typography";
import Button from "../../atoms/button/Button";
import { variantH } from "../../organisms/battle/Battle";
import { winnerReturnType, getRandom } from "../../particles/utlis";
import { HCP } from "../../../pages/home/HomeContext";
import { useContextSelector } from "use-context-selector";

interface PlayAgain {
  animationPlayAgain: boolean;
  playAgainFunc: () => void;
  winner: winnerReturnType | false;
}

const contentH = { player: "you win", computer: "you lose", draw: "draw" };

const PlayAgain: FC<PlayAgain> = ({
  animationPlayAgain,
  playAgainFunc,
  winner,
}) => {
  const dispatchToHome = useContextSelector(HCP, (s) => s.setGCContext);

  useEffect(() => {
    if (winner && winner !== "draw") {
      setTimeout(() => {
        dispatchToHome((prev) => ({
          ...prev,
          scores:
            winner === "player"
              ? prev.scores + getRandom(2, 4)
              : prev.scores - getRandom(1, 5),
        }));
      }, 7000);
    }
  }, [winner]);

  return (
    <StyledPlayAgain
      initial={{ opacity: 0 }}
      animate={animationPlayAgain ? "visible" : "hidden"}
      transition={
        animationPlayAgain
          ? { duration: 0.5, delay: 7 }
          : { duration: 0, delay: 1 }
      }
      variants={variantH}
    >
      <Typography
        content={winner && winner !== "error" ? contentH[winner] : ""}
        htmlTag="h1"
      />
      <Button content="play again" onClick={playAgainFunc} />
    </StyledPlayAgain>
  );
};

export default PlayAgain;
