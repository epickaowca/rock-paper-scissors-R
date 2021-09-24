export type cardType = "rock" | "paper" | "scissors" | "lizard" | "spock";
export const fullSet: ["scissors", "paper", "rock", "lizard", "spock"] = [
  "scissors",
  "paper",
  "rock",
  "lizard",
  "spock",
];

export const getWinner = (
  card1: cardType,
  card2: cardType,
  mode: "standard" | "extended"
) => {
  const C1I = fullSet.findIndex((e) => e === card1);
  const C2I = fullSet.findIndex((e) => e === card2);
  let max = mode === "standard" ? 2 : 4;

  let res = "error";

  let C1IPN = mode === "standard" ? C1I + 1 : C1I + 3;

  if (C1IPN > max) {
    C1IPN -= max + 1;
  }

  if (C1I === C2I) {
    res = "draw";
  } else if (C1IPN === C2I) {
    res = card1;
  } else {
    res = card2;
  }

  return res;
};

export const getRandom = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};
