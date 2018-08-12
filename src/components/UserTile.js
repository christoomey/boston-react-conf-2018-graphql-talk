import React from 'react';
import gql from 'graphql-tag';
import Avatar from './Avatar';
import {Column, Row} from './Flex';
import {Title, Subtitle} from './Headings';
import UnstyledLink from './UnstyledLink';
import Tile from './Tile';

const UserTile = ({user}) => (
  <UnstyledLink to={`/users/${user.login}`}>
    <Tile>
      <Row>
        <Avatar small src={user.avatarUrl} alt={`${user.login} avatar`} />
        <Column>
          <Title>{user.login}</Title>
          <Subtitle>{user.name !== '' && `(${user.name})`}</Subtitle>
        </Column>
      </Row>
    </Tile>
  </UnstyledLink>
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
