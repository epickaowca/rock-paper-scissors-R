import { FC } from "react";
import StyledRules, { Overlay, StyledDiv } from "./Rules.style";
import ImgComponent from "../../atoms/imgComponent/ImgComponent";
import Typography from "../../atoms/typography/Typography";
import closeIco from "../../../assets/icon-close.svg";
import { useContextSelector } from "use-context-selector";
import { HCP } from "../../../pages/home/HomeContext";

const Rules: FC = () => {
  const ruleVisible = useContextSelector(HCP, (s) => s.GCContext.ruleVisible);
  const setContext = useContextSelector(HCP, (s) => s.setGCContext);

  const setRules = (option: boolean) => {
    setContext((prev) => ({ ...prev, ruleVisible: option }));
  };

  return (
    <StyledRules ruleVisible={ruleVisible}>
      <StyledDiv>
        <div>
          <Typography htmlTag="h1" content="rules" color="DarkText" />
          <ImgComponent imgName="image-rules.svg" alt="ruleImg" />
          <img src={closeIco} alt="close" onClick={() => setRules(false)} />
        </div>
      </StyledDiv>
      <Overlay onClick={() => setRules(false)} />
    </StyledRules>
  );
};

export default Rules;
