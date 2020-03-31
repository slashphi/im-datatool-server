const models = require('../models');

exports.getPlayers = (pagination, world) => {
  return models.Player.findAll({
    include: [models.Alliance, models.Island, models.World],
  })
  .then((players) => players);
};

exports.createPlayer = (name) => {
  return models.Player.create({
    name,
  })
  .then((player) => player);
};