import { FC, useContext } from "react";
import StyledSelectCard from "./SelectCard.style";
import Card from "../../atoms/card/Card";
import cs from "classnames";
import { GCCP } from "../gameContainer/GameContainerContext";
import { variantH } from "../battle/Battle";
import { fullSet } from "../../particles/utlis";

const set: ["scissors", "paper", "rock"] = ["scissors", "paper", "rock"];
type fullSetType = ["scissors", "paper", "rock", "lizard", "spock"];

export interface SelectCardInterface {
  gameType: "standard" | "extended";
}

const SelectCard: FC<SelectCardInterface> = ({ gameType }) => {
  const GCCPV = useContext(GCCP);
  const stage = GCCPV?.GCContext.stage;
  console.log(GCCPV?.GCContext);

  const arrH = gameType === "standard" ? set : (fullSet as fullSetType);
  const BgImg = require(`../../../assets/bg-${
    gameType === "standard" ? "triangle" : "pentagon"
  }.svg`).default;
  return (
    <StyledSelectCard
      className={cs(gameType)}
      initial={{ opacity: 1 }}
      variants={variantH}
      animate={stage === "selectCard" ? "visible" : "hidden"}
    >
      <img src={BgImg} alt="background_image" />
      <div>
        {arrH.map((elem) => (
          <Card
            clickFunc={(name) =>
              GCCPV?.setGCContext((prev) => ({
                ...prev,
                stage: "battle",
                playerPick: name,
              }))
            }
            imgName={elem}
            extendedCase={gameType === "extended"}
            cardAnimation="noAnimation"
          />
        ))}
      </div>
    </StyledSelectCard>
  );
};

export default SelectCard;
