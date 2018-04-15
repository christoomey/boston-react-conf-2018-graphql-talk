import React from 'react';
import gql from 'graphql-tag';

const Org = ({org}) => (
  <li>
    <img src={org.avatarUrl} width="75" alt={`${org.login} avatar`} />
  </li>
);

export const ORG_FRAGMENT = gql`
  fragment Org on Organization {
    id
    name
    avatarUrl
  }
`;

export default Org;
