import { FC, memo } from "react";
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
        delay: cardAnimation === "player" ? 2 : 6,
      },
    },
  };

  return (
    <StyledCard
      {...props}
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
    >
      <CardDiv imgName={imgName}>
        <Img src={imgSrc} alt={imgName}></Img>
      </CardDiv>
    </StyledCard>
  );
};

export default memo(Card);
