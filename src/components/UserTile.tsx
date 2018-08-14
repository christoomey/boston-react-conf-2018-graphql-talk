import * as React from 'react';
import gql from 'graphql-tag';
import Avatar from './Avatar';
import {Column, Row} from './Flex';
import {Title, Subtitle} from './Headings';
import UnstyledLink from './UnstyledLink';
import Tile from './Tile';
import {UserTile} from '../gqlTypes';
import {SFCWithQuery} from './SFCWithQuery';

const UserTile: SFCWithQuery<{user: UserTile}> = {
  component: ({user}) => (
    <UnstyledLink to={`/users/${user.login}`}>
      <Tile>
        <Row>
          <Avatar
            size="small"
            src={user.avatarUrl}
            alt={`${user.login} avatar`}
          />
          <Column>
            <Title>{user.login}</Title>
            <Subtitle>
              {user.name !== '' && `(${user.name})`}
            </Subtitle>
          </Column>
        </Row>
      </Tile>
    </UnstyledLink>
  ),
  fragment: gql`
    fragment UserTile on User {
      id
      login
      name
      avatarUrl
    }
  `,
};

export default UserTile;
