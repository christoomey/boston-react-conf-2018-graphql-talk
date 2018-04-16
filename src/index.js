import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {SearchPage, UserPage} from './pages';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: async operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    });
  },
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
