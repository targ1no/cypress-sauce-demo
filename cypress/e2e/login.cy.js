import LoginPage from '../pages/loginPage';

describe('Feature: Login', () => {
  context('Given I access the login page', () => {
    beforeEach(() => {
      LoginPage.visit();
    });

    context('When I enter valid credentials', () => {
      beforeEach(() => {
        cy.fixture('users').then((users) => {
          LoginPage.fillUsername(users.validUser.username);
          LoginPage.fillPassword(users.validUser.password);
          LoginPage.submit();
        });
      });

      it('Then I should be successfully logged in', () => {
        cy.url().should('include', '/inventory.html');
      });
    });

    context('When I enter invalid credentials', () => {
      beforeEach(() => {
        cy.fixture('users').then((users) => {
          LoginPage.fillUsername(users.invalidUser.username);
          LoginPage.fillPassword(users.invalidUser.password);
          LoginPage.submit();
        });
      });

      it('Then an error message should be displayed', () => {
        LoginPage.getErrorMessage().should('contain.text', 'Epic sadface: Username and password do not match any user in this service');
      });
    });
  });
});
