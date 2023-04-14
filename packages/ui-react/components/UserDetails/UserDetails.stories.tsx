import { Container } from "../Container";
import UserDetails from "./UserDetails";
import { dummyUserData } from "./dummyUserData";

export const Default = () => {
  return (
    <Container>
      <UserDetails {...dummyUserData} />
    </Container>
  );
};
