import LoginPage from '../pages/loginPage';
import ProductsPage from '../pages/productsPage';
import CartPage from '../pages/cartPage';
import CheckoutPage from '../pages/checkoutPage';

describe('Feature: Checkout', () => {
  context('Given I am logged in, have a product in the cart, and proceed to checkout', () => {
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

    context('When I complete the checkout process', () => {
      beforeEach(() => {
        CheckoutPage.fillCheckoutInfo('John', 'Doe', '12345');
        CheckoutPage.continue();
        CheckoutPage.finish();
      });

      it('Then I should see a confirmation message', () => {
        CheckoutPage.getConfirmationMessage().should('contain.text', 'THANK YOU FOR YOUR ORDER');
      });
    });
  });
});
