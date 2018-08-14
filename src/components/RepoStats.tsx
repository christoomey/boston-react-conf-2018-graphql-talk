import * as React from 'react';
import gql from 'graphql-tag';
import styled from 'styled-components';
import {RepoForkedIcon, StarIcon} from 'react-octicons';
import {RepoStats} from '../gqlTypes';
import Language from './Language';
import {Row} from './Flex';
import {SFCWithQuery} from './SFCWithQuery';

const RepoStats: SFCWithQuery<{repo: RepoStats}> = {
  component: ({repo}) => (
    <Row spaceBetween>
      {repo.primaryLanguage && (
        <Language.component
          language={repo.primaryLanguage}
        />
      )}
      <Row>
        <PaddedIcon icon={RepoForkedIcon} />
        {repo.forkCount}
      </Row>
      <Row>
        <PaddedIcon icon={StarIcon} />
        {repo.stargazers.totalCount}
      </Row>
    </Row>
  ),
  fragment: gql`
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
  `,
};

const PaddedIcon = ({icon: Icon}) => (
  <Padded>
    <Icon />
  </Padded>
);

const Padded = styled.span`
  margin-right: 0.25em;
`;

export default RepoStats;
