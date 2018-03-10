import React from 'react';
import gql from 'graphql-tag';

const UserTile = ({user}) => (
  <li key={user.login}>
    <img src={user.avatarUrl} width="20" alt={`${user.login} avatar`} />
    <span>
      {user.login} {user.name !== '' && `(${user.name})`}
    </span>
  </li>
);

UserTile.fragment = gql`
  fragment UserTile on User {
    login
    name
    avatarUrl
  }
`;

export default UserTile;
