import styled from "styled-components";
import { motion } from "framer-motion";
import { GCChildrenStyles } from "../gameContainer/GameContainer.style";

const StyledBattle = styled(motion.div)`
  ${GCChildrenStyles};
  display: flex;
  flex-direction: column;
  gap: 25px;
  position: relative;
  justify-content: center;
  ${(p) => p.theme.media.tablet} {
    height: 300px;
    max-width: 600px;
  }
  ${(p) => p.theme.media.desktop} {
    max-width: 800px;
  }
`;

export const StyledDiv = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 70px;
`;

export default StyledBattle;
