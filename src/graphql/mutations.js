const {
  GraphQLString,
  GraphQLNonNull,
} = require('graphql');

/************************** GraphQL Types **************************/
const PlayerGraphQLType = require('./models/Player');
/************************** Services **************************/
const PlayerService = require('../services/player');

const mutations = {
  createPlayer: {
    type: PlayerGraphQLType,
    args: {
      name: { type: GraphQLNonNull(GraphQLString) },
    },
    resolve: (root, args) => {
      return PlayerService.createPlayer(args.name);
    },
  },
};

module.exports = mutations;