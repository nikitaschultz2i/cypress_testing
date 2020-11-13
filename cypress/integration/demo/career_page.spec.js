context('Career Page', () => {
    beforeEach(() => {
        cy.visit('https://www.thrivetribe.org.uk/careers/');
    })

    it('contains a scrum master vacancy', () => {
        cy.get('div.jobs a[href*="apply.workable.com"]').eq(0)
        .children('p').eq(0).should('contain', 'Scrum Master')
    })

    it('contains a software engineer vacancy', () => {
        cy.get('div.jobs a[href*="apply.workable.com"]').eq(1)
        .children('p').eq(0).should('contain', 'Software Engineer')
    })

})