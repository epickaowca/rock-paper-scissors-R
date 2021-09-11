import { FC } from "react";
import StyledScoreDisplayer from "./ScoreDisplay.style";
import Typography from "../../atoms/typography/Typography";

const ScoreDisplayer: FC = () => {
  return (
    <StyledScoreDisplayer>
      <Typography content="score" htmlTag="p" color="ScoreText" />
      <Typography content={"12"} htmlTag="h1" color="DarkText" />
    </StyledScoreDisplayer>
  );
};

export default ScoreDisplayer;
