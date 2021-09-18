import { FC, useEffect } from "react";
import StyledCard, { SCI, CardDiv, Img } from "./Card.styles";

interface CardInterface extends SCI {
  cardAnimation: "player" | "ai" | "none";
}

const Card: FC<CardInterface> = (props) => {
  const { imgName, cardAnimation } = props;
  const imgSrc = require(`../../../assets/cards/icon-${imgName}.svg`).default;

  const CardVariant = {
    stop: {
      scale: 0,
      transition: {
        duration: 0,
        delay: 0.5,
      },
    },
    play: {
      scale: 1,
      transition: {
        duration: 0.3,
        delay: cardAnimation === "player" ? 1 : 6,
      },
    },
  };

  return (
    <StyledCard
      variants={CardVariant}
      initial={{ scale: 0 }}
      animate={cardAnimation === "none" ? "stop" : "play"}
      {...props}
    >
      <CardDiv {...props}>
        <Img src={imgSrc} alt={imgName}></Img>
      </CardDiv>
    </StyledCard>
  );
};

export default Card;
