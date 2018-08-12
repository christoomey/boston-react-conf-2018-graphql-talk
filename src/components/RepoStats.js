import React from 'react';
import gql from 'graphql-tag';
import styled from 'styled-components';
import {RepoForkedIcon, StarIcon} from 'react-octicons';
import Language from './Language';
import {Row} from './Flex';

const RepoStats = ({repo}) => (
  <Row spaceBetween>
    <Language language={repo.primaryLanguage} />
    <Row>
      <PaddedIcon icon={RepoForkedIcon} />
      {repo.forkCount}
    </Row>
    <Row>
      <PaddedIcon icon={StarIcon} />
      {repo.stargazers.totalCount}
    </Row>
  </Row>
);

RepoStats.fragment = gql`
  fragment RepoStats on Repository {
    id
    forkCount
    stargazers {
      totalCount
    }
    primaryLanguage {
      ...Language
    }
  }

  ${Language.fragment}
`;

const PaddedIcon = ({icon: Icon}) => (
  <Padded>
    <Icon />
  </Padded>
);

const Padded = styled.span`
  margin-right: 0.25em;
`;

export default RepoStats;
