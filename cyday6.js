///<reference types = "Cypress" />
describe('My text suit 6',()=>{
it('my test casse 1',()=>{
cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')

cy.get('#alertbtn').click()
cy.get('#confirmbtn').click()
 //alert handling methods 1
 cy.on('window:alert',(element)=>{
 expect(element).to.equal('Hello , share this practice page and share your knowledge')
 })
 cy.on('window:confirm',(element)=>{
expect(element).to.equal('Hello , Are you sure you want to confirm?')          
 })
})
})


