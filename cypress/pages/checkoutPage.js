import locators from './checkoutPageElements';

class CheckoutPage {
  fillCheckoutInfo(firstName, lastName, postalCode) {
    cy.get(locators.FIRST_NAME_INPUT).type(firstName);
    cy.get(locators.LAST_NAME_INPUT).type(lastName);
    cy.get(locators.POSTAL_CODE_INPUT).type(postalCode);
  }

  continue() {
    cy.get(locators.CONTINUE_BUTTON).click();
  }

  finish() {
    cy.get(locators.FINISH_BUTTON).click();
  }

  getConfirmationMessage() {
    return cy.get(locators.CONFIRMATION_MESSAGE);
  }
}

export default new CheckoutPage();
