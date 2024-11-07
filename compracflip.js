/// <reference types= "Cypress" />
describe(('My test suit flip'),()=> {

    it('My 1st case  1',()=>{

    cy.visit('https://www.flipkart.com/')
    cy.title().should('includes','Online')
    cy.title().should('eq','Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!')
    console.log(cy.title());
    // cy.contains('Login').click()
    //  cy.get(".vLRlQb  [type='text']").type('9488144366')
    //  cy.get('.QqFHMw').click()
    // cy.get().type('196827')
    // // cy.wait(5000)
    // cy.get('.QqFHMw').click()
    //cy.get('[data-observerid-afbddd97-6107-4dca-b743-4c6b6bd3b9c6="3faecb6a-78b6-49bd-8996-e3a405b944a0"] > .YBLJE4 > ._1XjE3T > span').click()
   // cy.get('[data-observerid-f76ca8a4-5e9d-4582-8a9f-4cdfb919c418="b0690aed-9a53-4609-91fd-13d59ce33c5b"] > .YBLJE4 > ._1XjE3T > span').click()
   cy.contains('Mobiles').click()
   cy.get('.ZWmcSB > :nth-child(2) > [href="/apple-iphone-15-plus-blue-128-gb/p/itm4022c14383050"]').click()
   cy.contains('Add to cart').click()
   cy.get('.Lni97G > .tJjCVx > .XqNaEv').click()
   cy.get("[name='q']").type('mobiles')
   cy.get('.MJG8Up').click()
    })  

}  )