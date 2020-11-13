context('Career Page', () => {
    beforeEach(() => {
        cy.visit('https://www.thrivetribe.org.uk/careers/');
    })

    it('contains a scrum master vacancy with a link to the workable site', () => {
        cy.get('div.jobs p.ccwhite').eq(0).should('contain', 'Scrum Master')

        cy.get('div.jobs div.w-dyn-item a').eq(0).then(function(ln){
            const url = ln.prop('href')
            cy.expect(url).to.include('apply.workable.com')

            const target = ln.prop('target')
            cy.expect(target).to.eq('_blank')
        })
    })

    it('contains a software engineer vacancy with a link to the workable site', () => {
        cy.get('div.jobs p.ccwhite').eq(1).should('contain', 'Software Engineer')

        cy.get('div.jobs div.w-dyn-item a').eq(1).then(function(ln){
            const url = ln.prop('href')
            cy.expect(url).to.include('apply.workable.com')
            
            const target = ln.prop('target')
            cy.expect(target).to.eq('_blank')
        })
    })

    it('contains a lead software engineer vacancy with a link to the workable site', () => {
        cy.get('div.jobs p.ccwhite').eq(2).should('contain', 'Lead Software Engineer')

        cy.get('div.jobs div.w-dyn-item a').eq(2).then(function(ln){
            const url = ln.prop('href')
            cy.expect(url).to.include('apply.workable.com')
            
            const target = ln.prop('target')
            cy.expect(target).to.eq('_blank')
        })

    })

    
    it('contains a health check vacancy with a link to the workable site', () => {
        cy.get('div.jobs p.ccwhite').eq(3).should('contain', 'NHS Health Check Practitioner - Surrey Wide')

        cy.get('div.jobs div.w-dyn-item a').eq(3).then(function(ln){
            const url = ln.prop('href')
            cy.expect(url).to.include('apply.workable.com')
            
            const target = ln.prop('target')
            cy.expect(target).to.eq('_blank')
        })

    })


})