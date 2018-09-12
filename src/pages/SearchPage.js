import React from 'react';
import styled from 'styled-components';
import {MarkGithubIcon} from 'react-octicons';
import queryString from 'query-string';
import UserList from '../components/UserList';
import Page from '../components/Page';

class SearchPage extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    const login = event.target.querySelector("[name='login']").value;
    if (login === '') {
      this.props.history.push('/users');
    } else {
      this.props.history.push(`/users?login=${login}`);
    }
  };

  render() {
    const login =
      queryString.parse(this.props.location.search).login || '';

    return (
      <Page>
        <h2>
          <MarkGithubIcon /> GitHub User Search <MarkGithubIcon />
        </h2>
        <form onSubmit={this.handleSubmit}>
          <SearchBar type="text" name="login" defaultValue={login} />
        </form>
        <UserList login={login} />
      </Page>
    );
  }
}

const SearchBar = styled.input`
  font-size: 1.5em;
  width: 100%;
`;

export default SearchPage;
