export type cardType = "rock" | "paper" | "scissors" | "lizard" | "spock";
export const fullSet = ["scissors", "paper", "rock", "lizard", "spock"];

export const winner = (
  card1: cardType,
  card2: cardType,
  mode: "standard" | "extended"
) => {
  const C1I = fullSet.findIndex((e) => e === card1);
  const C2I = fullSet.findIndex((e) => e === card2);
  let max = mode === "standard" ? 2 : 4;

  let res = "error";

  let C1IH = C1I === max ? -1 : C1I;
  if (C1I === C2I) {
    res = "draw";
  } else if (C1IH + 1 === C2I || C1IH + 3 === C2I) {
    res = card1;
  } else {
    res = card2;
  }

  return res;
};
