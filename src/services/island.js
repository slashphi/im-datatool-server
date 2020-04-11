const models = require('../models');

exports.getIslands = (pagination, world) => {
  return models.island.findAll({
    include: [
      {
        model: models.player,
        include: [models.alliance],
      },
      models.world,
    ],
    limit: pagination.perPage,
    offset: (pagination.page - 1) * pagination.perPage,
  })
  .then((islands) => islands);
};

/**
 * Get the oceans count
 *
 * @param world
 * @returns {Promise<number>}
 */
exports.getOceansCount = (world) => {
  return models.island.findAndCountAll()
  .then(({ count }) => Math.floor(count / 100));
};