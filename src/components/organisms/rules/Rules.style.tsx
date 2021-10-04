import styled, { css } from "styled-components";
import Typography from "../../atoms/typography/Typography.style";

const StyledRules = styled.div<{ ruleVisible: boolean }>`
  visibility: ${(p) => (p.ruleVisible ? "visible" : "hidden")};
`;

const positionCss = css`
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledDiv = styled.div`
  ${positionCss};
  border-radius: 10px;
  position: absolute;
  z-index: 46;
  background: white;
  width: 100%;
  height: 100%;
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    display: grid;
    justify-items: center;
    height: 100%;
    max-height: 600px;
    & > img {
      &:nth-child(3) {
        cursor: pointer;
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
  ${(p) => p.theme.media.tablet} {
    max-width: 500px;
    height: auto;
    & > div {
      row-gap: 50px;
      display: grid;
      grid-template-rows: auto auto;
      grid-template-columns: 175px 175px;
      grid-template-areas:
        "top-left top-right"
        "mid mid";
      ${Typography} {
        font-size: 2rem;
        grid-area: top-left;
        align-self: center;
        justify-self: start;
      }
      & > img {
        &:nth-child(2) {
          grid-area: mid;
        }
        &:nth-child(3) {
          grid-area: top-right;
          align-self: center;
          justify-self: end;
        }
      }
    }
  }
`;

export const Overlay = styled.div`
  ${positionCss};
  position: fixed;
  cursor: pointer;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 45;
`;

export default StyledRules;
