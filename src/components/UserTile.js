import React from 'react';
import {Link} from 'react-router-dom';
import gql from 'graphql-tag';

const UserTile = ({user}) => (
  <li key={user.login}>
    <Link to={`/users/${user.login}`}>
      <img src={user.avatarUrl} width="20" alt={`${user.login} avatar`} />
      <span>
        {user.login} {user.name !== '' && `(${user.name})`}
      </span>
    </Link>
  </li>
);

UserTile.fragment = gql`
  fragment UserTile on User {
    id
    login
    name
    avatarUrl
  }
`;

export default UserTile;
