class HeaderSection {
  elements = {
    container: () => cy.getByDataCy("header"),
    brand: () => cy.getByDataCy("header-brand"),
  };
}

export default new HeaderSection();
