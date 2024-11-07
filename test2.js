/// <reference types ="Cypress"/>
describe('open url',()=>{
    it('1st url',()=>{
cy.visit('https://www.youtube.com/')
cy.title().should('eq','YouTube')
console.log(cy.title)
 })
 
it('2nd url',()=>{
    cy.visit('https://www.twitter.com/')
    cy.title().should('eq','X. It’s what’s happening / X')
    console.log(cy.title)
    
})
it('3rd url',() => {

    cy.visit('https://facebook.com/');
    //console.log(cy.title)
})















})