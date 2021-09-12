import { FC } from "react";
import StyledSelectCard from "./SelectCard.style";
import Card from "../../atoms/card/Card";
import cs from "classnames";

const set: ["rock", "paper", "scissors"] = ["rock", "paper", "scissors"];
const extSet: ["rock", "paper", "scissors", "lizard", "spock"] = [
  ...set,
  "lizard",
  "spock",
];

export interface SelectCardInterface {
  gameType: "standard" | "extended";
}

const SelectCard: FC<SelectCardInterface> = ({ gameType }) => {
  const arrH = gameType === "standard" ? set : extSet;
  const BgImg = require(`../../../assets/bg-${
    gameType === "standard" ? "triangle" : "pentagon"
  }.svg`).default;
  return (
    <StyledSelectCard className={cs(gameType)}>
      <img src={BgImg} alt="background_image" />
      <div>
        {arrH.map((elem) => (
          <Card imgName={elem} extendedCase={gameType === "extended"} />
        ))}
      </div>
    </StyledSelectCard>
  );
};

export default SelectCard;
