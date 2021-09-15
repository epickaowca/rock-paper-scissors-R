import { FC } from "react";
import StyledBattle, { StyledDiv } from "./Battle.style";
import Card from "../../atoms/card/Card";
import CardSlot from "../../atoms/cardSlot/CardSlot";
import Typography from "../../atoms/typography/Typography";

const Battle: FC = () => {
  return (
    <StyledBattle>
      <StyledDiv>
        <div>
          <CardSlot />
          <Card imgName="paper" battleCase />
          <Typography content="you picked" htmlTag="p" />
        </div>
        <div>
          <CardSlot />
          <Card imgName="rock" battleCase />
          {/* <Typography content="the house picked" htmlTag="p" /> */}
        </div>
      </StyledDiv>
    </StyledBattle>
  );
};

export default Battle;
