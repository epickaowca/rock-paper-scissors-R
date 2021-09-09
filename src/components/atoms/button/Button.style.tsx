import styled from "styled-components";

export interface SBI {
  ruleCase?: boolean;
}

const StyledBtn = styled.button<SBI>(
  ({
    ruleCase,
    theme: {
      colors: { HeaderOutline, bgColor },
    },
  }) => `
  font-size: 1rem;
  background: ${ruleCase ? "inherit" : "white"};
  border: 1px solid
    ${ruleCase ? "white" : HeaderOutline};
  padding: 12px 37px;
  border-radius: 7px;
  color: ${ruleCase ? "white" : bgColor};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`
);

export default StyledBtn;
