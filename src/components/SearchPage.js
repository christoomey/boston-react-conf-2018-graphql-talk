import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

const SearchPage = ({data: {loading, search}}) => (
  <div>
    <input type="text" />
    {search && <UserList users={search.nodes} />}
  </div>
);

const UserList = ({users}) => (
  <ul>{users.map(user => <li key={user.login}>{user.login}</li>)}</ul>
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

const withQuery = graphql(QUERY, {options: {variables: {username: 'toomey'}}});

export default withQuery(SearchPage);
