import { FC } from "react";
import StyledCardDisplay, {
  DivContainer,
  SCDInterface,
} from "./CardDisplay.style";
import CardSlot from "../../atoms/cardSlot/CardSlot";
import Card from "../../atoms/card/Card";
import { SCI } from "../../atoms/card/Card.styles";
import Typography from "../../atoms/typography/Typography";

interface CardDisplayInterface extends SCDInterface {
  animation: "player" | "ai" | "none";
  win?: boolean;
  imgName: SCI["imgName"];
}

const noneTransition = { delay: 1, duration: 0 };

const CardDisplay: FC<CardDisplayInterface> = ({
  animation,
  win,
  side,
  imgName,
}) => {
  return (
    <StyledCardDisplay
      side={side}
      initial={{ [side]: "20%" }}
      animate={{ [side]: animation === "none" ? "20%" : "0%" }}
      transition={animation === "none" ? noneTransition : { delay: 7 }}
    >
      <DivContainer>
        <CardSlot aiAnimation={animation === "ai"} winAnimation={win} />
        <Card imgName={imgName} cardAnimation={animation} />
      </DivContainer>
      <Typography
        content={animation === "player" ? "you picked" : "the house picked"}
        htmlTag="p"
      />
    </StyledCardDisplay>
  );
};

export default CardDisplay;
