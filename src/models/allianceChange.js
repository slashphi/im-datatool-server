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