import styled from "styled-components";
import { motion } from "framer-motion";

const StyledPlayAgain = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 50px;
  margin-bottom: 100px;
  ${(p) => p.theme.media.tablet} {
    margin: 0px;
  }
`;

export default StyledPlayAgain;
