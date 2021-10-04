import styled from "styled-components";

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > button {
    margin-top: 50px;
  }
  ${(p) => p.theme.media.tablet} {
    & > button {
      margin-top: 270px;
    }
  }
  ${(p) => p.theme.media.desktop} {
    max-width: 1400px;
    margin: auto;
    & > button {
      margin-top: 350px;
      margin-right: 50px;
      align-self: flex-end;
    }
  }
`;

export default StyledHome;
