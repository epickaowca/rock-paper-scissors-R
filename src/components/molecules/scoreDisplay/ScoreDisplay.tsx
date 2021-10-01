import { FC } from "react";
import StyledScoreDisplayer from "./ScoreDisplay.style";
import Typography from "../../atoms/typography/Typography";
import { HCP } from "../../../pages/home/HomeContext";
import { useContextSelector } from "use-context-selector";

const ScoreDisplayer: FC = () => {
  const scores = useContextSelector(HCP, (s) => s.GCContext.scores);
  return (
    <StyledScoreDisplayer>
      <Typography content="score" htmlTag="p" color="ScoreText" />
      <Typography content={scores.toString()} htmlTag="h1" color="DarkText" />
    </StyledScoreDisplayer>
  );
};

export default ScoreDisplayer;
