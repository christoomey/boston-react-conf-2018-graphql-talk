import React from 'react';
import UserList from '../components/UserList';
import Page from '../components/Page';

class SearchPage extends React.Component {
  state = {
    login: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({login: event.target.querySelector("[name='login']").value});
  };

  render() {
    return (
      <Page>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="login" />
        </form>
        <UserList login={this.state.login} />
      </Page>
    );
  }
}

export default SearchPage;
