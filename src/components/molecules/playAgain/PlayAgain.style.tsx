import styled from "styled-components";
import { motion } from "framer-motion";

const StyledPlayAgain = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  ${(p) => p.theme.media.tablet} {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export default StyledPlayAgain;
