const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const IslandChange = sequelize.define('islandChange', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    },
  );

  IslandChange.associate = (models) => {
    IslandChange.belongsTo(models.island, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false,
      },
    });
    IslandChange.belongsTo(models.player, {
      onDelete: 'CASCADE',
      as: 'oldOwner',
      foreignKey: {
        name: 'oldOwnerId',
        allowNull: false,
      },
    });
    IslandChange.belongsTo(models.player, {
      onDelete: 'CASCADE',
      as: 'newOwner',
      foreignKey: {
        name: 'newOwnerId',
        allowNull: false,
      },
    });
    IslandChange.belongsTo(models.world, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return IslandChange;
};