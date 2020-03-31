const {
  GraphQLID,
  GraphQLFloat,
  GraphQLString,
  GraphQLObjectType,
} = require('graphql');
const worldType = require('./World');
const playerType = require('./Player');

const islandType = new GraphQLObjectType({
  name: 'Island',
  fields: {
    id: { type: GraphQLID },
    number: { type: GraphQLFloat },
    name: { type: GraphQLString },
    points: { type: GraphQLFloat },
    player: { type: playerType },
    world: { type: worldType },
  },
});

module.exports = islandType;