import { HomePage, AuthPage } from "page-objects";

describe("Displaying users", () => {
  beforeEach(() => {
    AuthPage.visit();
    AuthPage.login();
  });

  it("Should display an input field and a button to search for a user using their username", () => {
    HomePage.elements.githubUsernameInput();
    HomePage.elements.githubUsernameSearchButton();
  });

  it("Should display a maximum of 5 users", () => {
    HomePage.search("a");
    HomePage.elements.userCards().should("have.length", 5);
  });

  it("Should display a search description with the correct username", () => {
    HomePage.search("a");

    HomePage.elements
      .searchDecription()
      .should("contain.text", "Showing for user “a”");
  });

  it("Should not trigger a fetch if there is no username", () => {
    HomePage.elements.githubUsernameSearchButton().click();

    HomePage.elements.searchDecription().should("not.exist");
    HomePage.elements.userCards().should("not.exist");
  });

  it("Should be able to expand user accordion", () => {
    HomePage.search("dominggo1999");
    HomePage.elements.userCards().first().click();
    HomePage.elements
      .firstUser()
      .getByDataCy("repo-card-container")
      .should("have.length", 3);

    HomePage.elements.firstUserProfileButton();
  });

  it("should display a 'no results' message if the user is not found", () => {
    HomePage.search("pgeawpkgeawepgewgewgewagewgew1242141");
    HomePage.elements.emptyState().should("contain.text", "No Results");
  });

  it("should redirect to the user/profile when clicking the view profile button", () => {
    HomePage.search("dominggo1999");
    HomePage.elements.firstUser().click();
    HomePage.elements.firstUserProfileButton().click();

    cy.url().should("include", "/user/dominggo1999");
  });
});
