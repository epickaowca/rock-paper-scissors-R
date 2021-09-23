import { getWinner } from "./utlis";

describe("winnerFunc", () => {
  it("returns the winning card", () => {
    expect(getWinner("rock", "paper", "standard")).toBe("paper");
  });
  it("returns the winning card", () => {
    expect(getWinner("lizard", "scissors", "extended")).toBe("scissors");
  });
  it("returns draw", () => {
    expect(getWinner("paper", "paper", "standard")).toBe("draw");
  });
});
