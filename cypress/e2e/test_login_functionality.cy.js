import { LoginFunction, Validator } from "../utils/LoginPage";

describe('validate the application login functionality', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/index.html');
    })
  
    it('Login Success', () => {
       cy.login('standard_user','secret_sauce');
      //LoginFunction('standard_user','secret_sauce');
      cy.get('div.product_label').should("have.text",'Products');

     })

    it('Login Failure', () => {
 
        LoginFunction('standard_user','ccccc')
        Validator('Epic sadface: Username and password do not match any user in this service'); 
      })

    it('Login Failure for locked user', () => {
        LoginFunction('standard_out_user6','cccsecret_saucec')
        Validator('Epic sadface: Username and password do not match any user in this service'); 
      })
  })

