/// <reference types="cypress" />
describe('Testing Plataform SheetGO',()=>{
    it('teste', ()=>{
        cy.visit('https://app.sheetgo.com/login')
        cy.wait(10000)
        cy.get('button[data-onboarding-id="new-workflow"]').click()
        cy.get('span:contains(Create connection)').click()
        //cy.contains('Create connection').should('be.visible').click()
        cy.get('input[id="connection-builder-name-input"]').clear().type('Connection-Test-SheetGO')
        cy.contains('Single file').should('be.visible').click()
        cy.contains('Select file').should('be.visible').click()
        cy.contains('Source.xlsx').click()
        cy.wait(10000)
        cy.contains('Next').click()
        cy.get('span:contains(Send data to a single spreadsheet)').should('be.visible').click()
        cy.contains('Finish and save').should('be.visible').click()
        cy.wait(10000)
        //Apagando um conection
        cy.get('button[aria-label="More"]').click()
        cy.wait(10000)
        cy.contains('Delete').click({force:true})
        cy.contains('Delete connection').click()
    })
})