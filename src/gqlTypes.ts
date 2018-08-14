/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: StarRepo
// ====================================================

export interface StarRepo_addStar_starrable_Gist {}

export interface StarRepo_addStar_starrable_Repository_stargazers {
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface StarRepo_addStar_starrable_Repository {
  id: string;
  /**
   * Returns a boolean indicating whether the viewing user has starred this starrable.
   */
  viewerHasStarred: boolean;
  /**
   * A list of users who have starred this starrable.
   */
  stargazers: StarRepo_addStar_starrable_Repository_stargazers;
}

export type StarRepo_addStar_starrable = StarRepo_addStar_starrable_Gist | StarRepo_addStar_starrable_Repository;

export interface StarRepo_addStar {
  /**
   * The starrable.
   */
  starrable: StarRepo_addStar_starrable;
}

export interface StarRepo {
  /**
   * Adds a star to a Starrable.
   */
  addStar: StarRepo_addStar | null;
}

export interface StarRepoVariables {
  repoId: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UnstarRepo
// ====================================================

export interface UnstarRepo_removeStar_starrable_Gist {}

export interface UnstarRepo_removeStar_starrable_Repository_stargazers {
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface UnstarRepo_removeStar_starrable_Repository {
  id: string;
  /**
   * Returns a boolean indicating whether the viewing user has starred this starrable.
   */
  viewerHasStarred: boolean;
  /**
   * A list of users who have starred this starrable.
   */
  stargazers: UnstarRepo_removeStar_starrable_Repository_stargazers;
}

export type UnstarRepo_removeStar_starrable = UnstarRepo_removeStar_starrable_Gist | UnstarRepo_removeStar_starrable_Repository;

export interface UnstarRepo_removeStar {
  /**
   * The starrable.
   */
  starrable: UnstarRepo_removeStar_starrable;
}

export interface UnstarRepo {
  /**
   * Removes a star from a Starrable.
   */
  removeStar: UnstarRepo_removeStar | null;
}

export interface UnstarRepoVariables {
  repoId: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserSearch
// ====================================================

export interface UserSearch_search_edges_user_Issue {}

export interface UserSearch_search_edges_user_User {
  id: string;
  /**
   * The username used to login.
   */
  login: string;
  /**
   * The user's public profile name.
   */
  name: string | null;
  /**
   * A URL pointing to the user's public avatar.
   */
  avatarUrl: any;
}

export type UserSearch_search_edges_user = UserSearch_search_edges_user_Issue | UserSearch_search_edges_user_User;

export interface UserSearch_search_edges {
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
  /**
   * The item at the end of the edge.
   */
  user: UserSearch_search_edges_user | null;
}

export interface UserSearch_search {
  /**
   * A list of edges.
   */
  edges: (UserSearch_search_edges | null)[] | null;
}

export interface UserSearch {
  /**
   * Perform a search across resources.
   */
  search: UserSearch_search;
}

export interface UserSearchVariables {
  login: string;
  cursor?: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserQuery
// ====================================================

export interface UserQuery_user_repositories_nodes_stargazers {
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface UserQuery_user_repositories_nodes_primaryLanguage {
  id: string;
  /**
   * The name of the current language.
   */
  name: string;
  /**
   * The color defined for the current language.
   */
  color: string | null;
}

export interface UserQuery_user_repositories_nodes {
  id: string;
  /**
   * The HTTP URL for this repository
   */
  url: any;
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The description of the repository.
   */
  description: string | null;
  /**
   * Returns a boolean indicating whether the viewing user has starred this starrable.
   */
  viewerHasStarred: boolean;
  /**
   * A list of users who have starred this starrable.
   */
  stargazers: UserQuery_user_repositories_nodes_stargazers;
  /**
   * Returns how many forks there are of this repository in the whole network.
   */
  forkCount: number;
  /**
   * The primary language of the repository's code.
   */
  primaryLanguage: UserQuery_user_repositories_nodes_primaryLanguage | null;
}

export interface UserQuery_user_repositories {
  /**
   * A list of nodes.
   */
  nodes: (UserQuery_user_repositories_nodes | null)[] | null;
}

export interface UserQuery_user_organizations_nodes {
  id: string;
  /**
   * The organization's public profile name.
   */
  name: string | null;
  /**
   * A URL pointing to the organization's public avatar.
   */
  avatarUrl: any;
}

export interface UserQuery_user_organizations {
  /**
   * A list of nodes.
   */
  nodes: (UserQuery_user_organizations_nodes | null)[] | null;
}

export interface UserQuery_user {
  id: string;
  /**
   * The user's public profile name.
   */
  name: string | null;
  /**
   * The user's public profile bio.
   */
  bio: string | null;
  /**
   * The username used to login.
   */
  login: string;
  /**
   * A URL pointing to the user's public avatar.
   */
  avatarUrl: any;
  /**
   * A list of repositories that the user owns.
   */
  repositories: UserQuery_user_repositories;
  /**
   * A list of organizations the user belongs to.
   */
  organizations: UserQuery_user_organizations;
}

export interface UserQuery {
  /**
   * Lookup a user by login.
   */
  user: UserQuery_user | null;
}

export interface UserQueryVariables {
  login: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Language
// ====================================================

export interface Language {
  id: string;
  /**
   * The name of the current language.
   */
  name: string;
  /**
   * The color defined for the current language.
   */
  color: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Org
// ====================================================

export interface Org {
  id: string;
  /**
   * The organization's public profile name.
   */
  name: string | null;
  /**
   * A URL pointing to the organization's public avatar.
   */
  avatarUrl: any;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Repo
// ====================================================

export interface Repo_stargazers {
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface Repo_primaryLanguage {
  id: string;
  /**
   * The name of the current language.
   */
  name: string;
  /**
   * The color defined for the current language.
   */
  color: string | null;
}

export interface Repo {
  id: string;
  /**
   * The HTTP URL for this repository
   */
  url: any;
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The description of the repository.
   */
  description: string | null;
  /**
   * Returns a boolean indicating whether the viewing user has starred this starrable.
   */
  viewerHasStarred: boolean;
  /**
   * A list of users who have starred this starrable.
   */
  stargazers: Repo_stargazers;
  /**
   * Returns how many forks there are of this repository in the whole network.
   */
  forkCount: number;
  /**
   * The primary language of the repository's code.
   */
  primaryLanguage: Repo_primaryLanguage | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: RepoHeader
// ====================================================

export interface RepoHeader_stargazers {
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface RepoHeader {
  id: string;
  /**
   * The HTTP URL for this repository
   */
  url: any;
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The description of the repository.
   */
  description: string | null;
  /**
   * Returns a boolean indicating whether the viewing user has starred this starrable.
   */
  viewerHasStarred: boolean;
  /**
   * A list of users who have starred this starrable.
   */
  stargazers: RepoHeader_stargazers;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: RepoStats
// ====================================================

export interface RepoStats_stargazers {
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface RepoStats_primaryLanguage {
  id: string;
  /**
   * The name of the current language.
   */
  name: string;
  /**
   * The color defined for the current language.
   */
  color: string | null;
}

export interface RepoStats {
  id: string;
  /**
   * Returns how many forks there are of this repository in the whole network.
   */
  forkCount: number;
  /**
   * A list of users who have starred this starrable.
   */
  stargazers: RepoStats_stargazers;
  /**
   * The primary language of the repository's code.
   */
  primaryLanguage: RepoStats_primaryLanguage | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ToggleStarButton
// ====================================================

export interface ToggleStarButton_stargazers {
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface ToggleStarButton {
  id: string;
  /**
   * Returns a boolean indicating whether the viewing user has starred this starrable.
   */
  viewerHasStarred: boolean;
  /**
   * A list of users who have starred this starrable.
   */
  stargazers: ToggleStarButton_stargazers;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: UserHeader
// ====================================================

export interface UserHeader {
  id: string;
  /**
   * The user's public profile name.
   */
  name: string | null;
  /**
   * The user's public profile bio.
   */
  bio: string | null;
  /**
   * The username used to login.
   */
  login: string;
  /**
   * A URL pointing to the user's public avatar.
   */
  avatarUrl: any;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: UserTile
// ====================================================

export interface UserTile {
  id: string;
  /**
   * The username used to login.
   */
  login: string;
  /**
   * The user's public profile name.
   */
  name: string | null;
  /**
   * A URL pointing to the user's public avatar.
   */
  avatarUrl: any;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
