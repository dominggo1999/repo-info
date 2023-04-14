import { useQuery } from "@tanstack/react-query";
import type { GetUsersResponse } from "@acme/types";
import { AxiosError } from "axios";
import { getUsersByUsername } from "@acme/services";

const useUsersByUsername = (username: string, limit: number) => {
  return useQuery<GetUsersResponse, AxiosError>(
    ["users", username],
    () => getUsersByUsername(username, limit),
    {
      enabled: Boolean(username),
    },
  );
};

export default useUsersByUsername;
