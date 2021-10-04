import styled from "styled-components";

export interface STI {
  color?: "ScoreText" | "DarkText";
  htmlTag: "p" | "h1";
}

const StyledTypography = styled.p<STI>(
  ({ htmlTag, color, theme: { colors } }) => `
  font-size: ${htmlTag === "h1" ? "2.5" : "1"}rem;
  font-weight: ${htmlTag === "h1" ? 700 : 600};
  color: ${color ? colors[color] : "white"};
`
);

export default StyledTypography;
