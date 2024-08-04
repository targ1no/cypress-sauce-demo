import locators from './productsPageElements';

class ProductsPage {
  getProductList() {
    return cy.get(locators.PRODUCT_LIST);
  }

  addProductToCart(productName) {
    this.getProductList().contains(productName).parents('.inventory_item').find(locators.ADD_TO_CART_BUTTON).click();
  }

  goToCart() {
    cy.get(locators.CART_LINK).click();
  }
}

export default new ProductsPage();
