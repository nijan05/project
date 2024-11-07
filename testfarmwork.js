///<reference types="Cypress"/>

describe('My frame works',function(){
    // before hooks (its stored in fixtures floder --> example floder save the datas there.file formate is .json)
     before(()=>{
     cy.fixture('example').then((data)=>{
     this.data=data
    }) })
    it('frame work before hook',()=>{
     cy.visit('https://rahulshettyacademy.com/angularpractice/')
     cy.get('[name="name"]:nth-child(2)').type(this.data.name)
     cy.get('[name="email"]').type(this.data.email)
     cy.get('#exampleInputPassword1').type(this.data.password)
     cy.get('#exampleCheck1').check()
     cy.get('#inlineRadio2').check()
     cy.get('select').select(this.data.Gender)
//Asstation
cy.get('[name="name"]:nth-child(2)').should('have.value',this.data.name)
cy.get('[name="name"]:nth-child(2)').should('have.attr','minlength',2)
cy.get('[name="email"]').should('have.value',this.data.email)
cy.get('#exampleCheck1').should('be.checked')
cy.get('#inlineRadio2').should('be.checked')
cy.get('#inlineRadio3').should('not.be.checked')
cy.get('select').should('have.value',this.data.Gender)
cy.get('select').should('be.visible')

 })
    //Normal commed customsied commend(c.commend it store in supports floder --->commends folder---> file save formate .js)
     it('frame work customise commend',()=>{
     cy.visit('https://rahulshettyacademy.com/angularpractice/')
     cy.get(':nth-child(2) > .nav-link').click()
     // Normal commend lines
     cy.get('app-card.col-lg-3').each(($e1,index,$list)=>{
     if($e1.text().includes('Blackberry')){
     cy.get('.btn.btn-info').eq(index).click()
      } })
    // Customised commend lines (support floder create the above commends make it one method name. call that methodName and productsName  )  
     cy.selectionName('Nokia Edge')
    // cy.selectionName('Samsung Note 8') 
    // cy.selectionName('iphone X')
    cy.pause()

//Parameterize test with Multiple data set multiple data set call in single line
this.data.productsName.forEach((Element)=>{
  cy.selectionName(Element)
})
cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
    }) })