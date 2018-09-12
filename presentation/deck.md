# [fit] GraphQL & React

![](images/pbj.jpg)

---

[.build-lists: true]

![inline](images/graphql-logo.png)

# A Query Language for your API

^
* Similar to REST & SQL
* Throws out all the normal REST stuff (status codes, verbs, etc)
* JSON w/ a custom query language

---

# You Get What You Ask For

![inline](images/sample-query-and-response.png)

^
* Avoid over / under-fetching
* Client-centric
* Ability to make changes to the server (monitor exactly what fields are used)

---

# Get Related Resources in a Single Query

![inline](images/query-related-types.png)

---

# Schema & Type System

![inline](images/type-system-static.gif)

---

# [fit] [GraphiQL Demo](https://developer.github.com/v4/explorer/)

![](images/graphiql.png)

[rest api for user]: https://api.github.com/users/christoomey

---

# [fit] How Does GraphQL Fit with React?

![inline](images/separation-of-concerns.jpg)

^
comes from a 2017 talk by Cristiano Rastelli called Let There Be Peace On CSS
https://speakerdeck.com/didoo/let-there-be-peace-on-css

---

![](images/app-demo.png)

# [fit] [Sample App Demo](http://localhost:1234/users/)

---

![fit](images/react-native-graphql-github.jpg)

---

# [fit] What, Exactly, _is_ GraphQL?

* [A Specification][]
* Type System
* Query Syntax
* Execution sequence and algorithms (parsing, validation, resolution)
* A reference implementation (GraphQL.js)

![right fit](images/graphql-spec.png)

[a specification]: http://facebook.github.io/graphql/October2016/

---

Show where it fits in the stack (single route controller instead of typical
many w/ REST API)

Show where it fits in the client <-> server (small amoutn in client, bigger in
server to parse, validate, resolve queries)

---

# [fit] What about Redux?

![inline](images/dan-abramov-redux-fetch-tweet.png)
