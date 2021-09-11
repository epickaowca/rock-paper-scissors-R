import styled, { css } from "styled-components";

export interface SCI {
  extendedCase?: boolean;
  battleCase?: boolean;
  imgName: "rock" | "paper" | "scissors" | "lizard" | "spock";
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

const StyledCard = styled.div`
  width: 100px;
  height: 100px;
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

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export default StyledCard;
