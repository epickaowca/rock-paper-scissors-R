import styled from "styled-components";
import { motion } from "framer-motion";

const StyledCardSlot = styled(motion.div)`
  --cardSize: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  background: #192845;
  width: var(--cardSize);
  height: var(--cardSize);
  border-radius: 50%;
  ${(p) => p.theme.media.tablet} {
    --cardSize: 160px;
  }
  ${(p) => p.theme.media.desktop} {
    --cardSize: 200px;
  }
`;

export const BoxShadowDiv = styled(motion.div)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 0px 0px 50px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 100px,
    rgba(255, 255, 255, 0.01) 0px 0px 0px 150px;
`;

export const AiDiv = styled(motion.div)`
  width: 80%;
  height: 80%;
  position: absolute;
  border-radius: 50%;
  background-color: ${(p) => p.theme.colors.HeaderOutline};
  transform: scale(0);
`;

export default StyledCardSlot;
