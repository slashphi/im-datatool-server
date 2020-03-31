const {
  GraphQLInt,
  GraphQLInputObjectType,
} = require('graphql');

const paginationType = new GraphQLInputObjectType({
  name: 'Pagination',
  fields: {
    page: { type: GraphQLInt },
    perPage: { type: GraphQLInt },
  },
});

module.exports = paginationType;