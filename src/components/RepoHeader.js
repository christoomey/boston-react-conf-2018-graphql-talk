import React from 'react';
import gql from 'graphql-tag';
import styled from 'styled-components';
import ToggleStarButton from './ToggleStarButton';
import {Row} from './Flex';

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

const TitleLink = styled.a`
  color: #333;
  text-decoration: none;
  font-size: 1.25em;
  font-weight: 550;
`;

export default RepoHeader;
