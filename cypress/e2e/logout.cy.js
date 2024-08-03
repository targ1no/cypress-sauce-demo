import LoginPage from '../pages/loginPage';
import LogoutPage from '../pages/logoutPage';

describe('Logout Tests', () => {
    beforeEach(() => {
        LoginPage.visit();
        cy.fixture('users').then((users) => {
            LoginPage.fillUsername(users.validUser.username);
            LoginPage.fillPassword(users.validUser.password);
            LoginPage.submit();
        });
    });

    it('should logout successfully and redirect to login page', () => {
        LogoutPage.performLogout();

        cy.url().should('include', '/');
        cy.get('.login-box').should('be.visible');
    });
});
