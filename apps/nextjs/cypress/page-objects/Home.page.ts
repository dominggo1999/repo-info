class HomePage {
  readonly url: string = "/";

  elements = {
    githubUsernameInput: () => cy.getByDataCy("github-username-input"),
    githubUsernameSearchButton: () =>
      cy.getByDataCy("github-username-search-button"),
    homePageContainer: () => cy.getByDataCy("home-page-container"),
    loadingUsersIndicator: () =>
      this.elements
        .homePageContainer()
        .getByDataCy("loading-indicator-with-message"),
    userCards: () =>
      this.elements.homePageContainer().getByDataCy("collapsible-container"),
    searchDecription: () =>
      this.elements.homePageContainer().getByDataCy("search-description"),
    emptyState: () =>
      this.elements.homePageContainer().getByDataCy("empty-state"),
    firstUser: () => this.elements.userCards().first(),
    firstUserProfileButton: () =>
      this.elements.firstUser().getByDataCy("view-profile-button"),
  };

  visit() {
    cy.visit(this.url);
  }

  search(val: string) {
    this.elements.githubUsernameInput().type(val);
    this.elements.githubUsernameSearchButton().click();
    this.elements.loadingUsersIndicator();
    // Wait to load
    cy.wait(1500);
  }
}

export default new HomePage();
