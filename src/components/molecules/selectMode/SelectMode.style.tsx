import styled from "styled-components";

const StyledSelectMode = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  & > div {
    margin-top: 25px;
    display: flex;
    gap: 25px;
  }
`;

export default StyledSelectMode;
