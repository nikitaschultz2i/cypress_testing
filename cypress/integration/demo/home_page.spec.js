context('Home Page', () => {
    beforeEach(() => {
        cy.visit('https://www.thrivetribe.org.uk/');
    })

    it('has a title', () => {
        cy.title().should('eq', 'Thrive Tribe - Home')
    })

    it('has two links to careers page', () => {
        cy.get('a[href="/careers"]').as('careerLinks')
        cy.expect('careerLinks').to.have.length(2)
    })

    it('can navigate to careers page', () => {
        cy.get('a[href="/careers"]').first().click()
        cy.location('href').should('include', '/careers')
        cy.title().should('eq', 'Careers')
    })

})

