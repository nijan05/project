/// <reference types="Cypress" />
describe('My Test suit 3',()=>{
    it('test case 1',()=>{
 cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');cy.get('.search-keyword').type('ap')//visit methods,get method
 
 cy.viewport(1200,700)// webpage size change
 cy.wait(5000)// wait time like threadsleep

  cy.get('.products').find('.product').should('have.length',3)// should is assest its validte the value correct or not

 cy.get('.products').as('elements')//as alies method if elements used many place so give one name  use that name 
 //cy.get('h4.product-name').as('name')
 cy.get('@elements').find('.product').eq(2).contains('+').click()
 cy.get('@elements').find('.product').eq(2).contains('ADD TO CART').click()
 cy.get('@elements').find('.product').each(($e1,index,$list)=>{
           const stat =$e1.find('h4.product-name').text()
           if(stat.includes('Capsicum')){
         cy.wrap($e1.find('button')).click()

}
const stat1 =$list.find('h4.product-name').text()
if(stat1.includes('Apple')){
$list.find('button').click()
}
})
//text validation

// cy.get('brand').should('have.text','GREEN')

// cy.get('.brand').then((logo1stname)=>{
//   cy.log(logo1stname.text())
//     console.log(logo1stname.text())
//  })
cy .get('.redLogo').should('have.text','KART')
cy.get('.redLogo').then((loga2ndname) =>{
    cy.log(loga2ndname.text())
console.log(loga2ndname.text())
})
cy.wait(5000)
cy.get('.cart-icon').click()
cy.contains('PROCEED TO CHECKOUT').click()
cy.contains('Place Order').click()
cy.get('select').select('India')
cy.get('.chkAgree').click()
cy.contains('Proceed').click()


    })
})