const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const AlliancePointsIncrease = sequelize.define('alliancePointsIncrease', {
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
      playersIncrease: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      dailyDate: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
      },
    },
  );

  AlliancePointsIncrease.associate = (models) => {
    AlliancePointsIncrease.belongsTo(models.alliance, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return AlliancePointsIncrease;
};