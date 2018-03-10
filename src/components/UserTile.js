import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

const UserTile = ({user}) => (
  <li key={user.login}>
    <img src={user.avatarUrl} width="20" />
    <span>
      {user.login} {user.name !== '' && `(${user.name})`}
    </span>
  </li>
);

UserTile.fragmentName = 'UserParts';
UserTile.fragment = gql`
  fragment UserParts on User {
    login
    name
    avatarUrl
  }
`;

export default UserTile;
