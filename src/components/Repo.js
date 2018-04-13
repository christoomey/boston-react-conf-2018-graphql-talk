import React from 'react';
import gql from 'graphql-tag';
import RepoHeader, {REPO_HEADER_FRAGMENT} from './RepoHeader';
import RepoStats, {REPO_STATS_FRAGMENT} from './RepoStats';

const Repo = ({repo}) => (
  <li>
    <RepoHeader repo={repo} />
    <RepoStats repo={repo} />
  </li>
);

export const REPO_FRAGMENT = gql`
  fragment Repo on Repository {
    id
    ...RepoHeader
    ...RepoStats
  }

  ${REPO_STATS_FRAGMENT}
  ${REPO_HEADER_FRAGMENT}
`;

export default Repo;
