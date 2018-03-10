import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

const UserList = ({username, data: {loading, search}}) =>
  search ? (
    <ul>
      {search.nodes.map(user => (
        <li key={user.login}>
          <img src={user.avatarUrl} width="20" />
          <span>
            {user.login} {user.name !== '' && `(${user.name})`}
          </span>
        </li>
      ))}
    </ul>
  ) : (
    <p>loading...</p>
  );

const QUERY = gql`
  query UserSearch($username: String!) {
    search(first: 10, query: $username, type: USER) {
      nodes {
        ... on User {
          login
          name
          avatarUrl
        }
      }
    }
  }
`;

const withQuery = graphql(QUERY, {
  options: ({username}) => ({variables: {username}}),
});

export default withQuery(UserList);
