import { useInfiniteQuery } from "@tanstack/react-query";
import type { GetRepositoriesResponse } from "@acme/types";
import { AxiosError } from "axios";
import { getRepositories } from "@acme/services";

export type RepoSortOption = "name" | "updated";

export interface RepositoriesParams {
  username: string;
  sort?: RepoSortOption;
  perPage: number;
}

const useRepositories = ({
  username,
  sort = "updated",
  perPage,
}: RepositoriesParams) => {
  const results = useInfiniteQuery<GetRepositoriesResponse, AxiosError>(
    ["repositories", username, sort, perPage],
    ({ pageParam }) => getRepositories({ username, sort, perPage, pageParam }),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.length === 0) return false;

        const nextPage = pages.length + 1;

        return nextPage;
      },
      enabled: Boolean(username),
    },
  );

  const currentPage = results?.data?.pages?.length || 1;

  const isNoResults = JSON.stringify(results?.data?.pages) === "[[]]";

  return { ...results, isNoResults, currentPage };
};

export default useRepositories;
