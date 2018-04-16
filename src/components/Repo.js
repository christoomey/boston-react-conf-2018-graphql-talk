import React from 'react';
import gql from 'graphql-tag';
import styled from 'styled-components';
import {spacing} from '../styles';
import RepoHeader, {REPO_HEADER_FRAGMENT} from './RepoHeader';
import RepoStats, {REPO_STATS_FRAGMENT} from './RepoStats';
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

export const REPO_FRAGMENT = gql`
  fragment Repo on Repository {
    id
    ...RepoHeader
    ...RepoStats
  }

  ${REPO_STATS_FRAGMENT}
  ${REPO_HEADER_FRAGMENT}
`;

const PaddedTile = styled(Tile)`
  padding: ${spacing.small};
`

const FullHeightColumn = styled(Column)`
  height: 100%;
`

export default Repo;
