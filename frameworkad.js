///<reference types="cypress"/>
import DetailPage from'../PageObject/DetailPage'
import LoginPage from'../PageObject/loginpage'

describe(' test adactinhotel suit case',function(){
     before(function(){
        cy.fixture('example').then((data)=>{
            this.data=data  })})

            it('Test Case ',function(){
              cy.visit('https://rahulshettyacademy.com/angularpractice/shop')
              
              this.data.productsName.forEach((element)=>{
              cy.selectionName(element)
           

                                        })  })
     
                                  
//cy.pause()
        it('my test case login',function(){
        cy.visit('https://adactinhotelapp.com/')
         const loginpage= new LoginPage();
         const detailpage= new DetailPage();
        loginpage.getUserName().type(this.data.username)
        loginpage.getPassWord().type(this.data.password)
        loginpage.getLoginBtn().click()
        detailpage.getLocation().select(this.data.loction)
        detailpage.getHotel().select(this.data.hotel)
        detailpage.getRoomType().select(this.data.roomtype)
        detailpage.getNoOfRoom().select(this.data.noofroom)
        detailpage.getCheckIn().type('{enter}')
       detailpage.getSelect().check()
       detailpage.getConBtn().click()
       detailpage.getFristName().type(this.data.name)
       detailpage.getLastName().type(this.data.Lastname)
       detailpage.getAddress().type(this.data.address)
       detailpage.getCardNo().type(this.data.CCno)
       detailpage.getCardType().select(this.data.CCtype)
       detailpage.getExmonth().select(this.data.Exmonth)
       detailpage.getExyear().select(this.data.Exyear)
       detailpage.getCvv().type(this.data.Cvv)
       detailpage.getBookBtn().click()
       cy.wait(5000)
       detailpage.getButton().click()
       detailpage.getLogout().click()
 })
 
            })
