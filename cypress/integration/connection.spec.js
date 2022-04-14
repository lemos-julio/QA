        
describe('Create a Connection', ()=>{
    it('Criando Connection', ()=>{
        cy.visit('https://app.sheetgo.com/login').wait(10000)
        cy.get('button[data-onboarding-id="new-workflow"]').click()
        cy.get('span:contains(Create connection)').click()
    })


    it('Set a name for Connection',()=>{
        cy.get('input[id="connection-builder-name-input"]')
            .clear()
            .type('Connection-Test-SheetGO')
    })        
    
    it('Select a Destiny for Connection',() =>{
        cy.contains('Single file')
            .should('be.visible')
            .click()
        cy.contains('Select file')
            .should('be.visible')
            .click()
        cy.contains('Source.xlsx').click()
            .wait(10000)

        cy.contains('Next').click()
        cy.get('span:contains(Send data to a single spreadsheet)').should('be.visible').click()
        cy.contains('Finish and save').should('be.visible').click()
        cy.wait(10000)
    })

    it('Delete the Connection', ()=>{
        //cy.get('path[d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"]').click({force:true})
        cy.get('button[aria-label="More"]').click()
        cy.contains('Delete').click({force:true})
        cy.contains('Delete connection').click()
    })
})
