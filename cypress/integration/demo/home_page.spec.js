context('Home Page', () => {
    beforeEach(() => {
        cy.visit('https://www.thrivetribe.org.uk/');
    })

    it('has a title', () => {
        cy.title().should('eq', 'Thrive Tribe - Home')
    })

    it('can navigate to careers page', () => {
        cy.get('a[href="/careers"]').first().click()
        cy.location('href').should('include', '/careers')
        cy.title().should('eq', 'Careers')
    })

    it('can navigate to programmes page', () => {
        cy.get('a[href="/programmes"]').first().click()
        cy.location('href').should('include', '/programmes')
        cy.title().should('eq', 'Services')
    })

})

