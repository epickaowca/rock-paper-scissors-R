import styled from "styled-components";
import { motion } from "framer-motion";
import { GCChildrenStyles } from "../gameContainer/GameContainer.style";

const StyledSelectCard = styled(motion.div)`
  ${GCChildrenStyles};
  z-index: 1;
  & > img {
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  & > div {
    z-index: 2;
    position: relative;
    width: 100%;
    height: 100%;
    & > div {
      position: absolute;
      &:nth-child(1) {
        top: 20px;
        transform: translate(-50%, -50%) !important;
      }
    }
  }
  &.standard {
    width: 244px;
    height: 281px;
    ${(p) => p.theme.media.tablet} {
      top: 70px;
      width: 420px;
      height: 380px;
    }
    ${(p) => p.theme.media.desktop} {
      top: 120px;
      width: 477px;
      height: 500px;
    }
    & > div {
      & > div {
        &:nth-child(1) {
          left: 20px;
        }
        &:nth-child(2) {
          transform: translate(50%, -50%) !important;
          top: 20px;
          right: 20px;
        }
        &:nth-child(3) {
          left: 50%;
          bottom: 20px;
          transform: translateX(-50%) !important;
        }
      }
    }
  }

  &.extended {
    width: 296px;
    height: 281px;
    ${(p) => p.theme.media.tablet} {
      width: 480px;
      height: 400px;
    }
    ${(p) => p.theme.media.desktop} {
      top: 70px;
      width: 580px;
      height: 470px;
    }
    & > div {
      & > div {
        &:nth-child(3),
        &:nth-child(5) {
          transform: translate(50%, 50%) !important;
        }
        &:nth-child(2),
        &:nth-child(4) {
          transform: translate(-50%, 50%) !important;
        }
        &:nth-child(1) {
          left: 50%;
        }
        &:nth-child(2) {
          left: 20px;
          top: 10%;
        }
        &:nth-child(3) {
          right: 20px;
          top: 10%;
        }
        &:nth-child(4) {
          left: 20%;
          bottom: 20px;
        }
        &:nth-child(5) {
          right: 20%;
          bottom: 20px;
        }
      }
    }
  }
`;

export default StyledSelectCard;
