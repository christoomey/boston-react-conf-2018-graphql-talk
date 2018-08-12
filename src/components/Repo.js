import React from 'react';
import gql from 'graphql-tag';
import styled from 'styled-components';
import {spacing} from '../styles';
import RepoHeader from './RepoHeader';
import RepoStats from './RepoStats';
import Tile from './Tile';
import {Column} from './Flex';

const Repo = ({repo}) => (
  <PaddedTile>
    <FullHeightColumn spaceBetween>
      <RepoHeader repo={repo} />
      <RepoStats repo={repo} />
    </FullHeightColumn>
  </PaddedTile>
);

Repo.fragment = gql`
  fragment Repo on Repository {
    id
    ...RepoHeader
    ...RepoStats
  }

  ${RepoStats.fragment}
  ${RepoHeader.fragment}
`;

const PaddedTile = styled(Tile)`
  padding: ${spacing.small};
`;

const FullHeightColumn = styled(Column)`
  height: 100%;
`;

export default Repo;
