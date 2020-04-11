const defaultPagination = '{ perPage: 25, page: 1 }';

const typeDefs = `
  scalar Date

  type World {
    id: Int!
    number: Int
  }

  type Alliance {
    id: Int!
    code: String
    name: String
    world: World
  }
  
  type AllianceChange {
    id: Int!
    oldAlly: Alliance
    newAlly: Alliance
    player: Player
    createdAt: Date
  }

  type Player {
    id: Int!
    name: String
    points: Int
    alliance: Alliance
    islands: [Island]
    world: World
  }
  
  type Island {
    id: Int!
    number: Int
    name: String
    points: Int
    player: Player
    world: World
  }
  
  type IslandChange {
    id: Int!
    oldOwner: Player
    newOwner: Player
    island: Island
    createdAt: Date
  }
  
  input Pagination {
    page: Int
    perPage: Int
  }

  type Query {
    players(world: Int, pagination: Pagination = ${defaultPagination}): [Player]
    islands(world: Int, pagination: Pagination = ${defaultPagination}): [Island]
    alliances(world: Int, pagination: Pagination = ${defaultPagination}): [Alliance]
    islandChanges(world: Int, pagination: Pagination = ${defaultPagination}): [IslandChange]
    oceansCount(world: Int): Int!
  }
  
  type Mutation {
    createPlayer (
      name: String!
    ): Player
  }
`;

module.exports = typeDefs;