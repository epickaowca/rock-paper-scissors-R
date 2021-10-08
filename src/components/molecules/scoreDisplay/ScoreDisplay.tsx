import { FC } from "react";
import StyledScoreDisplayer from "./ScoreDisplay.style";
import Typography from "../../atoms/typography/Typography";
import { HCP } from "../../../pages/home/HomeContext";
import { useContextSelector } from "use-context-selector";
import AddScoreDisplay from "./AddScoreDisplay";

const ScoreDisplayer: FC = () => {
  const scores = useContextSelector(HCP, (s) => s.GCContext.scores);

  return (
    <StyledScoreDisplayer>
      <Typography content="score" htmlTag="p" color="ScoreText" />
      <Typography
        data-cy="scores"
        content={scores.toString()}
        htmlTag="h1"
        color="DarkText"
      />
      <AddScoreDisplay scores={scores} />
    </StyledScoreDisplayer>
  );
};

export default ScoreDisplayer;
