import styled from "styled-components";

export interface STI {
  color?: "ScoreText" | "DarkText";
  htmlTag: "p" | "h1";
}

const StyledTypography = styled.p<STI>`
  font-size: ${(p) => (p.htmlTag === "h1" ? "2" : "1")}rem;
  text-transform: uppercase;
  font-weight: ${(p) => (p.htmlTag === "h1" ? 700 : 600)};
  color: ${(p) =>
    p.color === "ScoreText"
      ? p.theme.colors.ScoreText
      : p.color === "DarkText"
      ? p.theme.colors.DarkText
      : "white"};
`;

export default StyledTypography;
