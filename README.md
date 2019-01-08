# React + GraphQL Sample App

You can view the recording from Boston React Conf 2018 where I presented the
talk associated with this repo:

[![boston react conf talk video](https://img.youtube.com/vi/Qsoj4s_Ml6s/0.jpg)](https://www.youtube.com/watch?v=Qsoj4s_Ml6s)

This sample app demonstrates how to integrate React app with a GraphQL API. The
app uses the [Apollo framework][] along with its stellar [React bindings][] to
interact with the [GitHub GraphQL API][]. In addition, the focus was on the
pattern of collocating queries with components, specifically highlighting the
use of `fragment`s within sub-components to allow each component to own its
data, while allowing the application to compose queries from the fragments and
efficiently interact with the GraphQL API.

[apollo framework]: https://www.apollographql.com/docs/react/
[react bindings]: https://github.com/apollographql/react-apollo
[github graphql api]: https://developer.github.com/v4/

## Typescript

The [master][] branch contains the default JS based implementation of the
application. In the [typescript
branch](https://github.com/christoomey/boston-react-conf-2018-graphql-talk/tree/typescript)
all components are converted to [TypeScript][], and via the magic of [Apollo
CLI][], relevant types are generated for each component with data needs.

[typescript]: https://www.typescriptlang.org/
[apollo cli]: https://github.com/apollographql/apollo-cli
[master]: https://github.com/christoomey/boston-react-conf-2018-graphql-talk

## Setup

### Dependencies

This project uses [yarn][] to manage dependencies.

    yarn install

### GitHub Token

You'll need to to generate a [GitHub personal access token][] with `repo` and `read:org` 
scopes. Once generated, add it to a `.env` file:

```sh
GITHUB_TOKEN=abcdef-secret-token
```

**Note** - The app will be connected to live data and your account based on the
token you provide. The only action built into the app is to Star & Unstar
repositories, but just be super clear, those actions will be reflected on
github.com.

[yarn]: https://yarnpkg.com/en/
[github personal access token]: https://github.com/settings/tokens/new

### Starting the App

The app can be started with:

```sh
yarn start
```
