import { LoginFunction } from "../utils/LoginPage";
import { ValidateProductPrice } from "../utils/product_page";



describe('validate the application login functionality', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/index.html');
        LoginFunction('standard_user','secret_sauce');
    })
  
    it('Validate the Product', () => {
      cy.get('div.product_label').should("have.text",'Products');
      ValidateProductPrice('Sauce Labs Backpack','$29.99')
     })
  })


