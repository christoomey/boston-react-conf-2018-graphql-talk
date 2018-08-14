import * as React from 'react';
import gql from 'graphql-tag';
import styled from 'styled-components';
import {spacing} from '../styles';
import RepoHeader from './RepoHeader';
import RepoStats from './RepoStats';
import Tile from './Tile';
import {Column} from './Flex';
import {Repo} from '../gqlTypes';
import {SFCWithQuery} from './SFCWithQuery';

const Repo: SFCWithQuery<{repo: Repo}> = {
  component: ({repo}) => (
    <PaddedTile>
      <FullHeightColumn spaceBetween>
        <RepoHeader.component repo={repo} />
        <RepoStats.component repo={repo} />
      </FullHeightColumn>
    </PaddedTile>
  ),
  fragment: gql`
    fragment Repo on Repository {
      id
      ...RepoHeader
      ...RepoStats
    }

    ${RepoStats.fragment}
    ${RepoHeader.fragment}
  `,
};

const PaddedTile = styled(Tile)`
  padding: ${spacing.small};
`;

const FullHeightColumn = styled(Column)`
  height: 100%;
`;

export default Repo;
