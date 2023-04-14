import { CORRECT_EMAIL, CORRECT_PASSWORD } from "@acme/services";

class AuthPage {
  readonly url: string = "/auth";

  elements = {
    emailField: () => cy.getByDataCy("email"),
    passwordField: () => cy.getByDataCy("password"),
    submitButton: () => cy.getByDataCy("submit-button"),
    errorMessage: () => cy.getByDataCy("auth-error-message"),
  };

  visit() {
    cy.visit(this.url);
  }

  login() {
    this.elements.emailField().type(CORRECT_EMAIL);
    this.elements.passwordField().type(CORRECT_PASSWORD);
    this.elements.submitButton().click();

    // Wait to load
    cy.wait(2000);
  }
}

export default new AuthPage();
