import { FC, useState, createContext } from "react";
import StyledBattle, { StyledDiv } from "./Battle.style";
import CardDisplay from "../../molecules/cardDisplay/CardDisplay";
import PlayAgain from "../../molecules/playAgain/PlayAgain";

export const variantH = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const Battle: FC = () => {
  const [startBattle, setStartBattle] = useState(true);

  return (
    <StyledBattle
      initial="hidden"
      animate={startBattle ? "visible" : "hidden"}
      transition={{ duration: 0.3 }}
      variants={variantH}
    >
      <StyledDiv>
        <CardDisplay
          animation={startBattle ? "player" : "none"}
          side="left"
          win={false}
        />
        <CardDisplay
          animation={startBattle ? "ai" : "none"}
          side="right"
          win={false}
        />
      </StyledDiv>
      <PlayAgain
        animationPlayAgain={startBattle}
        playAgainFunc={() => setStartBattle(false)}
      />
    </StyledBattle>
  );
};

export default Battle;
