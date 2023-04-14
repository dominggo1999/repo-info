import { HomePage, AuthPage } from "page-objects";
import {
  PASSWORD_ERROR_MESSAGE,
  EMAIL_ERROR_MESSAGE,
  CORRECT_EMAIL,
  CORRECT_PASSWORD,
} from "@acme/services";

describe("Auth", () => {
  it("Protected routes work as expected", () => {
    HomePage.visit();
    cy.wait(500);
    cy.url().should("include", "/auth");

    cy.visit("/user/dominggo1999");
    cy.wait(500);
    cy.url().should("include", "/auth");
  });

  it("Should display email error", () => {
    HomePage.visit();

    AuthPage.elements.emailField().type("wrong@email.com");
    AuthPage.elements.passwordField().type(CORRECT_PASSWORD);
    AuthPage.elements.submitButton().click();

    AuthPage.elements.errorMessage();
    cy.contains(EMAIL_ERROR_MESSAGE);
  });

  it("Should display password error", () => {
    HomePage.visit();

    AuthPage.elements.emailField().type(CORRECT_EMAIL);
    AuthPage.elements.passwordField().type("wrong password");
    AuthPage.elements.submitButton().click();

    AuthPage.elements.errorMessage();
    cy.contains(PASSWORD_ERROR_MESSAGE);
  });

  it.only("Should be able to login successfully", () => {
    HomePage.visit();
    AuthPage.login();
    HomePage.elements.githubUsernameInput();
  });
});
