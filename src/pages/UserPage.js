import React from 'react';
import {graphql, compose} from 'react-apollo';
import gql from 'graphql-tag';
import {Link} from 'react-router-dom';
import withLoading from '../hocs/withLoading';
import Card from '../components/Card';
import List from '../components/List';
import Repo, {REPO_FRAGMENT} from '../components/Repo';
import Org, {ORG_FRAGMENT} from '../components/Org';
import UserHeader, {USER_HEADER_FRAGMENT} from '../components/UserHeader';

const UserPage = ({data: {user}}) => (
  <div>
    <UserHeader user={user} />

    <Card title="Organizations">
      <List items={user.organizations.nodes} component={Org} />
    </Card>

    <section>
      <h3>Popular Repos</h3>
      <ul>
        {user.repositories.nodes.map(repo => (
          <Repo key={repo.id} repo={repo} />
        ))}
      </ul>
    </section>

    <Link to="/users">back to users list</Link>
  </div>
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
