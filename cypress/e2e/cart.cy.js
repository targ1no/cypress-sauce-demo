// cypress/integration/cart.spec.js
import LoginPage from '../pages/loginPage';
import ProductsPage from '../pages/productsPage';
import CartPage from '../pages/cartPage';

describe('Cart Page Tests', () => {
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

  it('should remove a product from the cart', () => {
    CartPage.removeProduct('Sauce Labs Backpack');
    CartPage.getCartList().should('not.contain', 'Sauce Labs Backpack');
  });
});
