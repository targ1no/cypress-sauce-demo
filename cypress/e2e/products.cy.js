import LoginPage from '../pages/loginPage';
import ProductsPage from '../pages/productsPage';

describe('Feature: Products', () => {
  context('Given I am logged in', () => {
    beforeEach(() => {
      LoginPage.visit();
      cy.fixture('users').then((users) => {
        LoginPage.fillUsername(users.validUser.username);
        LoginPage.fillPassword(users.validUser.password);
        LoginPage.submit();
      });
    });

    context('When I view the products page', () => {
      it('Then I should see the list of products', () => {
        ProductsPage.getProductList().should('have.length', 6);
      });
    });

    context('When I add a product to the cart', () => {
      beforeEach(() => {
        ProductsPage.addProductToCart('Sauce Labs Backpack');
        ProductsPage.goToCart();
      });

      it('Then I should see the product in the cart', () => {
        cy.contains('Sauce Labs Backpack').should('be.visible');
      });
    });
  });
});
