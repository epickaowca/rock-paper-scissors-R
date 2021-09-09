import { FC } from "react";
import StyledBtn, { SBI } from "./Button.style";

interface BtnInterface extends SBI {
  content: string;
  onClick: () => {};
}

const Button: FC<BtnInterface> = ({ content, onClick, ruleCase }) => {
  return (
    <StyledBtn ruleCase={ruleCase} onClick={onClick}>
      {content}
    </StyledBtn>
  );
};

export default Button;
