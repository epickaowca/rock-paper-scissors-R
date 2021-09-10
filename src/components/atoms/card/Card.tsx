import { FC } from "react";
import StyledCard, { SCI, CardDiv, Img } from "./Card.styles";

const Card: FC<SCI> = (props) => {
  const { imgName } = props;
  const imgSrc = require(`../../../assets/cards/icon-${imgName}.svg`).default;
  return (
    <StyledCard {...props}>
      <CardDiv>
        <Img src={imgSrc} alt={imgName}></Img>
      </CardDiv>
    </StyledCard>
  );
};

export default Card;
