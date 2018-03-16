import React from 'react';
import gql from 'graphql-tag';
import Language, {LANGUAGE_FRAGMENT} from './Language'

const Repo = ({repo}) => (
  <li key={repo.id}>
    <h4>
      <a href={repo.url}>{repo.name}</a>
    </h4>
    <p>{repo.description}</p>
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
    url
    name
    description
    forkCount
    viewerHasStarred
    stargazers {
      totalCount
    }
    primaryLanguage {
      ...Language
    }
  }

  ${LANGUAGE_FRAGMENT}
`;

export default Repo;
