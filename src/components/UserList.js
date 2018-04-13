import React from 'react';
import gql from 'graphql-tag';
import DefaultQuery from './DefaultQuery';
import UserTile from './UserTile';

const UserList = ({username}) => (
  <DefaultQuery query={QUERY} variables={{username}}>
    {({data: {search}, fetchMore}) => (
      <div>
        <ul>
          {search.edges.map(({node: user}) => (
            <UserTile key={user.login} user={user} />
          ))}
        </ul>
        <LoadMoreButton edges={search.edges} fetchMore={fetchMore} />
      </div>
    )}
  </DefaultQuery>
);

const QUERY = gql`
  query UserSearch($username: String!, $cursor: String) {
    search(first: 10, query: $username, type: USER, after: $cursor) {
      edges {
        cursor
        node {
          ... on User {
            id
            login
            name
            avatarUrl
          }
        }
      }
    }
  }
`;

const LoadMoreButton = ({edges, fetchMore}) => (
  <button onClick={() => loadMoreResults(edges, fetchMore)}>Load more</button>
);

const loadMoreResults = (edges, fetchMore) => {
  const {cursor} = edges[edges.length - 1];
  fetchMore({
    variables: {cursor},
    updateQuery: (previousResult, {fetchMoreResult}) => ({
      ...previousResult,
      search: {
        __typename: previousResult.search.__typename,
        edges: [
          ...previousResult.search.edges,
          ...fetchMoreResult.search.edges,
        ],
      },
    }),
  });
};

export default UserList;
