import React from 'react';
import gql from 'graphql-tag';
import Language, {LANGUAGE_FRAGMENT} from './Language';
import RepoHeader, {REPO_HEADER_FRAGMENT} from './RepoHeader';

const Repo = ({repo}) => (
  <li>
    <RepoHeader repo={repo} />
    <div>
      <Language language={repo.primaryLanguage} />
      <span> - {repo.forkCount}</span>
      <span> - {repo.stargazers.totalCount}</span>
    </div>
  </li>
);

export const REPO_FRAGMENT = gql`
  fragment Repo on Repository {
    id
    ...RepoHeader
    forkCount
    stargazers {
      totalCount
    }
    primaryLanguage {
      ...Language
    }
  }

  ${LANGUAGE_FRAGMENT}
  ${REPO_HEADER_FRAGMENT}
`;

export default Repo;
