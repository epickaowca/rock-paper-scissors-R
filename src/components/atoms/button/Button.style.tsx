import styled from "styled-components";

export interface SBI {
  ruleCase?: boolean;
}

const StyledBtn = styled.button<SBI>(
  ({
    ruleCase,
    theme: {
      colors: { HeaderOutline, DarkText },
    },
  }) => `
  font-size: 1rem;
  background: ${ruleCase ? "inherit" : "white"};
  border-width: 1px;
  border-style: solid;
  border-color: ${ruleCase ? "white" : HeaderOutline};
  padding: ${ruleCase ? "12px 35px" : "17px 55px"};
  border-radius: 7px;
  color: ${ruleCase ? "white" : DarkText};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`
);

export default StyledBtn;
