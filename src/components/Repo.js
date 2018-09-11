import React from 'react';
import gql from 'graphql-tag';
import RepoHeader from './RepoHeader';
import RepoStats from './RepoStats';
import Tile from './Tile';
import {Column} from './Flex';

const Repo = ({repo}) => (
  <Tile>
    <Column spaceBetween>
      <RepoHeader repo={repo} />
      <RepoStats repo={repo} />
    </Column>
  </Tile>
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

export default Repo;
