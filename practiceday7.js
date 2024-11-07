///<reference types="Cypress"/>
describe('My test suite case',()=>{
    it('My test case web table',()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
cy.get('.table-display tr td:nth-child(3)').each(($e1,index,$list)=>    {
    const element =$e1.text()
    if(element.includes('35')){
        cy.get('.table-display tr td:nth-child(3)').eq(index).prev().then((course)=>{
const coursename=course.text()
console.log(coursename)
expect(coursename).to.include('WebServices')
expect(coursename).to.equal('WebServices / REST API Testing with SoapUI')
 })
    }
 const list =$list.find('.table-display tr td:nth-child(2)').text()
 if(list.includes('Advanced Selenium')){
    $list.find('.table-display tr td:nth-child(2)').eq(index).next().then((course2)=>{
        const name =course2.text()
        console .log(name)
        expect(name).to.equal('20')


    })

 }
})




    })


})