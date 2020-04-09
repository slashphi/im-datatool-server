const models = require('../models');

exports.getIslandChanges = (pagination, world) => {
  return models.islandChange.findAll({
    include: [
      models.world,
      {
        model: models.player,
        as: 'newOwner',
      },
      {
        model: models.player,
        as: 'oldOwner',
      },
    ],
    limit: pagination.perPage,
    offset: (pagination.page - 1) * pagination.perPage,
  })
  .then((islandChanges) => islandChanges);
};