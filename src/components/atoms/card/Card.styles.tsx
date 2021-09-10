import styled from "styled-components";

export interface SCI {
  extendedCase?: boolean;
  battleCase?: boolean;
  imgName: string;
}

const StyledCard = styled.div<SCI>`
  width: 100px;
  height: 100px;
  margin: 50px;
`;

export const CardDiv = styled.div`
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
    background-image: linear-gradient(rgb(236, 158, 14), rgb(236, 169, 34));
    box-shadow: rgb(236, 169, 34, 0.7) 0px 6px 0px 0px;
  }
  &:after {
    box-shadow: rgb(0, 0, 0, 0.5) 0px 6px 2px 0px inset;
    background: white;
  }
`;

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export default StyledCard;
