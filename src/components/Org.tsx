import * as React from 'react';
import gql from 'graphql-tag';
import {Org} from '../gqlTypes';
import {SFCWithQuery} from './SFCWithQuery';
import Avatar from './Avatar';

const Org: SFCWithQuery<{org: Org}> = {
  component: ({org}) => (
    <Avatar
      size="small"
      src={org.avatarUrl}
      alt={`${org.name} avatar`}
    />
  ),
  fragment: gql`
    fragment Org on Organization {
      id
      name
      avatarUrl
    }
  `,
};

export default Org;
