///<reference types="cypress"/>
describe('My text suit 6',()=>{
    it('my test casse 1',()=>{
// invoke method: its remove the attribute name because here target is mention click new tabe so this method remove that .
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr','target').click()
            cy.origin('https://www.qaclickacademy.com/',()=>{
                cy.get("#navbarSupportedContent [href*='about']").click()

})
    })

it('my test casse 2',()=>{
    //prop method : invoke method have drawback url will chanage. this is overcome that
    //prop is use then method creat the variable and functionwill take the new tab url attribute name will store the variable from
    //  orign method will and validtation

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#opentab').then((e1)=>{
const url=e1.prop('href')

cy.visit(url)
cy.origin(url,()=>{
    cy.get("#navbarSupportedContent [href*='about']").click()
    cy.get('.mt-50 h2').should('contain','QAClick Academy')



    })





       
})















        // cy.get('#alertbtn').click()
        // cy.get('#confirmbtn').click()
        // cy.on('window:alert',(element)=>{
        //     expect(element).to.equal('Hello , share this practice page and share your knowledge')
        //     })
        //     cy.on('window:confirm',(element)=>{
        //     expect(element).to.equal('Hello , Are you sure you want to confirm?')          
        //     })
                
        
    




    })
})
