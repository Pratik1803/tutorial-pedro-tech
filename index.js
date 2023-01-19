const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/typedefs");
const { resolvers } = require("./schema/resolver");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// 1:37:21 

server.listen().then((url) => {
  console.log(`Your Api is Runningg ;) At ${url.url}`);
});
