///<reference types="Cypress"/>
describe('My test suite case',()=>{
    it('My test case web table',()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.table-display tr td:nth-child(2)').each(($e1,index,$list) =>{
           const text=$e1.text() 
           if(text.includes('Bugzilla')){
            cy.get('.table-display tr td:nth-child(2)').eq(index).next().then((price)=>{
const prc=price.text()
console.log(price.text())
expect(prc).to.equal('25')


            })



           }

        })

    })


})