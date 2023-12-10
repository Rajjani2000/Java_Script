var express = require("express");
const { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");

var schema = buildSchema(`
    type Query {
        message: String
        length: String
    }
`);

var root = {
  message: () => "You hit a graphql endpoint!",
  length: () => "ewrtdyguhjlk;",
};

var app = express();

app.use(
  "/testgraphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(3000, () => console.log("GraphQL Server is now live"));
