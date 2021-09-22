import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { cardType } from "../../particles/utlis";

export interface SCI extends SCIH {
  imgName: cardType;
}

interface SCIH {
  extendedCase?: boolean;
}

const Colors = {
  rock: ["rgb(220, 46, 78)", "rgb(221, 64, 93)", "rgba(221, 64, 93, 0.59)"],
  paper: ["rgb(72, 101, 244)", "rgb(86, 113, 245)", "rgba(86, 113, 245, 0.59)"],
  scissors: [
    "rgb(236, 158, 14)",
    "rgb(236, 169, 34)",
    "rgba(236, 169, 34, 0.59)",
  ],
  lizard: [
    "rgb(131, 79, 227)",
    "rgb(140, 93, 229)",
    "rgba(140, 93, 229, 0.59)",
  ],
  spock: ["rgb(64, 185, 206)", "rgb(82, 190, 209)", "rgba(82, 190, 209, 0.59)"],
};

const StyledCard = styled(motion.div)<SCIH>`
  transform: scale(0);
  transform-origin: center;
  z-index: 2;
  --sizeHSC: ${(p) => (p.extendedCase ? 70 : 80)}px;
  cursor: pointer;
  width: var(--sizeHSC);
  height: var(--sizeHSC);
  ${(p) => p.theme.media.tablet} {
    --sizeHSC: ${(p) => (p.extendedCase ? 90 : 110)}px;
  }
  ${(p) => p.theme.media.desktop} {
    --sizeHSC: ${(p) => (p.extendedCase ? 120 : 150)}px;
  }
`;
export const Img = styled.img`
  width: 50%;
`;

export const CardDiv = styled.div<SCI>((p) => {
  const color = Colors[p.imgName];
  return css`
    --sizeH: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    &,
    &:before,
    &:after {
      width: var(--sizeH);
      height: var(--sizeH);
    }
    &:before,
    &:after {
      position: absolute;
      border-radius: 50%;
      content: "";
      z-index: -1;
    }
    &:before {
      --sizeH: 130%;
      background-image: linear-gradient(${color[0]}, ${color[1]});
      box-shadow: ${color[2]} 0px 6px 0px 0px;
    }
    &:after {
      box-shadow: rgb(0, 0, 0, 0.59) 0px 6px 2px 0px inset;
      background: white;
    }
  `;
});

export default StyledCard;
