import RepoCard from "./RepoCard";
import type { RepoCardProps } from "./RepoCard";
import { Container } from "../Container";
import { createSequentialNumbersArray } from "../../utils/createSequentialNumbersArray";

const dummyRepoData: RepoCardProps = {
  name: "Test",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, laborum.",
  stargazers_count: 200,
  forks: 100,
  language: "C++",
  homepage: "https://github.com/",
  svn_url: "https://github.com/",
  updated_at: new Date().toDateString(),
};

export const Default = () => {
  return (
    <Container className="flex flex-col gap-y-4 py-10">
      {createSequentialNumbersArray(4).map((key) => {
        return <RepoCard key={key} {...dummyRepoData} />;
      })}
    </Container>
  );
};
