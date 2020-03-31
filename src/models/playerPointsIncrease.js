const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const PlayerPointsIncrease = sequelize.define('playerPointsIncrease', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      pointsIncrease: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      islandsIncrease: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      dailyDate: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
      },
    },
  );

  PlayerPointsIncrease.associate = (models) => {
    PlayerPointsIncrease.belongsTo(models.player, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return PlayerPointsIncrease;
};