import React from "react";
import { Profile, RepoListAll } from "components";
import Head from "next/head";
import { useRouter } from "next/router";

const UserDetails = () => {
  const { query } = useRouter();
  const username = query.username as string;

  return (
    <>
      <Head>
        <title>{username}</title>
      </Head>
      <Profile />
      <RepoListAll />
    </>
  );
};

export default UserDetails;
