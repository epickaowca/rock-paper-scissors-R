describe("payment", () => {
  it("user can make payment", () => {
    cy.visit("http://localhost:3000/");

    cy.findByRole("button", {
      name: /standard/i,
    }).click();

    cy.get("[data-cy=rock]").click();

    cy.wait(7100);

    let winMessage;
    cy.get("[data-cy=winning_message]").then(
      (message) => (winMessage = message.text())
    );

    cy.get("[data-cy=scores]").then((scoreBalance) => {
      const scores = +scoreBalance.text();
      if (winMessage === "you win") {
        expect(scores).to.be.greaterThan(0);
      } else if (winMessage === "you lose") {
        expect(scores).to.be.lessThan(0);
      } else if (winMessage === "draw") {
        expect(scores).toBe.equal(0);
      }
    });
  });
});
