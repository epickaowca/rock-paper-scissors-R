import styled from "styled-components";
import { motion } from "framer-motion";

const StyledPlayAgain = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 220px;
  ${(p) => p.theme.media.tablet} {
    margin-top: 0px;
  }
`;

export default StyledPlayAgain;
