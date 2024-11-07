///<reference types="Cypress" />
describe('my test suit',()=>{
it('test case no 1',()=>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#opentab').invoke('removeAttr','target')
    cy.get('#opentab').click()
    cy.get()
   // cy.origin('https://www.qaclickacademy.com/')




})
})
