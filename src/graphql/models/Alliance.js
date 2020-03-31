const {
  GraphQLID,
  GraphQLString,
  GraphQLObjectType,
} = require('graphql');
const worldType = require('./World');

const allianceType = new GraphQLObjectType({
  name: 'Alliance',
  fields: {
    id: { type: GraphQLID },
    code: { type: GraphQLString },
    name: { type: GraphQLString },
    world: { type: worldType },
  },
});

module.exports = allianceType;