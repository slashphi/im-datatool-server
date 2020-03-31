const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Island = sequelize.define('island', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      number: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      points: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0,
      },
    },
  );

  Island.associate = (models) => {
    Island.belongsTo(models.player, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false,
      },
    });
    Island.belongsTo(models.world, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false,
      },
    });
    Island.hasMany(models.islandChange);
    Island.hasMany(models.islandPointsIncrease);
  };

  return Island;
};