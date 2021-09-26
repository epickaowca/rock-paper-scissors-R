import { FC } from "react";
import { useContextSelector } from "use-context-selector";
import Typography from "../../atoms/typography/Typography";
import Button from "../../atoms/button/Button";
import { HCP } from "../../../pages/home/HomeContext";
import StyledSelectMode from "./SelectMode.style";

const BtnTab: ["standard", "extended"] = ["standard", "extended"];

const SelectMode: FC<{ startGame: () => void }> = ({ startGame }) => {
  const dispatchToHome = useContextSelector(HCP, (e) => e.setGCContext);

  const BtnClickHandler = (option: "standard" | "extended") => {
    dispatchToHome((prev) => ({ ...prev, mode: option }));
    startGame();
  };

  return (
    <StyledSelectMode>
      <Typography htmlTag="h1" content="Select a mode" />
      {BtnTab.map((option) => (
        <Button
          key={option}
          ruleCase
          content={option}
          onClick={() => BtnClickHandler(option)}
        />
      ))}
    </StyledSelectMode>
  );
};

export default SelectMode;
