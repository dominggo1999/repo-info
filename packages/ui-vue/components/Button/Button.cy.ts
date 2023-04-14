import Button from "./Button.vue";
import { mount } from "cypress/vue";

describe("Render Button", () => {
  it("Should render button correctly", () => {
    mount(Button);
  });
});
