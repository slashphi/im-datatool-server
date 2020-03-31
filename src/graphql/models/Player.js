const {
  GraphQLID,
  GraphQLString,
  GraphQLFloat,
  GraphQLList,
  GraphQLObjectType,
} = require('graphql');
const allianceType = require('./Alliance');
const worldType = require('./World');
const islandType = require('./Island');

const playerType = new GraphQLObjectType({
  name: 'Player',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    points: { type: GraphQLFloat },
    alliance: { type: allianceType },
    world: { type: worldType },
    islands: { type: GraphQLList(islandType) },
  },
});

module.exports = playerType;