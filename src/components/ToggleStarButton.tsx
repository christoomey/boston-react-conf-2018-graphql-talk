import * as React from 'react';
import gql from 'graphql-tag';
import {Mutation} from 'react-apollo';
import styled from 'styled-components';
import {ToggleStarButton} from '../gqlTypes';
import {SFCWithQuery} from './SFCWithQuery';

const ToggleStarButton: SFCWithQuery<{
  repo: ToggleStarButton;
}> = {
  component: ({repo}) =>
    repo.viewerHasStarred ? (
      <BaseToggleButton
        title="UnStar"
        mutation={UNSTAR_MUTATION}
        repo={repo}
      />
    ) : (
      <BaseToggleButton
        title="Star"
        mutation={STAR_MUTATION}
        repo={repo}
      />
    ),
  fragment: gql`
    fragment ToggleStarButton on Repository {
      id
      viewerHasStarred
      stargazers {
        totalCount
      }
    }
  `,
};

const BaseToggleButton = ({mutation, repo, title}) => (
  <Mutation
    mutation={mutation}
    variables={{repoId: repo.id}}
  >
    {(triggerMutation, {loading}) => (
      <StyledButton
        onClick={() => triggerMutation()}
        disabled={loading}
      >
        {title}
      </StyledButton>
    )}
  </Mutation>
);

const STAR_MUTATION = gql`
  mutation StarRepo($repoId: ID!) {
    addStar(input: {starrableId: $repoId}) {
      starrable {
        ...ToggleStarButton
      }
    }
  }
  ${ToggleStarButton.fragment}
`;

const UNSTAR_MUTATION = gql`
  mutation UnstarRepo($repoId: ID!) {
    removeStar(input: {starrableId: $repoId}) {
      starrable {
        ...ToggleStarButton
      }
    }
  }
  ${ToggleStarButton.fragment}
`;

const StyledButton = styled.button`
  background-color: #ddd;
`;

export default ToggleStarButton;
