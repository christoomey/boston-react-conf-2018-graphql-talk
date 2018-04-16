import React from 'react';
import gql from 'graphql-tag';
import {Mutation} from 'react-apollo';
import styled from 'styled-components';

const ToggleStarButton = ({repo}) =>
  repo.viewerHasStarred ? (
    <BaseToggleButton title="UnStar" mutation={UNSTAR_MUTATION} repo={repo} />
  ) : (
    <BaseToggleButton title="Star" mutation={STAR_MUTATION} repo={repo} />
  );

const BaseToggleButton = ({mutation, repo, title}) => (
  <Mutation mutation={mutation} variables={{repoId: repo.id}}>
    {(triggerMutation, {loading}) => (
      <StyledButton onClick={triggerMutation} disabled={loading}>
        {title}
      </StyledButton>
    )}
  </Mutation>
);

export const TOGGLE_STAR_FRAGMENT = gql`
  fragment ToggleStar on Repository {
    id
    viewerHasStarred
    stargazers {
      totalCount
    }
  }
`;

const STAR_MUTATION = gql`
  mutation StarRepo($repoId: ID!) {
    addStar(input: {starrableId: $repoId}) {
      starrable {
        ...ToggleStar
      }
    }
  }
  ${TOGGLE_STAR_FRAGMENT}
`;

const UNSTAR_MUTATION = gql`
  mutation StarRepo($repoId: ID!) {
    removeStar(input: {starrableId: $repoId}) {
      starrable {
        ...ToggleStar
      }
    }
  }
  ${TOGGLE_STAR_FRAGMENT}
`;

const StyledButton = styled.button`
  background-color: #ddd;
`

export default ToggleStarButton;
