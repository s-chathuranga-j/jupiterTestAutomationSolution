const ShopPage = require('../pageobjects/ShopPage.json')
const CartPage = require('../pageobjects/CartPage.json')

export function I_AddProductToCart(productName, count)
{
    let buyButtonLocator = (ShopPage.BuyButton).replace('ProductName', productName);
    for(let i = 0; i < count; i++)
    {
        cy.xpath(buyButtonLocator).should('exist').should('be.visible').click();
    }
}

export function I_ValidateItemInCart(productName)
{
    cy.get('td').contains(productName).should('exist');
}

export function I_VerifyPriceForProduct(productName, price)
{
    const priceLocator = (CartPage.ProductPrice).replace("ProductName", productName).replace("ProductUnitPrice", price);
    cy.xpath(priceLocator).should('contain.text', price);
}

export function I_VerifyProductSubtotal(productName, count, price)
{
    let unitPrice = parseFloat(price.toString());
    let subtotal = unitPrice * count;
    const subtotalLocator = (CartPage.ProductSubtotal).replace("ProductName", productName).replace("ProductSubtotal", subtotal);
    console.log(subtotalLocator)
    cy.xpath(subtotalLocator).should('exist');
    cy.task('addSubtotal', subtotal);
}

export function I_VerifyCartTotal()
{
    cy.get(CartPage.CartTotalPrice).then($actualPrice => {
        let total = parseFloat($actualPrice.text().toString().replace('Total: ', ''));
        cy.task('getTotal').should('equal', total);
    })

}