///<reference types="Cypress"/>
// framework steps for e2e test.building cypress framwork

import FrontPage from "../PageObject/Frontpage"
import Products from "../PageObject/ProductsPage"
//import "cypress/support/commands.js"

describe('Test e n e case suit angular',function(){
//step 1 : Setting up test hooks.test hooks is outside it block inside the describe block  eg.before hook here used
//step 2 : data driven testing with fixture(i.e) store the data in folders are fixture/example.json
// format for data store :{"data name1":"data value","data name2":"data value"}
    before( ()=>{
        cy.fixture('example').then((data)=>{
            this.data=data
        }) })
        const frontpage=new FrontPage();
        const products=new Products();
    it('my test case one',()=>{
    cy.visit(Cypress.env('url')+'/angularpractice/')//cypress env is c is capuse env is enviroment
   //  const products=new Products();
    frontpage.getName().type(this.data.name)
    frontpage.getEmail().type(this.data.email)
    frontpage.getPassword().type(this.data.password)
    frontpage.getCheckBox().check()
    frontpage.getGender().select('Male')
    frontpage.getSubmit().click()
//Assertion 
    frontpage.getName().should('have.value',this.data.name)
    frontpage.getName().should('have.attr','minlength','2')
    frontpage.getEmail().should('have.value',this.data.email)
    frontpage.getCheckBox().should('be.checked')
    frontpage.getGender().should('be.visible')
    frontpage.getTwoBox().should('have.value',this.data.name)
    cy.get('.alert').then((text)=>{
    const acttxt=text.text()
    expect(acttxt.includes('Success! ')).to.be.true       
    })
})

it('second page test case',()=>{

//goto shop page      
    cy.visit(Cypress.env('url')+'/angularpractice/shop')
 //normal method select object
    cy.get('app-card.col-lg-3').each(($e1,index,$list)=>{
    if($e1.text().includes('Blackberry')){
    cy.get('.btn.btn-info').eq(index).click()
     } })
 //step 3:customized commend line
 // support/commends.js folder save the commend lines for multiple element selection
 cy.selectionName('Nokia Edge')
    //cy.selectionName('Nokia Edge')
 //step 4: parameterized multiple data set
    this.data.productsName.forEach((element)=>{
cy.selectionName (element)
     })
    products.getcheckout().click()
//sum of the selected Products
    var sum=0
    cy.get('tr td:nth-child(4) strong').each(($e1,index,$list)=>{
    const amt=$e1.text()
    var pro=amt.split(" ")
    pro=pro[1].trim()
    sum=Number(sum)+Number(pro)
}) .then(()=>{
    cy.log(sum)
})
// expected total sum of products
    products.getProductsum1().each(($e1,index,$list)=>{
       const amt= $e1.text()
       var total=amt.split(" ")
       total=total[1].trim()
       expect(Number(total)).to.equal(sum)
        })
   cy.get(':nth-child(6) > :nth-child(5) > .btn').click()
 //   cy.get(':nth-child(3) > :nth-child(5) > .btn').click()
    cy.get('#country').type('ind')
    // step 7: configuration the Cypress.json 
    //eg : default timeout change,env { url option},specpattan 
    //Cypress.config('defaultCommandTimeout', 8000)//cypress config timeout commend for single only
    //cy.wait(8000)
    //step 5: pause function and debugging 
    //cy.pause() and debug()
    cy.get('.suggestions > :nth-child(1) > li > a').click()
    cy.get('#checkbox2').check({force:true})
    cy.get('.ng-untouched > .btn').click()
    //alert assertion
    cy.get('.alert').then((text)=>{
        const actltext=text.text()
        expect(actltext.includes('Success!')).to.be.true
    })    
})    
})