import React from 'react';
import UserList from './UserList';

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
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="login" />
        </form>
        <UserList username={this.state.login} />
      </div>
    );
  }
}

export default SearchPage;
