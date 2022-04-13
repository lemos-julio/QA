/// <reference types="cypress" />
describe('Testing Plataform SheetGO',()=>{
    beforeEach(() => {
        cy.visit('https://app.sheetgo.com/login')
        .wait(10000)
    })

    it.skip('Create WorkFLow', () => {
        cy.get('button[data-onboarding-id="new-workflow"]').click()
        //cy.get('button[title="My workspace"]').click()
       //cy.get('li[id="workflow-menu-settings-mobile"]').should('be.visible')
    })

    it('Rename Workflow', ()=> {
       
        cy.get('div[data-onboarding-id="select-workflow"]').trigger('mouseenter', 'center').wait(1000)
        //cy.get('button[aria-owns="workflow-settings-menu"]').click()
    })

})