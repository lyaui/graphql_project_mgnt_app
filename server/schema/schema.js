const { projects, clients } = require('../sampleData');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
} = require('graphql');

// Client Type
const ClientType = new GraphQLObjectType({
  name: 'Client',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    client: { type: ClientType },
    args: { id: { type: GraphQLID } },
    resolver(parent, args) {
      return clients.find((_client) => _client.id === args.id);
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery });
