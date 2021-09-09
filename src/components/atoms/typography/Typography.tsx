import { FC } from "react";
import StyledTypography, { STI } from "./Typography.style";

interface TI extends STI {
  content: string;
}

const Typography: FC<TI> = (props) => {
  const { htmlTag, content } = props;
  return (
    <StyledTypography as={htmlTag} {...props}>
      {content}
    </StyledTypography>
  );
};

export default Typography;
