const models = require('../models');

exports.getAlliances = (pagination, world) => {
  return models.alliance.findAll({
    limit: pagination.perPage,
    offset: (pagination.page - 1) * pagination.perPage,
  })
  .then((alliances) => alliances);
};