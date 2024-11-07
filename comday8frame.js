///<reference types="Cypress"/>
///<reference types="cypress-iframe"/>
import 'cypress-iframe'
describe('test suite case',()=>{
it('frame test case',()=>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.frameLoaded('#courses-iframe')
   cy.iframe().find('a[href*="learning-path"]').eq(0).click()

cy.wait(6000)
   //cy.iframe().find('[onclick="filterLearningPaths("javascript")"]').should('have.text','javascript')
   cy.iframe().find('div.inner-box').should('contain','LEARNING PATHS')
   cy.iframe().find('[href="consulting"]').eq(0).click()
   cy.wait(6000)
   cy.iframe().find('#username').type('nijandhan')





})

})