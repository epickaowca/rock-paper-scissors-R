import { FC, useCallback } from "react";
import StyledSelectCard from "./SelectCard.style";
import Card from "../../atoms/card/Card";
import cs from "classnames";
import { GCCP } from "../gameContainer/GameContainerContext";
import { variantH } from "../battle/Battle";
import { fullSet, getRandom } from "../../particles/utlis";
import { useContextSelector } from "use-context-selector";
import ImgComponent from "../../atoms/imgComponent/ImgComponent";

const set: ["scissors", "paper", "rock"] = ["scissors", "paper", "rock"];
type fullSetType = ["scissors", "paper", "rock", "lizard", "spock"];

export interface SelectCardInterface {
  gameType: "standard" | "extended";
}

const SelectCard: FC<SelectCardInterface> = ({ gameType }) => {
  const stage = useContextSelector(GCCP, (s) => s.GCContext.stage);
  const dispatchState = useContextSelector(GCCP, (s) => s.setGCContext);
  const arrH = gameType === "standard" ? set : (fullSet as fullSetType);
  const bgImg = gameType === "standard" ? "bg-triangle.svg" : "bg-pentagon.svg";

  const pickCard = useCallback(
    (name) => {
      dispatchState((prev) => ({
        ...prev,
        stage: "battle",
        playerPick: name,
        computerPick: fullSet[getRandom(0, gameType === "standard" ? 2 : 4)],
      }));
    },
    [dispatchState]
  );

  return (
    <StyledSelectCard
      className={cs(gameType)}
      initial={{ opacity: 1 }}
      variants={variantH}
      animate={stage === "selectCard" ? "visible" : "hidden"}
    >
      <ImgComponent imgName={bgImg} alt="backgroundImg" />
      <div>
        {arrH.map((elem) => (
          <Card
            clickFunc={pickCard}
            imgName={elem}
            key={elem}
            extendedCase={gameType === "extended"}
            cardAnimation="noAnimation"
            data-cy={elem}
          />
        ))}
      </div>
    </StyledSelectCard>
  );
};

export default SelectCard;
