context('Career Page', () => {
    beforeEach(() => {
        cy.visit('https://www.thrivetribe.org.uk/careers/');
    })

    it('contains a scrum master vacancy', () => {
        cy.get('a[href="https://apply.workable.com/thrive-tribe-ltd/j/4430B5324C/"]')
        .children('p').eq(0).should('contain', 'Scrum Master')
    })

    it('contains a software engineer vacancy', () => {
        cy.get('a[href="https://apply.workable.com/thrive-tribe-ltd/j/378F4D6B0F/"]')
        .children('p').eq(0).should('contain', 'Software Engineer')
    })

})