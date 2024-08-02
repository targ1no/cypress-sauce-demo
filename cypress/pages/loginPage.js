// cypress/pageObjects/loginPage.js
import locators from './loginPageElements';

class LoginPage {
  visit() {
    cy.visit('https://www.saucedemo.com/v1/');
  }

  fillUsername(username) {
    cy.get(locators.USERNAME_INPUT).type(username);
  }

  fillPassword(password) {
    cy.get(locators.PASSWORD_INPUT).type(password);
  }

  submit() {
    cy.get(locators.LOGIN_BUTTON).click();
  }

  getErrorMessage() {
    return cy.get(locators.ERROR_MESSAGE);
  }
}

export default new LoginPage();
