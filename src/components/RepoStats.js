import React from 'react';
import gql from 'graphql-tag';
import Language from './Language';
import {StarIcon, ForkedIcon} from './Icon';
import {Row} from './Flex';

const RepoStats = ({repo}) => (
  <Row spaceBetween>
    <Language language={repo.primaryLanguage} />
    <span>
      <ForkedIcon />
      {repo.forkCount}
    </span>
    <span>
      <StarIcon />
      {repo.stargazers.totalCount}
    </span>
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

export default RepoStats;
