/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios from "axios";

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `Bearer ${
      process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN ||
      // @ts-ignore
      import.meta.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN ||
      ""
    }`,
  },
});

export default githubApi;
