import { FC } from "react";
import StyledScoreDisplayer from "./ScoreDisplay.style";
import Typography from "../../atoms/typography/Typography";

interface SDInterface {
  points: number;
}

const ScoreDisplayer: FC<SDInterface> = ({ points }) => {
  return (
    <StyledScoreDisplayer>
      <Typography content="score" htmlTag="p" color="ScoreText" />
      <Typography content={points.toString()} htmlTag="h1" color="DarkText" />
    </StyledScoreDisplayer>
  );
};

export default ScoreDisplayer;
