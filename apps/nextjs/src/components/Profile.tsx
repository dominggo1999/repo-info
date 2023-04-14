import React from "react";
import { useRouter } from "next/router";
import { useUserDetails } from "hooks";
import { Skeleton, Loading, UserDetails } from "@acme/ui-react";
import { useHandleErrorRedirect } from "hooks";

const Profile: React.FC = () => {
  const { query } = useRouter();

  const username = query.username as string;

  const { data, isLoading, error } = useUserDetails(username);

  useHandleErrorRedirect(error?.response?.status);

  if (isLoading) {
    return (
      <Skeleton className="h-60 md:h-64">
        <Loading />
      </Skeleton>
    );
  }

  if (!data) return null;

  return <UserDetails {...data} />;
};

export default Profile;
