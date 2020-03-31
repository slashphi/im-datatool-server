const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const IslandPointsIncrease = sequelize.define('islandPointsIncrease', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      pointsIncrease: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      dailyDate: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
      },
    },
  );

  IslandPointsIncrease.associate = (models) => {
    IslandPointsIncrease.belongsTo(models.island, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return IslandPointsIncrease;
};