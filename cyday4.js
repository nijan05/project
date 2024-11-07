/// <reference types= "Cypress" />
describe('My Test suit 4',()=>{
    it('test case 1',()=>{

//checkbox option and radio button selected
// there is 2 method 1.check(),2.uncheck()
// here assest are 2 deponds on checked behavire 1.be.checked,2.unchecked

// this ceck box
 cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
 const cb=cy.get('[name="checkBoxOption1"]')
 cb.check().should('be.checked')
 cb.uncheck().should('not.be.checked')
 cy.get("[type='checkbox']").check(['option2','option3']).should('be.checked')

   // radio button
   cy.get("[value='radio1']").check().should('be.checked')
   //cy.get("[value='radio1']").uncheck().should('not.be.checked').radio button can't uncheck method used


   //handling dropdown 
   // 2 types , 1.static dropdwn,2.dynamicdropdown
// static dropdown
cy.get('select').select('option1').should('have.value','option1')// have is property validtion

// multible dropdown
cy.get('#autocomplete').type('ame')
cy.get('.ui-menu-item div').each(($e1,index,$list)=>{

    if($e1.text()==='American Samoa'){
        $e1.click()

 }





})























})
})