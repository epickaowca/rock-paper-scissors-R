import styled from "styled-components";

const StyledCardDisplay = styled.div`
  margin: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
  ${(p) => p.theme.media.tablet} {
    flex-direction: column-reverse;
  }
`;

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
