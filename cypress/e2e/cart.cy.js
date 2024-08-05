import LoginPage from '../pages/loginPage';
import ProductsPage from '../pages/productsPage';
import CartPage from '../pages/cartPage';

describe('Feature: Cart', () => {
  context('Given I am logged in and have a product in the cart', () => {
    beforeEach(() => {
      LoginPage.visit();
      cy.fixture('users').then((users) => {
        LoginPage.fillUsername(users.validUser.username);
        LoginPage.fillPassword(users.validUser.password);
        LoginPage.submit();
        ProductsPage.addProductToCart('Sauce Labs Backpack');
        ProductsPage.goToCart();
      });
    });

    context('When I remove a product from the cart', () => {
      beforeEach(() => {
        CartPage.removeProduct('Sauce Labs Backpack');
      });

      it('Then the product should no longer be in the cart', () => {
        CartPage.getCartList().should('not.contain', 'Sauce Labs Backpack');
      });
    });
  });
});
