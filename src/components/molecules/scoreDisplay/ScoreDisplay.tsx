import { FC } from "react";
import StyledScoreDisplayer from "./ScoreDisplay.style";
import Typography from "../../atoms/typography/Typography";
import { HCP } from "../../../pages/home/HomeContext";
import { useContextSelector } from "use-context-selector";
import { usePrevious } from "../../particles/utlis";

const ScoreDisplayer: FC = () => {
  const scores = useContextSelector(HCP, (s) => s.GCContext.scores);
  const prevScores = usePrevious(scores);
  let difference;
  if (prevScores !== undefined) {
    difference = scores - prevScores;
    // console.log(difference > 0 ? "+" + difference : difference);
  }
  return (
    <StyledScoreDisplayer>
      <Typography content="score" htmlTag="p" color="ScoreText" />
      <Typography
        data-cy="scores"
        content={scores.toString()}
        htmlTag="h1"
        color="DarkText"
      />
    </StyledScoreDisplayer>
  );
};

export default ScoreDisplayer;
