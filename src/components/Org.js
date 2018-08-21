import React from 'react';
import gql from 'graphql-tag';
import Avatar from './Avatar';

const Org = ({org}) => (
  <Avatar
    small
    src={org.avatarUrl}
    alt={`${org.name} avatar`}
  />
);

Org.fragment = gql`
  fragment Org on Organization {
    id
    name
    avatarUrl
  }
`;

export default Org;
