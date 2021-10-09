import { getWinner } from "./utlis";

describe("winnerFunc", () => {
  it("returns the winning card", () => {
    expect(getWinner("rock", "paper", "standard")).toBe("computer");
  });
  it("returns the winning card", () => {
    expect(getWinner("scissors", "lizard", "extended")).toBe("player");
  });
  it("returns draw", () => {
    expect(getWinner("paper", "paper", "standard")).toBe("draw");
  });
});
