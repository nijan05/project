/// <reference types="Cypress"/>
/// <reference types="cypress-iframe"/>
describe('test case suit',()=>{
    // mouce hover
    it('test case 1',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.mouse-hover-content').invoke('show')// invoke is cypress method
        cy.contains('Top').click()
        cy.url().should('include','top')
  })


  it('test case 2',()=>{
cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
//cy.get('.mouse-hover-content').click({froce:true})
// cy.contains('Top').click({force:true})
// cy.url().should('include','top')

cy.contains('Reload').click({force:true})
cy.url().should('not.include','reload')



 






 })

})