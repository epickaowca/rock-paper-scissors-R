import { FC, useState } from "react";

import { createContext } from "use-context-selector";

interface ProviderInterface {
  GCContext: {
    ruleVisible: boolean;
    scores: number;
    mode: "standard" | "extended";
  };

  setGCContext: React.Dispatch<
    React.SetStateAction<{
      ruleVisible: boolean;
      scores: number;
      mode: "standard" | "extended";
    }>
  >;
}

export const HCP = createContext<ProviderInterface>(undefined!);

const HomeContext: FC = ({ children }) => {
  const [GCContext, setGCContext] = useState({
    ruleVisible: false,
    mode: "standard",
    scores: 0,
  } as ProviderInterface["GCContext"]);

  return (
    <HCP.Provider value={{ GCContext, setGCContext }}>{children}</HCP.Provider>
  );
};

export default HomeContext;
