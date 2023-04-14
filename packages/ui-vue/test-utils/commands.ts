/// <reference types="cypress" />

export const getByDataCy = (value: string) => {
  return cy.get(`[data-cy=${value}]`);
};
