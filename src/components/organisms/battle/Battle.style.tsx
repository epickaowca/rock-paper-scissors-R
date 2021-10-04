import styled from "styled-components";
import { motion } from "framer-motion";
import { GCChildrenStyles } from "../gameContainer/GameContainer.style";

const StyledBattle = styled(motion.div)(
  ({
    theme: {
      media: { tablet, desktop },
    },
  }) => `
  ${GCChildrenStyles};
  display: flex;
  flex-direction: column;
  gap: 25px;
  position: relative;
  justify-content: center;
  max-width: 400px;
  width: 80%;
  ${tablet} {
    width: 100%;
    height: 300px;
    max-width: 750px;
  }
  ${desktop} {
    max-width: 900px;
  }
`
);

export const StyledDiv = styled(motion.div)`
  display: flex;
  justify-content: space-between;
`;

export default StyledBattle;
