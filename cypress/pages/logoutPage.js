import locators from './logoutPageElements';

class LogoutPage {
    performLogout() {
        cy.get(locators.MENU_BUTTON).click();
        cy.get(locators.LOGOUT_LINK).click();
    }
}

export default new LogoutPage();
