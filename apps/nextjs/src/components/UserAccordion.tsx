import React from "react";
import type { User } from "@acme/types";
import { Collapsible, UserCard } from "@acme/ui-react";
import RepoListPreview from "./RepoListPreview";

export type UserAccordionProps = User;

const UserAccordion: React.FC<UserAccordionProps> = ({ avatar_url, login }) => {
  return (
    <Collapsible
      buttonClassName="rounded-xl border-2 border-primary-500 px-5 py-3 w-full"
      panelClassName="pt-5"
      header={<UserCard name={login} avatar_url={avatar_url} />}
    >
      <RepoListPreview username={login} />
    </Collapsible>
  );
};

export default UserAccordion;
