import React from 'react';
import {Query} from 'react-apollo';

const DefaultQuery = ({query, variables = {}, children}) => (
  <Query query={query} variables={variables}>
    {({loading, error, data, fetchMore}) => {
      if (loading)
        return (
          <div>
            <p>loading...</p>
          </div>
        );
      if (error)
        return (
          <div>
            <p>{`Error!: ${error}`}</p>
          </div>
        );

      return children({data, fetchMore});
    }}
  </Query>
);

export default DefaultQuery;
