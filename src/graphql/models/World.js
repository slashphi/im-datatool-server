const {
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
} = require('graphql');

const worldType = new GraphQLObjectType({
  name: 'World',
  fields: {
    id: { type: GraphQLID },
    number: { type: GraphQLInt },
  },
});

module.exports = worldType;