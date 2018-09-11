import React from 'react';
import gql from 'graphql-tag';
import ToggleStarButton from './ToggleStarButton';
import {Row} from './Flex';
import TitleLink from './TitleLink';

const RepoHeader = ({repo}) => (
  <div>
    <Row spaceBetween>
      <TitleLink href={repo.url}>{repo.name}</TitleLink>
      <ToggleStarButton repo={repo} />
    </Row>
    <p>{repo.description}</p>
  </div>
);

RepoHeader.fragment = gql`
  fragment RepoHeader on Repository {
    id
    url
    name
    description
    ...ToggleStarButton
  }
  ${ToggleStarButton.fragment}
`;

export default RepoHeader;
