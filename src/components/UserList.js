import React from 'react';
import gql from 'graphql-tag';
import DefaultQuery from './DefaultQuery';
import UserTile, {USER_TILE_FRAGMENT} from './UserTile'; //eslint-disable-line
import Grid from './Grid';

const UserList = ({login}) => (
  <DefaultQuery query={QUERY} variables={{login}}>
    {({data: {search}, fetchMore, loading}) => (
      <div>
        <Grid columns={3}>
          {search.edges.map(({node: user}) => (
            <UserTile key={user.id} user={user} />
          ))}
        </Grid>

        {loading || (
          <LoadMoreButton edges={search.edges} fetchMore={fetchMore} />
        )}
      </div>
    )}
  </DefaultQuery>
);

const QUERY = gql`
  query UserSearch($login: String!, $cursor: String) {
    search(first: 12, query: $login, type: USER, after: $cursor) {
      edges {
        cursor
        node {
          ...userTile
        }
      }
    }
  }

  ${USER_TILE_FRAGMENT}
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
