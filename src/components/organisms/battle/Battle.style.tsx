import styled from "styled-components";

const StyledBattle = styled.div`
  margin: 50px;
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  & > div {
    display: flex;
    position: relative;
    & > div {
      &:nth-child(2) {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
`;

export default StyledBattle;
