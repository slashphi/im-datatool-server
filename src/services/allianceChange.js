const models = require('../models');

exports.getAllianceChanges = (pagination, world) => {
  return models.allianceChange.findAll({
    include: [
      models.world,
      models.player,
      {
        model: models.alliance,
        as: 'newAlly',
      },
      {
        model: models.alliance,
        as: 'oldAlly',
      },
    ],
    limit: pagination.perPage,
    offset: (pagination.page - 1) * pagination.perPage,
  })
  .then((allianceChanges) => allianceChanges);
};