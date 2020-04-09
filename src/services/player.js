const models = require('../models');

exports.getPlayers = (pagination, world) => {
  return models.player.findAll({
    include: [models.alliance, models.island, models.world],
    limit: pagination.perPage,
    offset: (pagination.page - 1) * pagination.perPage,
  })
  .then((players) => players);
};

exports.createPlayer = (name) => {
  return models.player.create({
    name,
  })
  .then((player) => player);
};