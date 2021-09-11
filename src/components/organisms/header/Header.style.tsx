import styled from "styled-components";

const StyledHeader = styled.header`
  border: 3px solid ${(p) => p.theme.colors.HeaderOutline};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: 20px auto;
  width: 90%;
  max-width: 780px;
  border-radius: 10px;
  & > img {
    width: 6.875rem;
  }
`;

export default StyledHeader;
