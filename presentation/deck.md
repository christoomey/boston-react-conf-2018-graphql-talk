# [fit] GraphQL & React

![](images/pbj.jpg)

---

# Chris Toomey

![inline](images/thoughtbot.png)

## @christoomey

## @_bikeshed

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

![](./code-slides/1.png)

---

![](./code-slides/2.png)

---

![](./code-slides/3.png)

---

![](./code-slides/4.png)

---

![](./code-slides/5.png)

---

![](./code-slides/6.png)

---

![](./code-slides/7.png)

---

![](./code-slides/8.png)

---

![](./code-slides/9.png)

---

![](./code-slides/10.png)

---

![](./code-slides/11.png)

---

![](./code-slides/12.png)

---

![](./code-slides/13.png)

---

![](./code-slides/14.png)

---

![](./code-slides/15.png)

---

![](./code-slides/16.png)

---

![](./code-slides/17.png)

---

![](./code-slides/18.png)

---

![](./code-slides/19.png)

---

![](./code-slides/20.png)

---

![](./code-slides/21.png)

---

![](./code-slides/22.png)

---

![](./code-slides/23.png)

---

![](./code-slides/24.png)

---

![](./code-slides/25.png)

---

![](./code-slides/26.png)

---

![](./code-slides/27.png)

---

![](./code-slides/28.png)

---

![](./code-slides/29.png)

---

![](./code-slides/30.png)

---

![](./code-slides/31.png)

---

![](./code-slides/32.png)

---

![](./code-slides/33.png)

---

![](./code-slides/34.png)

---

![](./code-slides/35.png)

---

![](./code-slides/36.png)

---

![](./code-slides/37.png)

---

![](./code-slides/38.png)

---

![](./code-slides/39.png)

---

![](./code-slides/40.png)

---

![](./code-slides/41.png)

---

![](./code-slides/42.png)

---

![](./code-slides/43.png)

---

![](./code-slides/44.png)

---

![](./code-slides/45.png)

---

![](./code-slides/46.png)

---

![](./code-slides/47.png)

---

![](./code-slides/48.png)

---

![](./code-slides/49.png)

---

![](./gifs/typescript.gif)

---

![fit](./code-slides/50.png)

---

![fit](./code-slides/51.png)

---

![fit](./code-slides/52.png)

---

![fit](./code-slides/53.png)

---

![fit](./code-slides/54.png)

---

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
