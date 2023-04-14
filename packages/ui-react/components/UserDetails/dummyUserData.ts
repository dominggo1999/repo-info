import type { GetUserDetailsResponse } from "@acme/types";

export const dummyUserData = {
  login: "dominggo1999",
  id: 64012087,
  node_id: "MDQ6VXNlcjY0MDEyMDg3",
  avatar_url: "/images/avatar-demo.webp",
  gravatar_id: "",
  url: "https://api.github.com/users/dominggo1999",
  html_url: "https://github.com/dominggo1999",
  followers_url: "https://api.github.com/users/dominggo1999/followers",
  following_url:
    "https://api.github.com/users/dominggo1999/following{/other_user}",
  gists_url: "https://api.github.com/users/dominggo1999/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/dominggo1999/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/dominggo1999/subscriptions",
  organizations_url: "https://api.github.com/users/dominggo1999/orgs",
  repos_url: "https://api.github.com/users/dominggo1999/repos",
  events_url: "https://api.github.com/users/dominggo1999/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/dominggo1999/received_events",
  type: "User",
  site_admin: false,
  name: "r0",
  company: "[object, Object]",
  blog: "",
  location: "404",
  email: null,
  hireable: null,
  bio: "undefined",
  twitter_username: null,
  public_repos: 187,
  public_gists: 0,
  followers: 0,
  following: 2,
  created_at: "2020-04-20T11:00:09Z",
  updated_at: "2023-03-03T15:11:22Z",
} as GetUserDetailsResponse;
