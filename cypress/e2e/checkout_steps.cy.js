import LoginPage from '../pages/loginPage';
import ProductsPage from '../pages/productsPage';
import CartPage from '../pages/cartPage';
import CheckoutPage from '../pages/checkoutPage';

describe('Checkout Page Tests', () => {
  beforeEach(() => {
    LoginPage.visit();
    cy.fixture('users').then((users) => {
      LoginPage.fillUsername(users.validUser.username);
      LoginPage.fillPassword(users.validUser.password);
      LoginPage.submit();
      ProductsPage.addProductToCart('Sauce Labs Backpack');
      ProductsPage.goToCart();
      CartPage.checkout();
    });
  });

  it('should complete the checkout process', () => {
    CheckoutPage.fillCheckoutInfo('John', 'Doe', '12345');
    CheckoutPage.continue();
    CheckoutPage.finish();
    CheckoutPage.getConfirmationMessage().should('contain.text', 'THANK YOU FOR YOUR ORDER');
  });
});
