import { FC, createContext, useState } from "react";

interface ProviderInterface {
  GCContext: {
    stage: "selectCard" | "battle";
  };

  setGCContext: React.Dispatch<
    React.SetStateAction<{
      stage: "selectCard" | "battle";
    }>
  >;
}

export const GCCP = createContext<ProviderInterface | undefined>(undefined);

const GameContainerContext: FC = ({ children }) => {
  const [GCContext, setGCContext] = useState({
    stage: "selectCard",
  } as ProviderInterface["GCContext"]);

  return (
    <GCCP.Provider value={{ GCContext, setGCContext }}>
      {children}
    </GCCP.Provider>
  );
};

export default GameContainerContext;
