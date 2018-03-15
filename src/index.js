import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloClient} from 'apollo-client';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {HttpLink} from 'apollo-link-http';
import {setContext} from 'apollo-link-context';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloProvider} from 'react-apollo';
import SearchPage from './pages/SearchPage';
import UserPage from './pages/UserPage';

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
    <BrowserRouter>
      <Switch>
        <Route exact path="/users" component={SearchPage} />
        <Route exact path="/users/:login" component={UserPage} />
        <Redirect from="/" to="/users" />
      </Switch>
    </BrowserRouter>
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
