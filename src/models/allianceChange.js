const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const AllianceChange = sequelize.define('allianceChange', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    },
  );

  AllianceChange.associate = (models) => {
    AllianceChange.belongsTo(models.player, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false,
      },
    });
    AllianceChange.belongsTo(models.alliance, {
      onDelete: 'CASCADE',
      as: 'oldAlly',
      foreignKey: {
        name: 'oldAllyId',
        allowNull: false,
      },
    });
    AllianceChange.belongsTo(models.alliance, {
      onDelete: 'CASCADE',
      as: 'newAlly',
      foreignKey: {
        name: 'newAllyId',
        allowNull: false,
      },
    });
    AllianceChange.belongsTo(models.world, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return AllianceChange;
};