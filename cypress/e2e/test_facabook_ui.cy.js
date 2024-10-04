describe('validate the application is launching succesfully', () => {
    it('passes', () => {
      cy.visit('https://en-gb.facebook.com/.')
      cy.get('img.fb_logo').should('be.visible')  //element / class
      cy.get('h2._8eso').should("have.text",'Facebook helps you connect and share with the people in your life.');  //element / class
     
    })
    it('passes2', () => {
        cy.visit('https://en-gb.facebook.com/.')
        cy.get('#pass').type('pass');
        cy.get('input[name=email]').type('abc@xyz.com')     //cy.get('input[id=email]').type('abc@xyz.com')
        cy.get('[data-testid="royal_login_button"]')    //data-testid="royal_login_button"   //name="login"
        .click();
      })

      /*
      it('passes3', () => {
        cy.visit('https://en-gb.facebook.com/.')
        cy.get('[data-testid="open-registration-form-button"]')    //data-testid="open-registration-form-button"
        .click();
        cy.get('input[name=firstname]').type('maria')  //name="firstname"
        cy.get('input[name=lastname]').type('hua')  //name="lastname
        cy.get("select[name='birthday_day']").select(9)  //name="birthday_day"
        cy.get("select[name='birthday_month']").select('Jan') //name="birthday_month"
        cy.get("select[name='birthday_year']").select('2000')//name="birthday_year
      })
        */
  
  })