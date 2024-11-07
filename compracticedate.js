/// <reference types="Cypress" />
describe('My test suit calalender',()=>{
    it('teast case one date',()=>{
const month='6'
const year='2027'
const date='15'
const ex=[month,date,year]

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('[href="#/offers"]').invoke('removeAttr','target').click()
       cy.get('[name="year"]').click()
       cy.get('.react-calendar__navigation__label__labelText').click()
       cy.get('.react-calendar__navigation__label__labelText').click()
       cy.contains('button',year).click()
       cy.get('.react-calendar__year-view__months__month').eq(Number(month)-1).click( )
       cy.contains('abbr',date).click()
       
       cy.get('.react-date-picker__inputGroup input').each(($e1,index)=>{
      cy.wrap($e1).invoke('val').then((txt)=>{
        cy.log(txt)
        console.log(txt)
        cy.wrap($e1).invoke('val').should('eq',ex[index])
      })   
       })
  })
})