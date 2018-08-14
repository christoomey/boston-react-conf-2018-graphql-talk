import * as React from 'react';
import gql from 'graphql-tag';
import styled from 'styled-components';
import {spacing} from '../styles';
import Avatar from './Avatar';
import {Column, Row} from './Flex';
import {Title, Subtitle} from './Headings';
import {UserHeader} from '../gqlTypes';
import {SFCWithQuery} from './SFCWithQuery';

const UserHeader: SFCWithQuery<{user: UserHeader}> = {
  component: ({user}) => (
    <PaddedRow>
      <Avatar
        size="large"
        src={user.avatarUrl}
        alt={`${user.login} avatar`}
      />
      <Column>
        <Title>{user.login}</Title>
        <Subtitle>
          {user.name || '(name not provided)'}
        </Subtitle>
        <p>{user.bio}</p>
      </Column>
    </PaddedRow>
  ),
  fragment: gql`
    fragment UserHeader on User {
      id
      name
      bio
      login
      avatarUrl
    }
  `,
};

const PaddedRow = styled(Row)`
  margin-bottom: ${spacing.small};
`;

export default UserHeader;
