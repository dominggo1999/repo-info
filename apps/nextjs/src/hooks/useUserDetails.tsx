import { useQuery } from "@tanstack/react-query";
import type { GetUserDetailsResponse } from "@acme/types";
import type { AxiosError } from "axios";
import { getUserDetails } from "@acme/services";

const useUserDetails = (username: string) => {
  return useQuery<GetUserDetailsResponse, AxiosError>(
    ["user", username],
    () => getUserDetails(username),
    {
      enabled: Boolean(username),
      refetchOnWindowFocus: false,
    },
  );
};

export default useUserDetails;
