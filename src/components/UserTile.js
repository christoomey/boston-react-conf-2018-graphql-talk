import React from 'react';
import {Link} from 'react-router-dom';
import gql from 'graphql-tag';

const UserTile = ({user}) => (
  <li>
    <Link to={`/users/${user.login}`}>
      <img src={user.avatarUrl} width="20" alt={`${user.login} avatar`} />
      <span>
        {user.login} {user.name !== '' && `(${user.name})`}
      </span>
    </Link>
  </li>
);

export const USER_TILE_FRAGMENT = gql`
  fragment userTile on User {
    id
    login
    name
    avatarUrl
  }
`;

export default UserTile;
