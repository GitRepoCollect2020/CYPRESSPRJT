
describe('dropdown', () => {

  
    it("change the dropdown", () => {
        cy.visit("https://www.bstackdemo.com/")
        cy.get("select").select("Highest to lowest")
    })

    it("change the dropdown", () => {
        cy.visit("https://www.bstackdemo.com/")
        cy.get("select")
        .invoke("val")
        .should("eq", "")
    })

  })

