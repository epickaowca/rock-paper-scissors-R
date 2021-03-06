import styled from "styled-components";
import { motion } from "framer-motion";

export interface SCDInterface {
  side: "left" | "right";
}

const StyledCardDisplay = styled(motion.div)<SCDInterface>(
  ({
    side,
    theme: {
      media: { tablet },
    },
  }) => `
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
  ${tablet} {
    position: absolute;
    flex-direction: column-reverse;
    top: 50%;
    transform: translateY(-50%);
    ${side}: 20%;
  }
`
);

export const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    &:nth-child(2) {
      position: absolute;
    }
  }
`;

export default StyledCardDisplay;
