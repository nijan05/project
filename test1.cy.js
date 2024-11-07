describe('My First Test suite', () => {
    it('Test case no 1', () => {
        cy.visit('https://www.instagram.com/') 
    cy.title().should('include','Instagram')
    })

    it('Test case no 2', () => {
        cy.visit('https://www.facebook.com/')
    cy.title().should('include','Facebook') 
     })
    

    it('Test case no 3', () => { 
        cy.visit('https://www.twitter.com/') 
    cy.title().should('include','twitter')
     })
    

    it('Test case no 4', () => {
     cy.visit('https://www.amazon.com/')
    cy.title().should('include','Amazon.com') 
     })
    

    it('Test case no 5', () => {
        cy.visit('https://www.flipkart.com/') 
        cy.title().should('include','Shopping')
         
    })
     
    })
    
