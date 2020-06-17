const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Player = sequelize.define('player', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },
      points: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0,
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ['name', 'worldId'],
        },
      ],
    },
  );

  Player.associate = (models) => {
    Player.belongsTo(models.alliance);
    Player.belongsTo(models.world, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false,
      },
    });
    Player.hasMany(models.island);
    Player.hasMany(models.islandChange, { as: 'oldOwner', foreignKey: 'oldOwnerId' });
    Player.hasMany(models.islandChange, { as: 'newOwner', foreignKey: 'newOwnerId' });
    Player.hasMany(models.allianceChange);
    Player.hasMany(models.playerPointsIncrease);
  };

  return Player;
};