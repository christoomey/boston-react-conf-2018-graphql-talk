import * as React from 'react';

const LoadMoreButton = ({edges, fetchMore}) => (
  <button
    onClick={() => loadMoreResults(edges, fetchMore)}
  >
    Load more
  </button>
);

const loadMoreResults = (edges, fetchMore) => {
  const {cursor} = edges[edges.length - 1];
  fetchMore({
    variables: {cursor},
    updateQuery: (
      previousResult,
      {fetchMoreResult}
    ) => ({
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

export default LoadMoreButton;
