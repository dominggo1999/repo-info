/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect } from "react";
import { useRouter } from "next/router";

const useHandleErrorRedirect = (errorStatusCode?: number) => {
  const { push } = useRouter();

  useEffect(() => {
    if (errorStatusCode === 404) {
      push("/404");
    } else if (errorStatusCode) {
      push("/");
    }
  }, [errorStatusCode, push]);
};

export default useHandleErrorRedirect;
