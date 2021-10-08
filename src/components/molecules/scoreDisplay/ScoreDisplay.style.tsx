import styled from "styled-components";

const StyledScoreDisplayer = styled.div`
  background: white;
  border-radius: 7px;
  display: inline-block;
  padding: 10px 25px;
  text-align: center;
  position: relative;
  & > p {
    font-size: 0.9rem;
  }
  & > h1 {
    font-size: 2.7rem;
  }
`;

export default StyledScoreDisplayer;
