import React from "react";
import UserDetails from "./UserDetails";
import { dummyUserData } from "./dummyUserData";

describe("UserDetails component", () => {
  it("should render correctly", () => {
    cy.mount(<UserDetails {...dummyUserData} />);
    // TODO : add more tests
  });
});
