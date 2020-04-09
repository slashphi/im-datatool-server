const models = require('../models');

exports.getIslands = (pagination, world) => {
  return models.island.findAll({
    include: [models.player, models.world],
    limit: pagination.perPage,
    offset: (pagination.page - 1) * pagination.perPage,
  })
  .then((islands) => islands);
};