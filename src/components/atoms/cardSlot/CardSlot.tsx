import { FC } from "react";
import StyledCardSlot from "./CardSlot.style";
import { motion } from "framer-motion";

interface CardSlotInterface {
  animation: boolean;
}

const CardSlot: FC<CardSlotInterface> = ({ animation }) => {
  return (
    <StyledCardSlot>
      <motion.div
        animate={animation ? { scale: 1 } : { scale: 0 }}
        transition={animation ? { duration: 0.35 } : { duration: 0 }}
      ></motion.div>
    </StyledCardSlot>
  );
};

export default CardSlot;
