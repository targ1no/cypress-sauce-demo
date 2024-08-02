import LoginPage from '../pages/loginPage';

describe('Login Tests', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('should login with valid credentials', function() {
    cy.fixture('users').then((users) => {
      LoginPage.fillUsername(users.validUser.username);
      LoginPage.fillPassword(users.validUser.password);
      LoginPage.submit();
      cy.url().should('include', '/inventory.html');
    });
  });

  it('should display error with invalid credentials', function() {
    cy.fixture('users').then((users) => {
      LoginPage.fillUsername(users.invalidUser.username);
      LoginPage.fillPassword(users.invalidUser.password);
      LoginPage.submit();
      LoginPage.getErrorMessage().should('contain.text', 'Epic sadface: Username and password do not match any user in this service');
    });
  });
});
