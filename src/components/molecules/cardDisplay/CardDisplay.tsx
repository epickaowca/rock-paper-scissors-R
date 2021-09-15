import { FC } from "react";
import StyledCardDisplay, { DivContainer } from "./CardDisplay.style";
import CardSlot from "../../atoms/cardSlot/CardSlot";
import Card from "../../atoms/card/Card";
import Typography from "../../atoms/typography/Typography";

interface CardDisplayInterface {
  animation: "player" | "ai" | "none";
}

const CardDisplay: FC<CardDisplayInterface> = ({ animation }) => {
  return (
    <StyledCardDisplay>
      <DivContainer>
        <CardSlot aiAnimation={animation === "ai"} />
        <Card imgName="paper" cardAnimation={animation} />
      </DivContainer>
      <Typography content="you picked" htmlTag="p" />
    </StyledCardDisplay>
  );
};

export default CardDisplay;
