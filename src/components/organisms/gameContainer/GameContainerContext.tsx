import { FC, useState } from "react";
import { SCI } from "../../atoms/card/Card.styles";
import { createContext } from "use-context-selector";

interface ProviderInterface {
  GCContext: {
    stage: "selectCard" | "battle";
    playerPick: SCI["imgName"];
    computerPick: SCI["imgName"];
    winner: "player" | "computer" | "draw" | "null";
  };

  setGCContext: React.Dispatch<
    React.SetStateAction<{
      stage: "selectCard" | "battle";
      playerPick: SCI["imgName"];
      computerPick: SCI["imgName"];
      winner: "player" | "computer" | "draw" | "null";
    }>
  >;
}

export const GCCP = createContext<ProviderInterface>(undefined!);

const GameContainerContext: FC = ({ children }) => {
  const [GCContext, setGCContext] = useState({
    stage: "selectCard",
    playerPick: "rock",
    computerPick: "rock",
    winner: "null",
  } as ProviderInterface["GCContext"]);

  return (
    <GCCP.Provider value={{ GCContext, setGCContext }}>
      {children}
    </GCCP.Provider>
  );
};

export default GameContainerContext;
