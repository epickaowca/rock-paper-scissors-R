import { FC, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { usePrevious } from "../../particles/utlis";
import { gsap } from "gsap";

const StyledSpan = styled(motion.span)`
  font-size: 2.5rem;
  position: absolute;
  color: white;
  bottom: -50px;
  right: 0;
  transform: translateY(40px);
  opacity: 0;
`;
let tl: any;

const AddScoreDisplay: FC<{ scores: number }> = ({ scores }) => {
  const prevScores = usePrevious(scores);
  const target = useRef(null);

  useEffect(() => {
    tl = gsap.timeline({ paused: true });
    tl.to(target.current, { opacity: 1, y: "0px" });
    tl.to(target.current, { opacity: 0 });
    tl.set(target.current, { y: "40px" });
  });

  useEffect(() => {
    if (tl) {
      tl.restart();
    }
  }, [scores]);

  return (
    <StyledSpan ref={target}>
      {prevScores !== undefined ? getNaturalNumber(scores - prevScores) : ""}
    </StyledSpan>
  );
};

const getNaturalNumber = (number: number) => {
  const res = number > 0 ? `+${number}` : number;
  return res;
};

export default AddScoreDisplay;
