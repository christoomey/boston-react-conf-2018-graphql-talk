import React from 'react';
import gql from 'graphql-tag';
import styled from 'styled-components';
import {RepoForkedIcon, StarIcon} from 'react-octicons';
import Language, {LANGUAGE_FRAGMENT} from './Language';
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

export const REPO_STATS_FRAGMENT = gql`
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

  ${LANGUAGE_FRAGMENT}
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
