import LoginPage from '../pages/loginPage';
import ProductsPage from '../pages/productsPage';

describe('Products Page Tests', () => {
  beforeEach(() => {
    LoginPage.visit();
    cy.fixture('users').then((users) => {
      LoginPage.fillUsername(users.validUser.username);
      LoginPage.fillPassword(users.validUser.password);
      LoginPage.submit();
    });
  });

  it('should display the list of products', () => {
    ProductsPage.getProductList().should('have.length', 6);
  });

  it('should add a product to the cart', () => {
    ProductsPage.addProductToCart('Sauce Labs Backpack');
    ProductsPage.goToCart();
    cy.contains('Sauce Labs Backpack').should('be.visible');
  });
});
