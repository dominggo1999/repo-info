import React, { useRef, useState } from "react";
import {
  Button,
  TextField,
  LoadingWithMessage,
  EmptyState,
  useScrollToTop,
} from "@acme/ui-react";
import { useHandleErrorRedirect, useUsersByUsername } from "hooks";
import { UserAccordion } from "components";
import Head from "next/head";

const Home = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const [username, setUsername] = useState("");
  const { data, isLoading, error } = useUsersByUsername(username, 5);

  useScrollToTop();

  const search = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (usernameRef.current) {
      const newValue = usernameRef.current.value;
      if (newValue) {
        setUsername(newValue);
      }
    }
  };

  useHandleErrorRedirect(error?.response?.status);

  return (
    <>
      <Head>
        <title>RepoExplorer</title>
      </Head>
      <div data-cy="home-page-container" className="pb-10">
        <form onSubmit={search} className="mb-3 flex w-full gap-x-4">
          {/* Maximum GitHub username length from official docs is 39 */}
          <TextField
            data-cy="github-username-input"
            maxLength={39}
            className="flex w-full"
            ref={usernameRef}
            placeholder="Enter GitHub username"
          />
          <Button type="submit" data-cy="github-username-search-button">
            Search
          </Button>
        </form>

        {/* Message under form */}
        {username && (
          <p data-cy="search-description">
            Showing for user{" "}
            <span className="font-semibold text-primary-500">
              &ldquo;{username}&rdquo;
            </span>
          </p>
        )}

        {username && isLoading && <LoadingWithMessage />}

        {username && !isLoading && (
          <div className="mt-6 flex flex-col gap-y-5">
            {data?.items.map((user) => {
              return <UserAccordion key={user.id} {...user} />;
            })}

            {data?.items.length === 0 && (
              <EmptyState>
                <span>No Results</span>
              </EmptyState>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
