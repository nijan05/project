/// < reference types "cypress" />
describe('My Test suit 2',()=>{
    it('test case 1',()=>{
 cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
 cy.viewport(1200,700)
 cy.get('input.search-keyword').type('ca')
 //cy.Wait(5000)
 cy.get('.product').should('have.length',5)
 cy.get('.product:visible').should('have.length',4)
 //parent to child
 cy.get('.products').find('.product').should('have.length',4)
 //cy.get(':nth-child(3)>.product.name>button').click()
 cy.get(':nth-child(3) > .product-action').click()
 cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
 cy.get('.products').find('.product').each(($e1, index, $list) => {
    const textveg=$e1.find('h4.product-name').text()
    if(textveg.includes('Cashews')){
      cy.wrap($e1.find('button')).click()

   }
})
   //cy.get(':nth-child(4) > .product-action > button').click()
  //cy.get(':nth-child(1) > .product-action > button').click()
    
})




})