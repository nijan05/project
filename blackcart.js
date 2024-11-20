/// <reference types="cypress" />
describe('blackcart suite case',()=>{
    it('test case1',()=>{
        cy.visit("https://blackcart.com/case-studies")
        cy.contains("Case studies").click()
        cy.get('.flex-vertical > .hero-title').should('have.text','Try Before You Buy Success Stories')
        cy.get('[data-w-id="3994fbde-934d-57b0-a4ed-292977a99da5"] > .nav-link-2').click()
        cy.contains('For Shoppers').click()
        //.should('have.value','For Shoppers')
        cy.get('#w-node-_43ffb2ea-27b6-3499-931d-91507cf05457-ad80914f').invoke('removeAttr','target').click()
        cy.origin('https://www.blissfulnights.com',()=>{

            cy.get('li [href*="collections/mattresses"]').first().click({force: true})
        cy.get('.header__logo').should('have.text','BlissfulNights.com')
            //cy.get('summary.text-with-icon').should('be.visible'); // If it's a CSS selector
            const product=cy.get(".product-card__title [href='/products/12-copper-gel-infused-split-head-flex-top-medium-firm-premium-memory-foam-mattress']")

            product.click()
          cy.contains('Add to cart ').click()
               })
    })
})