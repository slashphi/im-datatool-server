const {
  GraphQLObjectType,
  GraphQLSchema,
} = require('graphql');

const queries = require('./queries');
const mutations = require('./mutations');

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: 'All queries',
    fields: queries,
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    description: 'All mutations',
    fields: mutations,
  }),
});

module.exports = schema;