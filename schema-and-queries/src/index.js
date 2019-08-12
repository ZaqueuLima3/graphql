const { ApolloServer } = require('apollo-server');
const { importSchema } = require('graphql-import');
const { resolve } = require('path');
const resolvers = require('./resolvers/index');

const server = new ApolloServer({
  typeDefs: importSchema(resolve(__dirname, 'schema', 'index.graphql')),
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`)
});