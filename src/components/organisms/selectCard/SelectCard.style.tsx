import styled from "styled-components";

const StyledSelectCard = styled.div`
  position: relative;
  z-index: 1;
  margin: auto;
  margin-top: 150px;
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
    }
  }

  &.standard {
    width: 244px;
    height: 221px;
    ${(p) => p.theme.media.tablet} {
      width: 341px;
      height: 309px;
    }
    ${(p) => p.theme.media.desktop} {
      width: 477px;
      height: 432px;
    }
    & > div {
      & > div {
        &:nth-child(1) {
          left: 20px;
          top: 20px;
          transform: translate(-50%, -50%);
        }
        &:nth-child(2) {
          transform: translate(50%, -50%);
          top: 20px;
          right: 20px;
        }
        &:nth-child(3) {
          left: 50%;
          bottom: 20px;
          transform: translateX(-50%);
        }
      }
    }
  }
  &.extended {
    width: 296px;
    height: 281px;
    ${(p) => p.theme.media.tablet} {
      width: 384.8px;
      height: 305px;
    }
    ${(p) => p.theme.media.desktop} {
      width: 539px;
      height: 427px;
    }
    & > div {
      & > div {
        &:nth-child(1) {
          left: 50%;
          top: 20px;
          transform: translate(-50%, -50%);
        }
        &:nth-child(2) {
          left: 20px;
          top: 10%;
          transform: translate(-50%, 50%);
        }
        &:nth-child(3) {
          right: 20px;
          top: 10%;
          transform: translate(50%, 50%);
        }
        &:nth-child(4) {
          left: 20%;
          bottom: 20px;
          transform: translate(-50%, 50%);
        }
        &:nth-child(5) {
          right: 20%;
          bottom: 20px;
          transform: translate(50%, 50%);
        }
      }
    }
  }
`;

export default StyledSelectCard;
