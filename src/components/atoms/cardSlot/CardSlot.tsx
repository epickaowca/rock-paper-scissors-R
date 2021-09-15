import { FC } from "react";
import StyledCardSlot, { BoxShadowDiv, AiDiv } from "./CardSlot.style";

interface CardSlotInterface {
  winAnimation?: boolean;
  aiAnimation?: boolean;
}

const CardSlot: FC<CardSlotInterface> = ({ winAnimation, aiAnimation }) => {
  return (
    <StyledCardSlot>
      <BoxShadowDiv
        animate={winAnimation ? { scale: 1 } : { scale: 0 }}
        transition={winAnimation ? { duration: 0.35 } : { duration: 0 }}
      ></BoxShadowDiv>
      <AiDiv
        animate={
          aiAnimation
            ? { scale: [0, 1, 1], opacity: [0, 1, 0] }
            : { scale: 0, opacity: 0 }
        }
        transition={
          aiAnimation
            ? { ease: "easeInOut", duration: 2, repeat: 2 }
            : { duration: 0 }
        }
      ></AiDiv>
    </StyledCardSlot>
  );
};

export default CardSlot;
