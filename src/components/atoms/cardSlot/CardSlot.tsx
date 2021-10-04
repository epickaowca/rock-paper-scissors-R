import { FC } from "react";
import StyledCardSlot, { BoxShadowDiv, AiDiv } from "./CardSlot.style";

interface CardSlotInterface {
  winAnimation?: boolean;
  aiAnimation?: boolean;
}

const CardSlotVariant = {
  play: {
    scale: 1,
    transition: {
      duration: 0.35,
      delay: 7,
    },
  },
  stop: {
    scale: 0,
    transition: {
      duration: 0,
      delay: 0.5,
    },
  },
};

const AiDivVariant = {
  play: {
    scale: [0, 1, 1],
    opacity: [0, 1, 0],
    transition: {
      delay: 1.5,
      ease: "easeInOut",
      duration: 2,
      repeat: 2,
    },
  },
  stop: {
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0,
      delay: 0.5,
    },
  },
};

const CardSlot: FC<CardSlotInterface> = ({ winAnimation, aiAnimation }) => {
  return (
    <StyledCardSlot>
      <BoxShadowDiv
        variants={CardSlotVariant}
        initial={{ scale: 0 }}
        animate={winAnimation ? "play" : "stop"}
      ></BoxShadowDiv>
      <AiDiv
        variants={AiDivVariant}
        initial={{ scale: 0, opacity: 0 }}
        animate={aiAnimation ? "play" : "stop"}
      ></AiDiv>
    </StyledCardSlot>
  );
};

export default CardSlot;
