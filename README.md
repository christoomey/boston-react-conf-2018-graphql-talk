# GitHub GraphQL User Viewer

This app uses the GitHub GraphQL API to build an exmaple application using
React and Apollo to browse users and interact with some of their info.

## Setup

### Dependencies

This project uses [yarn][] to manage dependencies.

    yarn install

### GitHub Token

You'll need to to generate a [GitHub personal access token][] with `repo`
scopes. Once generated, add it to a `.env` file:

```sh
GITHUB_TOKEN=abcdef-secret-token
```

[yarn]: https://yarnpkg.com/en/
[github personal access token]: https://github.com/settings/tokens/new
