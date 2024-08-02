import locators from './cartPageElements';

class CartPage {
  getCartList() {
    return cy.get(locators.CART_LIST);
  }

  removeProduct(productName) {
    cy.contains(productName).parent().find(locators.REMOVE_BUTTON).click();
  }

  checkout() {
    cy.get(locators.CHECKOUT_BUTTON).click();
  }
}

export default new CartPage();

