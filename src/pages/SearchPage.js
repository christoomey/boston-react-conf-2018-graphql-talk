import React from 'react';
import styled from 'styled-components';
import {MarkGithubIcon} from 'react-octicons'
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
        <h2><MarkGithubIcon /> GitHub User Search <MarkGithubIcon /></h2>
        <form onSubmit={this.handleSubmit}>
          <SearchBar type="text" name="login" />
        </form>
        <UserList login={this.state.login} />
      </Page>
    );
  }
}

const SearchBar = styled.input`
  font-size: 1.5em;
  width: 100%;
`;

export default SearchPage;
