import React from 'react';
import UserList from './UserList';

class SearchPage extends React.Component {
  render() {
    return (
      <div>
        <input type="text" />
        <UserList username="toomey" />
      </div>
    );
  }
}

export default SearchPage;
