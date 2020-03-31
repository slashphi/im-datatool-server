const {
  GraphQLID,
  GraphQLString,
  GraphQLObjectType,
} = require('graphql');
const allianceType = require('./Alliance');
const playerType = require('./Player');

const allianceChangeType = new GraphQLObjectType({
  name: 'AllianceChange',
  fields: {
    id: { type: GraphQLID },
    oldAlly: { type: allianceType },
    newAlly: { type: allianceType },
    player: { type: playerType },
    createdAt: { type: GraphQLString },
  },
});

module.exports = allianceChangeType;