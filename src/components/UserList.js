import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import UserTile from './UserTile';

const UserList = ({data: {loading, search, fetchMore}}) =>
  loading ? (
    <p>loading...</p>
  ) : (
    <div>
      <ul>
        {search.edges.map(({node: user}) => (
          <UserTile key={user.login} user={user} />
        ))}
      </ul>
      <button onClick={() => loadMoreResults(search.edges, fetchMore)}>
        Load more
      </button>
    </div>
  );

const loadMoreResults = (edges, fetchMore) => {
  const {cursor} = edges[edges.length - 1];
  fetchMore({
    variables: {cursor},
    updateQuery: (previousResult, {fetchMoreResult}) => ({
      ...previousResult,
      search: {
        edges: [
          ...previousResult.search.edges,
          ...fetchMoreResult.search.edges,
        ],
      },
    }),
  });
};

const QUERY = gql`
  query UserSearch($username: String!, $cursor: String) {
    search(first: 10, query: $username, type: USER, after: $cursor) {
      edges {
        cursor
        node {
          ...UserTile
        }
      }
    }
  }

  ${UserTile.fragment}
`;

const withQuery = graphql(QUERY, {
  options: ({username}) => ({variables: {username}}),
});

export default withQuery(UserList);
