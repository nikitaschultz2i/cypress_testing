it('has a title', () => {
    cy.visit('https://www.thrivetribe.org.uk/');
    cy.title("Thrive Tribe - Home");
})