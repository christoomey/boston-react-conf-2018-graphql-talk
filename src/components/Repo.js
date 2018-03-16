import React from 'react';
import gql from 'graphql-tag';

const Repo = ({repo}) => (
  <li key={repo.id}>
    <h4>
      <a href={repo.url}>{repo.name}</a>
    </h4>
    <p>{repo.description}</p>
    <div>
      <span style={{color: repo.primaryLanguage.color}}>
        {repo.primaryLanguage.name}
      </span>
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
      id
      name
      color
    }
  }
`;

export default Repo;
