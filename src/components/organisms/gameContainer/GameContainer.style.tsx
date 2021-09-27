import styled, { css } from "styled-components";

export const GCChildrenStyles = css`
  position: absolute;
  left: 50%;
  top: 100px;
  transform: translateX(-50%);
`;

const StyledGameContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  position: relative;
`;

export default StyledGameContainer;
