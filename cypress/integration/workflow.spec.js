/// <reference types="cypress" />
describe('Testing Create WorkFlow',()=>{
    before(() => {
        cy.visit('https://app.sheetgo.com/login').wait(40000)
    })

    it('Create WorkFlow', () => {
        cy.get('button[data-onboarding-id="new-workflow"]').click()
        cy.get('span:contains(Create connection)').click()
        cy.contains('Single file')
            .should('be.visible')
            .click()
        cy.contains('Select file')
            .should('be.visible')
            .click()
        cy.contains('Source.xlsx').click()
        cy.wait(5000)
        cy.contains('Next').click()
        cy.get('span:contains(Send data to a single spreadsheet)')
            .should('be.visible')
            .click()
        cy.contains('Finish and save')
            .should('be.visible')
            .click()
    
    })

    it('Rename WorkFlow',()=>{
        cy.get('button[title="My workspace"]')
            .invoke('show')
            .click({force:true})
        cy.get('button[title="Open settings"]')
            .invoke('show')
            .click({force:true})
        cy.get('li[id="workflow-menu-settings-mobile"]')
            .contains('Edit information')
            .click()
        cy.get('input[id="workflow-settings-input"]')
            .clear()
            .type('WorkFlow SheetGO QA')
        cy.get('input[id="workflow-settings-other"]')
            .clear()
            .type('QA')
        cy.get('span:contains(Save)').click().wait(1000)


    })
   
   
    it('Delete Workflow', ()=> {
        cy.get('button[title="My workspace"]').invoke('show').click({force:true})
        cy.get('button[title="Open settings"]')
            .invoke('show')
            .click({force:true})
        cy.contains('Delete workflow').click()
        cy.get('button[aria-label="Delete workflow"]').click()
      
    })
    


    

})