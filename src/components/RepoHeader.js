import React from 'react';
import gql from 'graphql-tag';
import ToggleStarButton, {TOGGLE_STAR_FRAGMENT} from './ToggleStarButton';

const RepoHeader = ({repo}) => (
  <div>
    <h4>
      <a href={repo.url}>{repo.name}</a>
    </h4>
    <ToggleStarButton repo={repo} />
    <p>{repo.description}</p>
  </div>
);

export const REPO_HEADER_FRAGMENT = gql`
  fragment RepoHeader on Repository {
    id
    url
    name
    description
    ...ToggleStar
  }
  ${TOGGLE_STAR_FRAGMENT}
`;

export default RepoHeader;
