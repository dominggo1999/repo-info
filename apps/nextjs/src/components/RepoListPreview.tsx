import React from "react";
import { useRepositories } from "hooks";
import {
  Button,
  Loading,
  RepoCard,
  Link,
  Skeleton,
  EmptyState,
} from "@acme/ui-react";
import { BiLinkExternal } from "react-icons/bi";

export interface RepoListPreviewProps {
  username: string;
}

const RepoListPreview: React.FC<RepoListPreviewProps> = ({ username }) => {
  const {
    data: reposData,
    isLoading,
    error,
    isNoResults,
  } = useRepositories({
    username,
    perPage: 3,
  });

  if (isLoading) {
    return (
      <Skeleton className="h-60 w-full md:h-64">
        <Loading />
      </Skeleton>
    );
  }

  if (error) {
    return <EmptyState>An error has occured</EmptyState>;
  }

  const renderViewProfileButton = () => {
    return (
      <Button
        data-cy="view-profile-button"
        icon={BiLinkExternal}
        component={Link}
        href={`/user/${username}`}
      >
        <span className="max-w-[18rem] break-all sm:max-w-full">
          View <span className="font-semibold">{username}</span> Profile
        </span>
      </Button>
    );
  };

  if (isNoResults) {
    return (
      <EmptyState>
        <span>This user does not have any repositories yet.</span>
        {renderViewProfileButton()}
      </EmptyState>
    );
  }

  return (
    <div data-cy="repo-list-preview" className="flex flex-col gap-y-5">
      {reposData?.pages.map((page) =>
        page.map((repo) => <RepoCard key={repo.id} {...repo} />),
      )}
      {renderViewProfileButton()}
    </div>
  );
};

export default RepoListPreview;
