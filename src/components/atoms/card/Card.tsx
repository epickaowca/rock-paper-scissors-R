import { FC } from "react";
import StyledCard, { SCI, CardDiv, Img } from "./Card.styles";
import { cardType } from "../../particles/utlis";

interface CardInterface extends SCI {
  cardAnimation: "player" | "ai" | "none" | "noAnimation";
  clickFunc?: (name: cardType) => void;
}

const Card: FC<CardInterface> = (props) => {
  const { imgName, cardAnimation, clickFunc } = props;
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
      onClick={() => clickFunc && clickFunc(imgName)}
      variants={CardVariant}
      initial={cardAnimation === "noAnimation" ? { scale: 1 } : { scale: 0 }}
      animate={
        cardAnimation === "none"
          ? "stop"
          : cardAnimation === "noAnimation"
          ? {}
          : "play"
      }
      {...props}
    >
      <CardDiv {...props}>
        <Img src={imgSrc} alt={imgName}></Img>
      </CardDiv>
    </StyledCard>
  );
};

export default Card;
