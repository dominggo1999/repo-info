import React from "react";
import type { Repository } from "@acme/types";
import { NumberIcon } from "../NumberIcon";
import { Button } from "../Button";
import { Link } from "../Link";
import {
  AiFillStar,
  AiOutlineFork,
  AiFillGithub,
  AiFillHome,
} from "react-icons/ai";
import { formatDate } from "../../utils/date";
import { removeProtocolFromUrl } from "../../utils/url";

export type RepoCardProps = Pick<
  Repository,
  | "name"
  | "description"
  | "stargazers_count"
  | "forks"
  | "language"
  | "homepage"
  | "svn_url"
  | "updated_at"
>;

const RepoCard: React.FC<RepoCardProps> = ({
  name,
  description,
  stargazers_count,
  forks,
  language,
  homepage,
  svn_url,
  updated_at,
}) => {
  return (
    <div
      data-cy="repo-card-container"
      className="flex flex-wrap items-center justify-between gap-x-10 gap-y-5 rounded-xl bg-primary-200/40 p-5 dark:bg-background-300 sm:flex-nowrap"
    >
      {/* Left side */}
      <div className="sm-full flex w-full flex-col">
        <span className="mb-1 inline-block break-all text-xl font-semibold text-primary-500 sm:text-2xl">
          {name}
        </span>
        {description && (
          <span className="mb-3 text-sm text-black/80 line-clamp-2 dark:text-white/80">
            {description}
          </span>
        )}
        {language && (
          <span className="mb-2 text-sm font-medium">{language}</span>
        )}

        <span className="mb-2 text-sm text-black/80 dark:text-white/80">
          Updated on {formatDate(updated_at)}
        </span>
        <div className="flex gap-x-3">
          <NumberIcon icon={<AiFillStar />} number={stargazers_count} />
          <NumberIcon icon={<AiOutlineFork />} number={forks} />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex flex-wrap gap-2 sm:min-w-[13.75rem] sm:flex-nowrap">
        {/* 1.Not all repo have homepage
            2.We are sure the link is external here so we dont need to check the prefix http or https (see https://stackoverflow.com/questions/43803778/href-without-https-prefix)
        */}
        {homepage && (
          <Button
            icon={AiFillHome}
            size="sm"
            href={`//${removeProtocolFromUrl(homepage)}`}
            external
            component={Link}
          >
            Homepage
          </Button>
        )}

        <Button
          className="sm:ml-auto"
          icon={AiFillGithub}
          size="sm"
          href={svn_url}
          external
          component={Link}
        >
          GitHub
        </Button>
      </div>
    </div>
  );
};

export default RepoCard;
