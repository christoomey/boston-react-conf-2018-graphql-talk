import React from 'react';
import gql from 'graphql-tag';
import DefaultQuery from '../components/DefaultQuery';
import Page from '../components/Page';
import Repo from '../components/Repo';
import Org from '../components/Org';
import UserHeader from '../components/UserHeader';
import {Row} from '../components/Flex';
import Grid from '../components/Grid';

const UserPage = ({match: {params: {login}}}) => (
  <DefaultQuery query={QUERY} variables={{login}}>
    {({data: {user}}) => (
      <Page>
        <UserHeader user={user} />
        <Row>
          {user.organizations.nodes.map(org => (
            <Org key={org.id} org={org} />
          ))}
        </Row>
        <Grid columns={2}>
          {user.repositories.nodes.map(repo => (
            <Repo key={repo.id} repo={repo} />
          ))}
        </Grid>
      </Page>
    )}
  </DefaultQuery>
);

const QUERY = gql`
  query UserQuery($login: String!) {
    user(login: $login) {
      ...UserHeader

      organizations(first: 10) {
        nodes {
          ...Org
        }
      }

      repositories(
        first: 10
        isFork: false
        orderBy: {field: STARGAZERS, direction: DESC}
      ) {
        nodes {
          ...Repo
        }
      }
    }
  }

  ${UserHeader.fragment}
  ${Repo.fragment}
  ${Org.fragment}
`;

export default UserPage;
