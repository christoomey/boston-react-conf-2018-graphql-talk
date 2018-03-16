import React from 'react';
import gql from 'graphql-tag';

const UserHeader = ({user}) => (
  <header>
    <img src={user.avatarUrl} width="75" alt={`${user.login} avatar`} />
    <h1>{user.login}</h1>
    <h2>{user.name || '(name not provided)'}</h2>
    <p>{user.bio}</p>
  </header>
);

export const USER_HEADER_FRAGMENT = gql`
  fragment UserHeader on User {
    id
    name
    bio
    login
    avatarUrl
  }
`;

export default UserHeader;
