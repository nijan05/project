///<reference types="cypress"/>
describe('test Api suite case',()=>{
it('Api test case1',()=>{
//POST method     
cy.request('POST','http://216.10.245.166/Library/Addbook.php'
    ,{
        "name":"Learn Appium Automation with Java",
        "isbn":"bcd",
        "aisle":"227",
        "author":"John foe"
        }
        ).then((response)=>{

    expect(response.body).to.have.property('Msg','Book Already Exists')
    expect(response.status).to.eq(200)
})
})

it('Api test case2',()=>{
    //GET method     
    cy.request('GET',' http://216.10.245.166/Library/GetBook.php?name=Learn Appium Automation with Java').then((response)=>{
    
       // expect(response.body).to.have.property('id','240')
        expect(response.status).to.eq(200)
    })

    })
    it('Api test case3',()=>{
        //GET method     
        cy.request('GET','http://216.10.245.166/Library/GetBook.php?AuthorName=John foe').then((response)=>{
        
           // expect(response.body).to.have.property('id','240')
            expect(response.status).to.eq(200)
        })
    
        })
        it('Api test case4',()=>{
            //GET method     
            cy.request('POST',' http://216.10.245.166/Library/DeleteBook.php',{
 
                "ID" : "a23h345122332"
                 
                } 
                ).then((response)=>{
            
                expect(response.body).to.have.property('msg','book is successfully deleted')
                expect(response.status).to.eq(200)
            })
        
            })
       




})
