context('Cypress Demo Login', () => {
 

  it('Login Scenario', () => {
    // https://on.cypress.io/go
      
    cy.visit('http://automationpractice.com/index.php')
    cy.get('.login').click()
    cy.get('#email').type('sharmabhawna220@gmail.com')
    cy.get('#passwd').type('1234') 
    cy.get('#SubmitLogin > span').click()  
    cy.title().should('include','My Account')
  })
})