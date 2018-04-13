import React from 'react';
import gql from 'graphql-tag';
import Language, {LANGUAGE_FRAGMENT} from './Language';

const RepoStats = ({repo}) => (
  <div>
    <Language language={repo.primaryLanguage} />
    <span> - {repo.forkCount}</span>
    <span> - {repo.stargazers.totalCount}</span>
  </div>
);

export const REPO_STATS_FRAGMENT = gql`
  fragment RepoStats on Repository {
    id
    forkCount
    stargazers {
      totalCount
    }
    primaryLanguage {
      ...Language
    }
  }

  ${LANGUAGE_FRAGMENT}
`;

export default RepoStats;
