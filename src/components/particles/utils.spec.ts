import { winner } from "./utlis";

describe("winnerFunc", () => {
  it("returns the winning card", () => {
    expect(winner("rock", "paper", "standard")).toBe("paper");
  });
  it("returns the winning card", () => {
    expect(winner("lizard", "scissors", "extended")).toBe("scissors");
  });
  it("returns draw", () => {
    expect(winner("paper", "paper", "standard")).toBe("draw");
  });
});
