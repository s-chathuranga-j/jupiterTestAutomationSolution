/// <reference types="cypress" />
import {
    I_AddProductToCart,
    I_ValidateItemInCart, I_VerifyCartTotal,
    I_VerifyPriceForProduct,
    I_VerifyProductSubtotal
} from "../../helpers/helpers";

const HomePage = require('../../pageobjects/HomePage.json')
const ContactPage = require('../../pageobjects/ContactPage.json')
const ShopPage = require('../../pageobjects/ShopPage.json')
const TestData = require('../../testdata/testdata.json')
const I = require('../../testbase/testbase')

describe('Jupiter Test Suite', ()=> {
    beforeEach(()=> {
        I.Open(Cypress.config().baseUrl);
    })

    afterEach(()=> {
            cy.task('resetTotal');
    })

    it('test scenario one', ()=> {
        I.Click(HomePage.ContactLink);
        I.Click(ContactPage.SubmitBtn);
        I.SeeElement(ContactPage.ForenameValidationError);
        I.SeeElement(ContactPage.EmailValidationError);
        I.SeeElement(ContactPage.MessageValidationError);
        I.SeeElement(ContactPage.ErrorAlertMessage);
        I.Fill(ContactPage.Forename, TestData.TestCaseOne.UserDetails.Forename);
        I.Fill(ContactPage.Email, TestData.TestCaseOne.UserDetails.Email);
        I.Fill(ContactPage.Message, TestData.TestCaseOne.UserDetails.Message);
        I.DontSeeElementExist(ContactPage.ForenameValidationError);
        I.DontSeeElementExist(ContactPage.EmailValidationError);
        I.DontSeeElementExist(ContactPage.MessageValidationError);
        I.DontSeeElementExist(ContactPage.ErrorAlertMessage);
    })

    Cypress._.times(5, ()=> {
        it('test scenario two', ()=> {
            I.Click(HomePage.ContactLink);
            I.Fill(ContactPage.Forename, TestData.TestCaseTwo.UserDetails.Forename);
            I.Fill(ContactPage.Email, TestData.TestCaseTwo.UserDetails.Email);
            I.Fill(ContactPage.Message, TestData.TestCaseTwo.UserDetails.Message);
            I.Click(ContactPage.SubmitBtn);
            I.WaitUntilElementNotExist(ContactPage.SendingFeedBackPopUp);
            I.SeeElement(ContactPage.FeedbackSuccessAlert);
            I.SeePartialText(ContactPage.FeedbackSuccessAlert, TestData.TestCaseTwo.UserDetails.Forename);
        })
    });

    it('test scenario three', () => {
        I.Click(HomePage.ShopLink);
        I_AddProductToCart(TestData.TestCaseThree.ProductDetails.ProductOne.Name, TestData.TestCaseThree.ProductDetails.ProductOne.Count);
        I_AddProductToCart(TestData.TestCaseThree.ProductDetails.ProductTwo.Name, TestData.TestCaseThree.ProductDetails.ProductTwo.Count);
        I.Click(ShopPage.CartLink);
        I_ValidateItemInCart(TestData.TestCaseThree.ProductDetails.ProductOne.Name);
        I_ValidateItemInCart(TestData.TestCaseThree.ProductDetails.ProductTwo.Name);
    });

    it('test scenario four', () => {
        I.Click(HomePage.ShopLink);
        I_AddProductToCart(TestData.TestCaseFour.ProductDetails.ProductOne.Name, TestData.TestCaseFour.ProductDetails.ProductOne.Count);
        I_AddProductToCart(TestData.TestCaseFour.ProductDetails.ProductTwo.Name, TestData.TestCaseFour.ProductDetails.ProductTwo.Count);
        I_AddProductToCart(TestData.TestCaseFour.ProductDetails.ProductThree.Name, TestData.TestCaseFour.ProductDetails.ProductThree.Count);
        I.Click(ShopPage.CartLink);
        I_VerifyPriceForProduct(TestData.TestCaseFour.ProductDetails.ProductOne.Name, TestData.TestCaseFour.ProductDetails.ProductOne.Price);
        I_VerifyPriceForProduct(TestData.TestCaseFour.ProductDetails.ProductTwo.Name, TestData.TestCaseFour.ProductDetails.ProductTwo.Price);
        I_VerifyPriceForProduct(TestData.TestCaseFour.ProductDetails.ProductThree.Name, TestData.TestCaseFour.ProductDetails.ProductThree.Price);
        I_VerifyProductSubtotal(TestData.TestCaseFour.ProductDetails.ProductOne.Name, TestData.TestCaseFour.ProductDetails.ProductOne.Count, TestData.TestCaseFour.ProductDetails.ProductOne.Price);
        I_VerifyProductSubtotal(TestData.TestCaseFour.ProductDetails.ProductTwo.Name, TestData.TestCaseFour.ProductDetails.ProductTwo.Count, TestData.TestCaseFour.ProductDetails.ProductTwo.Price);
        I_VerifyProductSubtotal(TestData.TestCaseFour.ProductDetails.ProductThree.Name, TestData.TestCaseFour.ProductDetails.ProductThree.Count, TestData.TestCaseFour.ProductDetails.ProductThree.Price);
        I_VerifyCartTotal();
    });
})