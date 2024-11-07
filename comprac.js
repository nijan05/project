/// <reference types="Cypress"/>
describe('My Test suit 3',()=>{
    it('test case 1',()=>{
 cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
 console.log(cy.title)
 cy.title()

//  cy.get('li')
//   .should('have.length', 3)
//   .each(($li, index, $lis) => {
//     return 'something else'
//   })
//   .then(($lis) => {
//     expect($lis).to.have.length(3) // true
//   })

cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
cy.get('#name').type('nijan')
cy.get('#alertbtn').click()
cy.on('windows.alert',(nijan)=>{
    expect(nijan).to.contains('I am an alert box!')
})
cy.get('#displayed-text').as('sandhoption')
cy.get('#displayed-text').type('option')
cy.get('#hide-textbox').click()
cy.get('@sandhoption').should('not.be.visible')
})
})