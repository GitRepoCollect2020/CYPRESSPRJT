describe('FB Signup', () => {
     
     it('passes3', () => {
        cy.visit('https://en-gb.facebook.com/.')
        cy.get('[data-testid="open-registration-form-button"]')    //data-testid="open-registration-form-button"
        .click();
        cy.get('input[name=firstname]').type('maria')  //name="firstname"
        cy.get('input[name=lastname]').type('hua')  //name="lastname
        cy.get("select[name='birthday_day']").select(9)  //name="birthday_day"
        cy.get("select[name='birthday_month']").select('Jan') //name="birthday_month"
        cy.get("select[name='birthday_year']").select('2000')//name="birthday_year
        cy.get("input[value='2']").check()     //id="sex"
        
      })
      

     /*
        it("tests Recording 10/3/2024 at 8:37:38 AM", () => {
          cy.visit("https://en-gb.facebook.com/.");
          cy.get("[data-testid='open-registration-form-button']").click();
          cy.location("href").should("eq", "https://en-gb.facebook.com/r.php");
          cy.get("#u_0_8_8M").click();
          cy.get("#u_0_8_8M").type("SSSS");
          cy.get("#u_0_a_\\/m").click();
          cy.get("#u_0_a_\\/m").type("FFF");
          cy.get("#day").click();
          cy.get("#day").type("6");
          cy.get("#month").click();
          cy.get("#month").type("12");
          cy.get("#year").click();
          cy.get("#year").type("2000");
          cy.get("span:nth-of-type(2) input").click();
          cy.get("#u_0_h_JJ").click();
          cy.get("#u_0_h_JJ").type("923232323");
          cy.get("#password_step_input").click();
          cy.get("#password_step_input").type("WWWWWW");
        });
        */
  
  })