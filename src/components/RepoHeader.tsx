import * as React from 'react';
import gql from 'graphql-tag';
import styled from 'styled-components';
import ToggleStarButton from './ToggleStarButton';
import {Row} from './Flex';
import {RepoHeader} from '../gqlTypes';
import {SFCWithQuery} from './SFCWithQuery';

const RepoHeader: SFCWithQuery<{repo: RepoHeader}> = {
  component: ({repo}) => (
    <div>
      <Row spaceBetween>
        <TitleLink href={repo.url}>
          {repo.name}
        </TitleLink>
        <ToggleStarButton.component repo={repo} />
      </Row>
      <p>{repo.description}</p>
    </div>
  ),
  fragment: gql`
    fragment RepoHeader on Repository {
      id
      url
      name
      description
      ...ToggleStarButton
    }
    ${ToggleStarButton.fragment}
  `,
};

const TitleLink = styled.a`
  color: #333;
  text-decoration: none;
  font-size: 1.25em;
  font-weight: 550;
`;

export default RepoHeader;
