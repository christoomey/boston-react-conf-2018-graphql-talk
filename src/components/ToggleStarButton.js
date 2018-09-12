import React from 'react';
import gql from 'graphql-tag';
import {Mutation} from 'react-apollo';
import Button from './Button';

const ToggleStarButton = ({repo}) =>
  repo.viewerHasStarred ? (
    <BaseToggleButton
      title="UnStar"
      mutation={UNSTAR_MUTATION}
      repoId={repo.id}
    />
  ) : (
    <BaseToggleButton
      title="Star"
      mutation={STAR_MUTATION}
      repoId={repo.id}
    />
  );

const BaseToggleButton = ({mutation, repoId, title}) => (
  <Mutation mutation={mutation} variables={{repoId}}>
    {(triggerMutation, {loading}) => (
      <Button onClick={triggerMutation} disabled={loading}>
        {title}
      </Button>
    )}
  </Mutation>
);

ToggleStarButton.fragment = gql`
  fragment ToggleStarButton on Repository {
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

export default ToggleStarButton;
