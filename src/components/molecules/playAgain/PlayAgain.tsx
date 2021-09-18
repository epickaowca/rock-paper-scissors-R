import { FC } from "react";
import StyledPlayAgain from "./PlayAgain.style";
import Typography from "../../atoms/typography/Typography";
import Button from "../../atoms/button/Button";
import { variantH } from "../../organisms/battle/Battle";

interface PlayAgain {
  animationPlayAgain: boolean;
  playAgainFunc: () => void;
}

const PlayAgain: FC<PlayAgain> = ({ animationPlayAgain, playAgainFunc }) => {
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
      <Typography content="you lose" htmlTag="h1" />
      <Button content="play again" onClick={playAgainFunc} />
    </StyledPlayAgain>
  );
};

export default PlayAgain;
