import React from 'react';
import gql from 'graphql-tag';
import DefaultQuery from '../components/DefaultQuery';
import Page from '../components/Page';
import Repo, {REPO_FRAGMENT} from '../components/Repo';
import Org, {ORG_FRAGMENT} from '../components/Org';
import UserHeader, {USER_HEADER_FRAGMENT} from '../components/UserHeader';
import {Row} from '../components/Flex';
import Grid from '../components/Grid';

const UserPage = ({match: {params: {login}}}) => (
  <DefaultQuery query={QUERY} variables={{login}}>
    {({data: {user}}) => (
      <Page>
        <UserHeader user={user} />
        <Row>
          {user.organizations.nodes.map(org => <Org key={org.id} org={org} />)}
        </Row>
        <Grid columns={2}>
          {user.repositories.nodes.map(repo => <Repo key={repo.id} repo={repo} />)}
        </Grid>
      </Page>
    )}
  </DefaultQuery>
);

const QUERY = gql`
  query UserQuery($login: String!) {
    user(login: $login) {
      ...UserHeader

      repositories(
        first: 10
        isFork: false
        orderBy: {field: STARGAZERS, direction: DESC}
      ) {
        nodes {
          ...Repo
        }
      }

      organizations(first: 10) {
        nodes {
          ...Org
        }
      }
    }
  }

  ${USER_HEADER_FRAGMENT}
  ${REPO_FRAGMENT}
  ${ORG_FRAGMENT}
`;

export default UserPage;
