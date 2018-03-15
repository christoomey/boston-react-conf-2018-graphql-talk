import React from 'react';
import {graphql, compose} from 'react-apollo';
import gql from 'graphql-tag';
import {Link} from 'react-router-dom';
import withLoading from '../hocs/withLoading';
import Repo, {REPO_FRAGMENT} from '../components/Repo';

const UserPage = ({data: {user}}) => (
  <div>
    <header>
      <img src={user.avatarUrl} width="75" alt={`${user.login} avatar`} />
      <h1>{user.login}</h1>
      <h2>{user.name || '(name not provided)'}</h2>
    </header>

    <section>
      <h3>Popular Repos:</h3>
      <ul>
        {user.repositories.nodes.map(repo => (
          <Repo key={repo.id} repo={repo} />
        ))}
      </ul>
    </section>

    <Link to="/users">back to users list</Link>
  </div>
);

const QUERY = gql`
  query UserQuery($login: String!) {
    user(login: $login) {
      id
      name
      login
      avatarUrl

      repositories(first: 5, orderBy: {field: STARGAZERS, direction: DESC}) {
        nodes {
          ...Repo
        }
      }

      organizations(first: 10) {
        nodes {
          id
          avatarUrl
        }
      }

      gists(first: 5) {
        nodes {
          id
          description
        }
      }
    }
  }

  ${REPO_FRAGMENT}
`;

const withQuery = graphql(QUERY, {
  options: ({match: {params}}) => ({
    variables: {login: params.login},
  }),
});

const enhanced = compose(withQuery, withLoading);

export default enhanced(UserPage);
