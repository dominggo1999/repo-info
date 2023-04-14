import React, { useState } from "react";
import { useHandleErrorRedirect, useRepositories, useUserDetails } from "hooks";
import { useRouter } from "next/router";
import { RepoCard, Combobox, Skeleton, Loading, Button } from "@acme/ui-react";
import type { RepoSortOption } from "hooks";

const sortTypes: RepoSortOption[] = ["name", "updated"];

const RepoListAll = () => {
  const { query } = useRouter();
  const [sort, setSort] = useState<RepoSortOption>("updated");

  const username = query.username as string;

  const { data: userData } = useUserDetails(username);

  const {
    data: reposData,
    isLoading,
    error,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useRepositories({
    username,
    perPage: 10,
    sort,
  });

  useHandleErrorRedirect(error?.response?.status);

  return (
    <div className="my-10 flex flex-col">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-y-3">
        <span className="text-xl font-semibold">
          {userData?.public_repos || 0} total public repos
        </span>
        <Combobox
          className="w-auto"
          setChosenValue={(e) => setSort((e as RepoSortOption) || "latest")}
          options={sortTypes}
          chosenValue={sort}
        />
      </div>

      {isLoading && (
        <Skeleton className="mt-10 h-60 md:h-64">
          <Loading />
        </Skeleton>
      )}

      {!isLoading && (
        <div className="flex flex-col gap-y-5">
          {reposData?.pages.map((page) =>
            page.map((repo) => <RepoCard key={repo.id} {...repo} />),
          )}
          {hasNextPage && (
            <div className="mt-3 flex w-full justify-center">
              <Button
                isLoading={isFetchingNextPage}
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage}
              >
                Load More
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RepoListAll;
