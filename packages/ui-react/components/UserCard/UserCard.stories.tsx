import UserCard from "./UserCard";
import { Container } from "../Container";
import { Collapsible } from "../Collapsible";

export const Default = () => {
  return (
    <Container>
      <UserCard
        name="johndoe"
        avatar_url="https://avatars.githubusercontent.com/u/64012087?v=4"
      />
    </Container>
  );
};

export const AsCollapsibleButton = () => {
  return (
    <Container>
      <Collapsible
        buttonClassName="rounded-xl border-2 border-primary-500 px-5 py-3"
        panelClassName="pt-4"
        header={
          <UserCard
            name="loremloremloremloremloremloremloremlore"
            avatar_url="https://avatars.githubusercontent.com/u/64012087?v=4"
          />
        }
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eum
          temporibus repudiandae illum. Rem a animi similique, unde excepturi
          non!
        </p>
      </Collapsible>
    </Container>
  );
};
