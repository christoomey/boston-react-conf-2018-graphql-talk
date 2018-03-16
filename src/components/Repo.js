import React from 'react';
import gql from 'graphql-tag';
import {graphql, compose} from 'react-apollo';
import Language, {LANGUAGE_FRAGMENT} from './Language';

const Repo = ({repo, starMutation, unstarMutation}) => (
  <li key={repo.id}>
    <h4>
      <a href={repo.url}>{repo.name}</a>
    </h4>
    <p>
      {repo.viewerHasStarred ? (
        <ToggleStarButton mutation={unstarMutation} repo={repo} text="UnStar" />
      ) : (
        <ToggleStarButton mutation={starMutation} repo={repo} text="Star" />
      )}
    </p>
    <p>{repo.description}</p>
    <div>
      <Language language={repo.primaryLanguage} />
      <span> - {repo.forkCount}</span>
      <span> - {repo.stargazers.totalCount}</span>
    </div>
  </li>
);

const ToggleStarButton = ({mutation, repo, text}) => (
  <button onClick={() => mutation({variables: {repoId: repo.id}})}>
    {text}
  </button>
);

export const REPO_FRAGMENT = gql`
  fragment Repo on Repository {
    id
    url
    name
    description
    forkCount
    viewerHasStarred
    stargazers {
      totalCount
    }
    primaryLanguage {
      ...Language
    }
  }

  ${LANGUAGE_FRAGMENT}
`;

const STAR_MUTATION = gql`
  mutation StarRepo($repoId: ID!) {
    addStar(input: {starrableId: $repoId}) {
      starrable {
        ...Repo
      }
    }
  }
  ${REPO_FRAGMENT}
`;

const UNSTAR_MUTATION = gql`
  mutation StarRepo($repoId: ID!) {
    removeStar(input: {starrableId: $repoId}) {
      starrable {
        ...Repo
      }
    }
  }
  ${REPO_FRAGMENT}
`;

const withStarMutation = graphql(STAR_MUTATION, {name: 'starMutation'});
const withUnstarMutation = graphql(UNSTAR_MUTATION, {name: 'unstarMutation'});

export default compose(withStarMutation, withUnstarMutation)(Repo);
