const { Op } = require('sequelize');

const models = require('../models');

exports.getPlayers = (pagination, sorting, world) => {
  return models.player.findAll({
    where: {
      points: {
        [Op.gt]: 0,
      },
    },
    include: [models.alliance, models.island, models.world],
    order: sorting ? [[sorting.field, sorting.order]] : [],
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