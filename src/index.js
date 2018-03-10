import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {setContext} from 'apollo-link-context';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloProvider} from 'react-apollo';
import SearchPage from './components/SearchPage';

const authLink = setContext((_, {headers}) => ({
  headers: {
    ...headers,
    authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  },
}));

const httpLink = new HttpLink({uri: 'https://api.github.com/graphql'});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <SearchPage />
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
