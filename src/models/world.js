const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const World = sequelize.define('world', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      number: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        unique: true,
      },
    },
  );

  World.associate = (models) => {
    World.hasMany(models.player);
    World.hasMany(models.alliance);
    World.hasMany(models.island);
  };

  return World;
};