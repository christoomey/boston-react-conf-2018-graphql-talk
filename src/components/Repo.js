import React from 'react';
import gql from 'graphql-tag';

const Repo = ({repo}) => (
  <li key={repo.id}>
    <strong>{repo.name}</strong> - {repo.description}
  </li>
);

export const REPO_FRAGMENT = gql`
  fragment Repo on Repository {
    id
    name
    description
    forkCount
  }
`;

export default Repo;
