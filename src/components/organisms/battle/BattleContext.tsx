import { FC, createContext, useState } from "react";

interface ProviderInterface {
  testState: {
    cos: string;
  };

  setTestState: React.Dispatch<
    React.SetStateAction<{
      cos: string;
    }>
  >;
}

export const BCP = createContext<ProviderInterface | undefined>(undefined);

const BattleContext: FC = ({ children }) => {
  const [testState, setTestState] = useState({ cos: "text" });

  return (
    <BCP.Provider value={{ testState, setTestState }}>{children}</BCP.Provider>
  );
};

export default BattleContext;
