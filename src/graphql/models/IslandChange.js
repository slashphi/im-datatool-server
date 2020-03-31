const {
  GraphQLID,
  GraphQLString,
  GraphQLObjectType,
} = require('graphql');
const islandType = require('./Island');
const playerType = require('./Player');

const islandChangeType = new GraphQLObjectType({
  name: 'IslandChange',
  fields: {
    id: { type: GraphQLID },
    oldOwner: { type: playerType },
    newOwner: { type: playerType },
    island: { type: islandType },
    createdAt: { type: GraphQLString },
  },
});

module.exports = islandChangeType;