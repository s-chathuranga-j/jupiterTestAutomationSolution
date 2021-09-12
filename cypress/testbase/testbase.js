/// <reference types="cypress" />

export function Open(url)
{
    cy.visit(url);
}

export function Click(locator)
{
    if(locator.includes('//'))
        cy.xpath(locator).should('be.visible').click();
    else
        cy.get(locator).should('be.visible').click();
}

export function ForceClick(locator)
{
    if(locator.includes('//'))
        cy.xpath(locator).should('be.visible').click({force: true});
    else
        cy.get(locator).should('be.visible').click({force:true});
}

export function Fill(locator, text)
{
    if(locator.includes('//'))
    {
        cy.xpath(locator).should('be.visible').should('be.enabled').clear();
        cy.xpath(locator).should('be.visible').should('be.enabled').type(text);
    }
    else
    {
        cy.get(locator).should('be.visible').should('be.enabled').clear();
        cy.get(locator).should('be.visible').should('be.enabled').type(text);
    }
}

export function SeePartialText(locator, actualText, expectedText)
{
    if(locator.includes('//'))
        cy.xpath(locator).should('contain.text', actualText, expectedText);
    else
        cy.get(locator).should('contain.text', actualText, expectedText);
}

export function SeeText(locator, actualText, expectedText)
{
    if(locator.includes('//'))
        cy.xpath(locator).should('have.text', actualText, expectedText);
    else
        cy.get(locator).should('have.text', actualText, expectedText);
}

export function SeeElement(locator)
{
    if(locator.includes('//'))
        cy.xpath(locator).should('be.visible')
    else
        cy.get(locator).should('be.visible');
}

export function DontSeeElement(locator)
{
    if(locator.includes('//'))
        cy.xpath(locator).should('not.be.visible')
    else
        cy.get(locator).should('not.be.visible');
}

export function DontSeeElementExist(locator)
{
    if(locator.includes('//'))
        cy.xpath(locator).should('not.exist')
    else
        cy.get(locator).should('not.exist');
}

export function WaitUntilElementNotExist(locator)
{
    if(locator.includes('//'))
        cy.xpath(locator, {timeout: 120000}).should('not.exist');
    else
        cy.get(locator, {timeout: 120000}).should('not.exist');
}

