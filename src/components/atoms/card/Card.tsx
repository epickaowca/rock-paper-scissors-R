import { FC } from "react";
import StyledCard, { SCI, CardDiv, Img } from "./Card.styles";

interface CardInterface extends SCI {
  cardAnimation: "player" | "ai" | "none";
}

const Card: FC<CardInterface> = (props) => {
  const { imgName, cardAnimation } = props;
  const imgSrc = require(`../../../assets/cards/icon-${imgName}.svg`).default;
  return (
    <StyledCard
      animate={{ scale: cardAnimation === "none" ? 0 : 1 }}
      transition={{
        duration: cardAnimation === "none" ? 0 : 0.3,
        delay:
          cardAnimation === "player" ? 1 : cardAnimation === "none" ? 0 : 6,
      }}
      {...props}
    >
      <CardDiv {...props}>
        <Img src={imgSrc} alt={imgName}></Img>
      </CardDiv>
    </StyledCard>
  );
};

export default Card;
