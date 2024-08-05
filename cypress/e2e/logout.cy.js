import LoginPage from '../pages/loginPage';
import LogoutPage from '../pages/logoutPage';

describe('Feature: Logout', () => {
  context('Given I am logged in', () => {
    beforeEach(() => {
      LoginPage.visit();
      cy.fixture('users').then((users) => {
        LoginPage.fillUsername(users.validUser.username);
        LoginPage.fillPassword(users.validUser.password);
        LoginPage.submit();
      });
    });

    context('When I log out', () => {
      beforeEach(() => {
        LogoutPage.performLogout();
      });

      it('Then I should be redirected to the login page', () => {
        cy.url().should('include', '/');
        cy.get('.login-box').should('be.visible');
      });
    });
  });
});
