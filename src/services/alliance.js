const moment = require('moment-timezone');
const { Op } = require('sequelize');

const models = require('../models');

exports.getAlliances = (pagination, sorting, world) => {
  const today = moment()
  .format('YYYY-MM-DD');

  return models.alliance.findAll({
    where: {
      points: {
        [Op.gt]: 0,
      },
    },
    include: [
      {
        model: models.alliancePointsIncrease,
        limit: 1,
        order: [['createdAt', 'DESC']],
      },
    ],
    order: sorting ? [[sorting.field, sorting.order]] : [],
    limit: pagination.perPage,
    offset: (pagination.page - 1) * pagination.perPage,
  })
  .then((alliances) => alliances);
};