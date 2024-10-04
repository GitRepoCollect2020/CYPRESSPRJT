


/*
export function ValidateProductPrice(ProductName,ProductPrice) {
    //return cy.xpath(`//div[text()=${ProductName}]/following::div[@class="inventory_item_price"][1]`).text()
    //cy.xpath(`//div[text()="${ProductName}"]/following::div[@class="inventory_item_price"][1]`).then(function ($elem) {
    //    return $elem.text()
    cy.xpath(`//div[text()="${ProductName}"]/following::div[@class="inventory_item_price"][1]`).should('have.text',ProductPrice)
    
}
*/
export function ValidateProductPrice(ProductName,ProductPrice) {


    cy.xpath(`//div[text()="${ProductName}"]/following::div[@class="inventory_item_price"][1]`).should('have.text',ProductPrice)


}


