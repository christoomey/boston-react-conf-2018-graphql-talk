import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import UserTile from './UserTile';

const UserList = ({data: {loading, search}}) =>
  loading ? (
    <p>loading...</p>
  ) : (
    <ul>
      {search.nodes.map(user => <UserTile key={user.login} user={user} />)}
    </ul>
  );

const QUERY = gql`
  query UserSearch($username: String!) {
    search(first: 10, query: $username, type: USER) {
      nodes {
        ...UserTile
      }
    }
  }
  ${UserTile.fragment}
`;

const withQuery = graphql(QUERY, {
  options: ({username}) => ({variables: {username}}),
});

export default withQuery(UserList);
