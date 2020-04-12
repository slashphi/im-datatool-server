const models = require('../models');

exports.getIslands = (pagination, world) => {
  return models.island.findAll({
    include: [
      models.world,
      {
        model: models.player,
        include: [models.alliance],
      },
      {
        model: models.islandChange,
        include: [
          models.island,
          {
            model: models.player,
            as: 'newOwner',
            include: [models.alliance],
          },
          {
            model: models.player,
            as: 'oldOwner',
            include: [models.alliance],
          },
        ],
      },
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
  .then(({ count }) => Math.ceil(count / 100));
};