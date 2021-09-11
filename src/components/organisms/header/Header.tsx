import { FC } from "react";
import StyledHeader from "./Header.style";
import Logo from "../../../assets/logo.svg";
import ScoreDisplay from "../../molecules/scoreDisplay/ScoreDisplay";

const Header: FC = () => {
  return (
    <StyledHeader>
      <img src={Logo} alt="logo" />
      <ScoreDisplay />
    </StyledHeader>
  );
};

export default Header;
