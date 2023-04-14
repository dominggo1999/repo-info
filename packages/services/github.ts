import {
  GetRepositoriesResponse,
  GetUsersResponse,
  GetUserDetailsResponse,
  RepoSortOption,
} from "@acme/types";
import githubApi from "./config/githubAPI";

export const getRepositories = async ({
  username,
  sort = "updated",
  perPage = 10,
  pageParam = 1,
}: {
  username: string;
  sort?: RepoSortOption;
  perPage?: number;
  pageParam?: number;
}) => {
  const response = await githubApi.get<GetRepositoriesResponse>(
    `/users/${username}/repos`,
    {
      params: {
        sort,
        per_page: perPage,
        page: pageParam,
      },
    },
  );
  return response.data;
};

export const getUsersByUsername = async (username: string, limit: number) => {
  const response = await githubApi.get<GetUsersResponse>("/search/users", {
    params: {
      q: username,
      per_page: limit,
    },
  });
  return response.data;
};

export const getUserDetails = async (username: string) => {
  const response = await githubApi.get<GetUserDetailsResponse>(
    `/users/${username}`,
  );
  return response.data;
};
