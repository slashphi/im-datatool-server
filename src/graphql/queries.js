const {
  GraphQLList,
  GraphQLInt,
} = require('graphql');

const { getDefaultPagination } = require('../utils/functions');

/************************** GraphQL Models **************************/
const PlayerGraphQLType = require('./models/Player');

/************************** GraphQL Types **************************/
const PaginationGraphQLType = require('./types/Pagination');

/************************** Services **************************/
const PlayerService = require('../services/player');

const queries = {
  players: {
    type: GraphQLList(PlayerGraphQLType),
    description: 'Get a list of players',
    args: {
      world: { type: GraphQLInt },
      pagination: { type: PaginationGraphQLType },
    },
    resolve: (root, args) => {
      const pagination = getDefaultPagination(args.pagination);

      return PlayerService.getPlayers(pagination, args.world);
    },
  },
};

module.exports = queries;