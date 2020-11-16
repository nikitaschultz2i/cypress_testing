context('Career Page', () => {
    beforeEach(() => {
        cy.visit('https://www.thrivetribe.org.uk/programmes');
    })

    it('contains a weight management programme', () => {
        cy.get('div.grid-4 p.ccprogrammes').should('contain', 'Weight management')
    })

    it('contains a stop smoking programme', () => {
        cy.get('div.grid-4 p.ccprogrammes').should('contain', 'Stop smoking')
    })

    it('contains a mental wellbeing programme', () => {
        cy.get('div.grid-4 p.ccprogrammes').should('contain', 'Mental wellbeing')
    })

    it('contains a health checks programme', () => {
        cy.get('div.grid-4 p.ccprogrammes').should('contain', 'Health checks')
    })

    it('contains a workplace health programme', () => {
        cy.get('div.grid-4 p.ccprogrammes').should('contain', 'Workplace health')
    })

    it('contains a integrated services programme', () => {
        cy.get('div.grid-4 p.ccprogrammes').should('contain', 'Integrated services')
    })

})