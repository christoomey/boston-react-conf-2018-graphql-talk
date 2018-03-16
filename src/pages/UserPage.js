import React from 'react';
import {graphql, compose} from 'react-apollo';
import gql from 'graphql-tag';
import {Link} from 'react-router-dom';
import withLoading from '../hocs/withLoading';
import CardList from '../components/CardList';
import Page from '../components/Page';
import Repo, {REPO_FRAGMENT} from '../components/Repo';
import Org, {ORG_FRAGMENT} from '../components/Org';
import UserHeader, {USER_HEADER_FRAGMENT} from '../components/UserHeader';

const UserPage = ({data: {user}}) => (
  <Page>
    <UserHeader user={user} />
    <CardList
      title="Organizations"
      itemKey="org"
      items={user.organizations.nodes}
      component={Org}
    />
    <CardList
      title="Popular Repos"
      itemKey="repo"
      items={user.repositories.nodes}
      component={Repo}
    />
    <Link to="/users">back to users list</Link>
  </Page>
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

const withQuery = graphql(QUERY, {
  options: ({match: {params}}) => ({
    variables: {login: params.login},
  }),
});

const enhanced = compose(withQuery, withLoading);

export default enhanced(UserPage);
