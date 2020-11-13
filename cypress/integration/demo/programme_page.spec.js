context('Career Page', () => {
    beforeEach(() => {
        cy.visit('https://www.thrivetribe.org.uk/programmes');
    })

    it('contains all programmes', () => {
        cy.get('div.grid-4 p.ccprogrammes').should('contain', 'Weight management')
        cy.get('div.grid-4 p.ccprogrammes').should('contain', 'Stop smoking')
        cy.get('div.grid-4 p.ccprogrammes').should('contain', 'Mental wellbeing')
        cy.get('div.grid-4 p.ccprogrammes').should('contain', 'Health checks')
        cy.get('div.grid-4 p.ccprogrammes').should('contain', 'Workplace health')
        cy.get('div.grid-4 p.ccprogrammes').should('contain', 'Integrated services')
    })

})