describe ('Test Functionality Login',()=>{

  beforeEach('Go to url',()=>{
    cy.visit('https://www.facebook.com')
    cy.get('.fcb > a').click()
  })

  it('Check UI Page',()=>{
    //cy.get('.fb_logo').should('have.text','facebook')

    cy.get('._8eso').contains('Facebook helps you connect')
    //attribut email & pass
    cy.get('[data-testid="royal_email"]').should('have.attr','placeholder', 'Email address or phone number')
    cy.get('[data-testid="royal_pass"]').should('have.attr','placeholder', 'Password')
    //Button login
    cy.get('[data-testid="royal_login_button"]').should('have.css','background-color','rgb(24, 119, 242)')
    .should('have.css','color','rgb(255, 255, 255)').should('have.text','Log in')
    //Forgot pass 
    cy.get('._6ltj > a').should('have.text','Forgotten password?')
    //Button create new account
    cy.get('[data-testid="open-registration-form-button"]').should('have.css','background-color','rgb(66, 183, 42)').should('have.css','color','rgb(255, 255, 255)').should('have.text','Create new account')
    cy.get('._8esh').contains('Create a Page')
  })

  it('Check Login without filling all data',()=>{
    cy.get('[data-testid="royal_login_button"]').click()
    cy.get('.phl > :nth-child(1)').contains('There was a problem')
  })

  it('Check Login without filling email address',()=>{
    cy.get('[data-testid="royal_pass"]').type('Test123')
    cy.get('[data-testid="royal_login_button"]').click()
    cy.get('.phl > :nth-child(1)').contains('There was a problem')
  })

  it('Check Login without filling password',()=>{
    cy.get('[data-testid="royal_email"]').type('nana@yopmail.com')
    cy.get('[data-testid="royal_login_button"]').click()
    cy.get('.phl > :nth-child(1)').contains('There was a problem')
  })

  it('Check Login with invalid data',()=>{
    cy.get('[data-testid="royal_email"]').type('nana@yopmail.com')
    cy.get('[data-testid="royal_pass"]').type('Test123')
    cy.get('[data-testid="royal_login_button"]').click()
    cy.get('.phl > :nth-child(1)').contains('There was a problem')
  })

  it('Check Login with wrong email format',()=>{
    cy.get('[data-testid="royal_email"]').type('nana@yopmail')
    cy.get('[data-testid="royal_pass"]').type('Test123')
    cy.get('[data-testid="royal_login_button"]').click()
    cy.get('.phl > :nth-child(1)').contains('There was a problem')
  })

  it('Check Login with valid data',()=>{
    cy.get('[data-testid="royal_email"]').type('anak.aiko01@gmail.com')
    cy.get('[data-testid="royal_pass"]').type('aiko2024')
    cy.get('[data-testid="royal_login_button"]').click()
    cy.url().should('include','https://www.facebok.com/feed')

    //seharusnya ketika user telah menginputkan data yang valid maka user diarahkan menuju beranda facebook
    //tetapi dalam scripting menggunakan cypress ini, webpage facebook mengalami error server 
    //sehingga positif case dan negatif case selalu diarahkan menuju error page
  })

})