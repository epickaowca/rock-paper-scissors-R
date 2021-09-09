import styled from "styled-components";

const StyledCardSlot = styled.div`
  background: #192845;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  & > div {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 0px 0px 50px,
      rgba(255, 255, 255, 0.05) 0px 0px 0px 100px,
      rgba(255, 255, 255, 0.01) 0px 0px 0px 150px;
  }
`;

export default StyledCardSlot;
